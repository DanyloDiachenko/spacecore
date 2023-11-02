import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import htmlReactParser from "html-react-parser";

import KnowledgeBaseDetailedLinks from "components/pageComponents/KnowledgeBaseDetailedLinks";
import KnowledgeBaseDetailedPageComponentProps from "interfaces/knowledgeBaseDetailedPageComponent.props";
import { IKnowledgeBaseNavigationInitStore } from "store/knowledgeBaseNavigation/initStore";
import PhotoPopup from "components/popups/Photo";

const KnowledgeBaseDetailedDetailedComponent = ({
    knowledgeBaseDetailedDetailTitle,
    navigationBlock,
    contentBlock,
    isKnowledgeBaseNavigationOpen,

    setOpenPopup,
}: KnowledgeBaseDetailedPageComponentProps): JSX.Element => {
    const router = useRouter();
    const category = router.query.category;

    let defaultActiveLink = "";

    navigationBlock.map((item) => {
        item.additional.map((item) => {
            if (item.slug == category) {
                defaultActiveLink = item.title;
            }
        });
    });

    defaultActiveLink = defaultActiveLink ? defaultActiveLink : "";

    const [activeLinks, setActiveLinks] = useState<string[]>([
        defaultActiveLink,
    ]);
    const [activeLink, setActiveLink] = useState<string>("");
    const [navigation, setNavigation] = useState<
        { title: string; href: string }[]
    >([]);
    const [contentBlockMain, setContentBlockMain] = useState(contentBlock);
    const [activeNavigationTitle, setActiveNavigationTitle] =
        useState<string>("");

    const setActiveLinksHandler = (titleClicked: string): void => {
        if (activeLinks.includes(titleClicked)) {
            setActiveLinks(
                activeLinks.filter((title) => title !== titleClicked),
            );
        } else {
            setActiveLinks([...activeLinks, titleClicked]);
        }
    };

    const handleImageClick = (src: string): void => {
        setOpenPopup(src);
    };

    const scrollElementToView = (scrollToId: string): void => {
        const element = document.querySelector(`#${scrollToId}`) as HTMLElement;

        if (!element) {
            return;
        }

        const elRect = element.getBoundingClientRect();

        const scrollDistance = elRect.top + window.scrollY;

        const offset =
            Number(element.getAttribute("data-scroll-to-view-offset")) || 0;

        window.scrollTo({
            top: scrollDistance + offset,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const findedItem = navigationBlock.find((nav) =>
            nav.additional.some((navAdd) =>
                navAdd.links.some(
                    (navLink) =>
                        navLink.title === knowledgeBaseDetailedDetailTitle,
                ),
            ),
        );

        const findedItemTitle = findedItem?.additional.find((navAdd) =>
            navAdd.links.some(
                (nav) => nav.title === knowledgeBaseDetailedDetailTitle,
            ),
        );
        findedItemTitle && setActiveLinks([findedItemTitle?.title]);

        const findedItemTitleLink = findedItemTitle?.links.find(
            (navLink) => navLink.title === knowledgeBaseDetailedDetailTitle,
        );
        findedItemTitleLink && setActiveLink(findedItemTitleLink.slug);
    }, []);

    useEffect(() => {
        let foundObject = null;

        for (const nav of navigationBlock) {
            for (const navAdd of nav.additional) {
                foundObject = navAdd.links.find(
                    (navLink) => navLink.slug === router.query.slug,
                );
                if (foundObject) {
                    break;
                }
            }
            if (foundObject) {
                break;
            }
        }
        if (foundObject) {
            if (foundObject.slug) {
                setActiveLink(foundObject.slug);
            }
        }
    }, [router.query.slug]);

    useEffect(() => {
        if (!contentBlockMain) {
            return;
        }
        const parser = new DOMParser();
        const doc = parser.parseFromString(contentBlockMain, "text/html");

        const h2Elements = doc.querySelectorAll("h2");
        const h2Values: string[] = [];

        let idCounter = 1;

        h2Elements.forEach((element) => {
            element.textContent && h2Values.push(element.textContent);
            element.setAttribute("id", `content-item-${idCounter++}`);
        });

        setNavigation(
            h2Values.map((h2Value, index) => {
                return {
                    title: h2Value,
                    href: `#content-item-${index + 1}`,
                };
            }),
        );

        setContentBlockMain(doc.documentElement.outerHTML);
    }, [contentBlockMain]);

    useEffect(() => {
        setContentBlockMain(contentBlock);
    }, [contentBlock]);

    return (
        <>
            <PhotoPopup />
            <section className="container knowledge-wrapper">
                <KnowledgeBaseDetailedLinks
                    activeLinks={activeLinks}
                    activeLink={activeLink}
                    setActiveLinksHandler={setActiveLinksHandler}
                    setActiveLink={setActiveLink}
                    navigation={navigationBlock}
                />
                {isKnowledgeBaseNavigationOpen && (
                    <div className="knowledge-base-links-wrapper">
                        <KnowledgeBaseDetailedLinks
                            activeLinks={activeLinks}
                            activeLink={activeLink}
                            setActiveLinksHandler={setActiveLinksHandler}
                            setActiveLink={setActiveLink}
                            navigation={navigationBlock}
                        />
                    </div>
                )}

                <>
                    {contentBlockMain && (
                        <div className="wrapper">
                            <div>
                                {htmlReactParser(contentBlockMain, {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-ignore
                                    replace: (node: any) => {
                                        if (node.name === "img") {
                                            return (
                                                <img
                                                    {...node.attribs}
                                                    onClick={() =>
                                                        handleImageClick(
                                                            node.attribs.src,
                                                        )
                                                    }
                                                />
                                            );
                                        }
                                    },
                                })}
                            </div>
                            <div className="links">
                                {navigation.map((nav, index) => (
                                    <span
                                        key={index}
                                        className={`link ${
                                            activeNavigationTitle === nav.href
                                                ? "active"
                                                : "inactive"
                                        }`}
                                        onClick={() => {
                                            scrollElementToView(
                                                nav.href.slice(
                                                    1,
                                                    nav.href.length,
                                                ),
                                            );
                                            setActiveNavigationTitle(nav.href);
                                        }}
                                    >
                                        <img
                                            src="/images/small/logo.svg"
                                            alt="logo"
                                        />
                                        <span>{nav.title}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            </section>
        </>
    );
};

const mapState = (state: {
    knowledgeBaseNavigation: IKnowledgeBaseNavigationInitStore;
}) => {
    return {
        isKnowledgeBaseNavigationOpen:
            state.knowledgeBaseNavigation.isKnowledgeBaseNavigationOpen,
    };
};
const mapDispatch = {
    setOpenKnowledgeBaseNavigation: (typeValue: boolean) => ({
        type: "SET_OPEN",
        typeValue: typeValue,
    }),
    setOpenPopup: (popupToOpen: string) => ({
        type: "SET_OPEN_POPUP",
        popupToOpen: popupToOpen,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(KnowledgeBaseDetailedDetailedComponent);
