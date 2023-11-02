import Image from "next/image";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import htmlReactParser from "html-react-parser";

import { NewsDetailePageComponentProps } from "interfaces/newsDetailedPageComponent.props";
import Trans from "inc/locale/Trans";
import formatDate from "helpers/formatDate";
import ReadByTheme from "components/pageComponents/ReadByTheme";
import PhotoPopup from "components/popups/Photo";

const NewsDetailed = ({
    newsDetailedBlock,
    readByThemeBlock,

    setOpenPopup,
}: NewsDetailePageComponentProps): JSX.Element => {
    const [navigation, setNavigation] = useState<
        { title: string; href: string }[]
    >([]);
    const [contentBlock, setContentBlock] = useState(newsDetailedBlock.content);
    const [activeNavigationTitle, setActiveNavigationTitle] =
        useState<string>("");

    const scrollElementToView = (scrollToId: string): void => {
        const element = document.querySelector(`#${scrollToId}`) as HTMLElement;

        const elRect = element.getBoundingClientRect();

        const scrollDistance = elRect.top + window.scrollY;

        const offset =
            Number(element.getAttribute("data-scroll-to-view-offset")) || 0;

        window.scrollTo({
            top: scrollDistance + offset,
            behavior: "smooth",
        });
    };

    const handleImageClick = (src: string): void => {
        setOpenPopup(src);
    };

    useEffect(() => {
        if (!newsDetailedBlock.content) {
            return;
        }
        const parser = new DOMParser();
        const doc = parser.parseFromString(
            newsDetailedBlock.content,
            "text/html",
        );

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

        setContentBlock(doc.documentElement.outerHTML);
    }, [newsDetailedBlock.content]);

    return (
        <>
            <PhotoPopup />
            <section className="container-fluid-bg news-main">
                <div className="container top-content">
                    <div className="titles">
                        <div className="routes">
                            <Trans string="Главная" /> —{" "}
                            {newsDetailedBlock.category} —
                        </div>
                        <div className="title h2-md">
                            {newsDetailedBlock.title}
                        </div>
                    </div>
                    <div className="news-author top">
                        <div className="top-content">
                            <p className="date">
                                {formatDate(newsDetailedBlock.created)}
                            </p>
                            <div className="category">
                                {newsDetailedBlock.category}
                            </div>
                        </div>
                        <div className="author">
                            {newsDetailedBlock.authorImgSrc &&
                            newsDetailedBlock.authorName ? (
                                <img
                                    src={newsDetailedBlock.authorImgSrc}
                                    alt={
                                        newsDetailedBlock.authorName + " photo"
                                    }
                                    width={40}
                                    height={40}
                                />
                            ) : (
                                ""
                            )}
                            <div>
                                {newsDetailedBlock.authorName &&
                                newsDetailedBlock.authorJob ? (
                                    <>
                                        <p className="name">
                                            {newsDetailedBlock.authorName}
                                        </p>
                                        <p className="job">
                                            {newsDetailedBlock.authorJob}
                                        </p>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <img
                            src={newsDetailedBlock.imgSrc}
                            alt={newsDetailedBlock.title + " photo"}
                        />
                    </div>
                </div>
            </section>
            <section className="container news-detailed-content">
                <div className="left-col">
                    <div className="h3">Содержание</div>
                    {navigation && navigation.length
                        ? navigation.map((nav, index) => (
                              <span
                                  className={`nav ${
                                      activeNavigationTitle === nav.href
                                          ? "active"
                                          : ""
                                  }`}
                                  key={index}
                                  onClick={() => {
                                      scrollElementToView(
                                          nav.href.slice(1, nav.href.length),
                                      );
                                      setActiveNavigationTitle(nav.href);
                                  }}
                              >
                                  <Image
                                      src="/images/small/logo.svg"
                                      alt={nav.title}
                                      width="14"
                                      height="14"
                                  />
                                  {nav.title}
                              </span>
                          ))
                        : ""}
                </div>
                <div className="news-content-main">
                    {htmlReactParser(contentBlock, {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        replace: (node: any) => {
                            if (node.name === "img") {
                                return (
                                    <img
                                        {...node.attribs}
                                        onClick={() =>
                                            handleImageClick(node.attribs.src)
                                        }
                                    />
                                );
                            }
                        },
                    })}
                </div>
                <div className="news-author">
                    <div className="top-content">
                        <p className="date">
                            {formatDate(newsDetailedBlock.created)}
                        </p>
                        <div className="category">
                            {newsDetailedBlock.category}
                        </div>
                    </div>
                    <div className="author">
                        {newsDetailedBlock.authorImgSrc &&
                        newsDetailedBlock.authorName ? (
                            <img
                                src={newsDetailedBlock.authorImgSrc}
                                alt={newsDetailedBlock.authorName + " photo"}
                                width={62}
                                height={62}
                            />
                        ) : (
                            ""
                        )}
                        <div>
                            {newsDetailedBlock.authorName &&
                            newsDetailedBlock.authorJob ? (
                                <>
                                    <p className="name">
                                        {newsDetailedBlock.authorName}
                                    </p>
                                    <p className="job">
                                        {newsDetailedBlock.authorJob}
                                    </p>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <ReadByTheme readByThemeBlock={readByThemeBlock} />
        </>
    );
};

const mapState = () => {
    return {};
};
const mapDispatch = {
    setOpenPopup: (popupToOpen: string) => ({
        type: "SET_OPEN_POPUP",
        popupToOpen: popupToOpen,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(NewsDetailed);
