import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Language from "../Language";
import ThemeSwitcher from "../ThemeSwitcher";
import HeaderAdaptiveProps from "./headerAdaptive.props";
import ServicesWorks from "../ServicesWorks";

const HeaderAdaptive = ({
    headerAdaptiveNavigation,
    emailLink,
    email,
    className,
    headerBlock,
}: HeaderAdaptiveProps): JSX.Element => {
    const [headerNavigationTitle, setHeaderNavigationTitle] =
        useState<string>("");

    const setHeaderNavigationAdditionalHandler = (
        headernavigationTitle: string,
    ): void => {
        const headerNavItemFinded = headerAdaptiveNavigation.find(
            (headerNavItem) => headerNavItem.title === headernavigationTitle,
        );

        if (headerNavItemFinded?.title === headerNavigationTitle) {
            setHeaderNavigationTitle("");
        } else {
            headerNavItemFinded &&
                setHeaderNavigationTitle(headerNavItemFinded.title);
        }
    };

    return (
        <div className={`header-adaptive ${className}`}>
            <div style={{ minHeight: 0 }}>
                <div className="top-controls">
                    <Language />
                    <ThemeSwitcher />
                    <ServicesWorks header_block={headerBlock} />
                </div>
                {headerAdaptiveNavigation &&
                    headerAdaptiveNavigation.map((headerNav, index) => (
                        <>
                            {headerNav.link ? (
                                <Link
                                    href={headerNav.link}
                                    className="item"
                                    key={index}
                                >
                                    <span className="h4">
                                        {headerNav.title}
                                    </span>
                                </Link>
                            ) : (
                                <div className="item" key={headerNav.title}>
                                    <div
                                        onClick={() =>
                                            setHeaderNavigationAdditionalHandler(
                                                headerNav.title,
                                            )
                                        }
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <div className="h4">
                                            {headerNav.title}
                                        </div>
                                        <Image
                                            src="/images/icons/arrow-bottom.svg"
                                            alt="arrow"
                                            width="11"
                                            height="5"
                                            className={`header-arrow ${
                                                headerNav.title ===
                                                headerNavigationTitle
                                                    ? "arrow-active"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`additional ${
                                            headerNavigationTitle ===
                                            headerNav.title
                                                ? "additional-active"
                                                : ""
                                        }`}
                                    >
                                        <div style={{ minHeight: 0 }}>
                                            {headerNav.additional &&
                                                headerNav.additional.map(
                                                    (
                                                        headerNavAdditional,
                                                        index,
                                                    ) => (
                                                        <Link
                                                            key={index}
                                                            className="link"
                                                            href={
                                                                headerNavAdditional.link
                                                            }
                                                        >
                                                            {
                                                                headerNavAdditional.title
                                                            }
                                                        </Link>
                                                    ),
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                <div className="email">
                    <a href={emailLink} className="h4">
                        {email}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdaptive;
