import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, useEffect, useState } from "react";

import KnowledgeBaseDetailsProps from "./knowledgeBase.props";

const KnowledgeBaseDetailedLinks = ({
    navigation,
    setActiveLinksHandler,
    activeLinks,
    activeLink,
}: KnowledgeBaseDetailsProps): JSX.Element => {
    const findSlugToRoute = () => {
        const foundNavAdd = navigation
            ?.flatMap((navMain) => navMain.additional)
            .find((navAdd) => activeLinks.includes(navAdd.title));

        return foundNavAdd ? foundNavAdd.slug : "";
    };

    const [slugToRoute, setSlugToRoute] = useState<string>(() =>
        findSlugToRoute(),
    );

    const setActiveLinksHandlerKeyboard = (
        e: KeyboardEvent,
        navAddTitle: string,
    ) => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            setActiveLinksHandler(navAddTitle);
        }
    };

    useEffect(() => {
        setSlugToRoute(findSlugToRoute());
    }, [activeLinks]);

    return (
        <div className="detailed-links">
            {navigation &&
                navigation.map((nav, index) => (
                    <div key={index}>
                        <div className="h3">{nav.title}</div>
                        {nav.additional.map((navAdd, index) => (
                            <div key={index} className="item">
                                <div
                                    onClick={() =>
                                        setActiveLinksHandler(navAdd.title)
                                    }
                                    onKeyDown={(e) =>
                                        setActiveLinksHandlerKeyboard(
                                            e,
                                            navAdd.title,
                                        )
                                    }
                                    tabIndex={0}
                                    className="top"
                                >
                                    <div>{navAdd.title}</div>
                                    <Image
                                        src="/images/icons/arrow-bottom.svg"
                                        alt="arrow"
                                        width="11"
                                        height="5"
                                        style={{
                                            rotate: `${
                                                activeLinks.includes(
                                                    navAdd.title,
                                                )
                                                    ? "180deg"
                                                    : ""
                                            }`,
                                        }}
                                    />
                                </div>
                                <div
                                    className={`content ${
                                        activeLinks.includes(navAdd.title)
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <div style={{ minHeight: 0 }}>
                                        {navAdd.links.map((navLink, index) => (
                                            <Link
                                                key={index}
                                                /* onClick={() =>
                                                    setActiveLink(navLink.slug)
                                                }
                                                onKeyDown={(e) =>
                                                    setActiveLinkKeyboardHandler(
                                                        e,
                                                        navLink.slug,
                                                    )
                                                } */
                                                className={
                                                    activeLink === navLink.slug
                                                        ? "active"
                                                        : ""
                                                }
                                                tabIndex={
                                                    activeLinks.includes(
                                                        navAdd.title,
                                                    )
                                                        ? 0
                                                        : -1
                                                }
                                                href={
                                                    "/knowledge-base/" +
                                                    slugToRoute +
                                                    "/" +
                                                    navLink.slug
                                                }
                                            >
                                                <Image
                                                    src="/images/small/purple-line.svg"
                                                    alt="active"
                                                    width="20"
                                                    height="2"
                                                />
                                                {navLink.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default KnowledgeBaseDetailedLinks;
