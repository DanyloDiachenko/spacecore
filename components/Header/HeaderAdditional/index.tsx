import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, KeyboardEvent, useRef } from "react";

import ArrowRight from "components/UI/Icons/ArrowRight";
import GearIcon from "components/UI/Icons/Gear";
import HeaderAdditionalProps from "./headerAdditional.props";
import onClickOutsideHandler from "helpers/onClickOutside";
import ShortMenu from "../HeaderShortMenu";

const HeaderAdditional = ({
    navigation,
}: HeaderAdditionalProps): JSX.Element => {
    const router = useRouter();

    const [firstLevelMenuActive, setFirstLevelMenuActive] =
        /* Что активное: Продукты, Доп.услуги, Ресурсы... */
        useState<string>("");
    const [secondLevelMenu, setSecondLevelMenu] = useState<
        { title: string; link: string }[]
    >(
        /* Активное слева: Серверы и вычисления, Серверы и вычисления, Безопасность и 152-ФЗ... */
        [
            {
                title: "",
                link: "",
            },
        ],
    );
    const [secondLevelMenuActive, setSecondLevelMenuActive] =
        /* Активное слева: Серверы и вычисления, Серверы и вычисления, Безопасность и 152-ФЗ...
        Что б показывать ссылки справа
        */
        useState<string>("");
    const [thirdLevelMenuActive, setThirdLevelMenuActive] = useState([
        /* Массив ссылок справа */
        { icon: "", title: "", link: "" },
    ]);
    const [isShortMenuOpen, setIsShortMenuOpen] = useState<boolean>(false);

    const setFirstLevelMenuActiveHandler = (firstLevelMenuTitle: string) => {
        /* Выбор активного элемента 1-го уровня. Кликая на уже активный элемент, меню закрывается */
        if (firstLevelMenuTitle === firstLevelMenuActive) {
            setFirstLevelMenuActive("");
        } else {
            setFirstLevelMenuActive(firstLevelMenuTitle);
        }
    };

    const setSecondLevelMenuHandler = (firstLevelMenuTitle: string) => {
        /* Открытие левого меню (2-ой уровень) */
        const secondLevelMenuFinded = navigation.find(
            (nav) => nav.title == firstLevelMenuTitle,
        );
        if (secondLevelMenuFinded) {
            setSecondLevelMenu(secondLevelMenuFinded.leftMenu);

            if (secondLevelMenuFinded.leftMenu[0]) {
                openThirdMenuLevel(secondLevelMenuFinded.leftMenu[0].title);
            }
        }
    };

    const setThirdLevelMenuActiveHandler = (secondLevelMenuTitle: string) => {
        /* Открытие правого меню - ссылок с иконками (3-ий уровень) */

        navigation.map((nav) => {
            const thirdLevelMenuFinded = nav.leftMenu.find(
                (leftNav) => leftNav.title == secondLevelMenuTitle,
            );
            if (thirdLevelMenuFinded) {
                setThirdLevelMenuActive(
                    thirdLevelMenuFinded.additional
                        ? thirdLevelMenuFinded.additional
                        : [],
                );
            }
        });
    };

    const openAdditionalMenu = (
        firstMenuTitle: string,
        isShortMenuToOpen?: boolean,
    ) => {
        setFirstLevelMenuActiveHandler(firstMenuTitle);
        setSecondLevelMenuHandler(firstMenuTitle);
        if (isShortMenuToOpen) {
            setIsShortMenuOpen(isShortMenuToOpen);
        } else {
            setIsShortMenuOpen(false);
        }

        const findedSecondLevelFirstItem = navigation.find(
            (nav) => nav.title === firstMenuTitle,
        )?.leftMenu[0];

        findedSecondLevelFirstItem &&
            findedSecondLevelFirstItem.title &&
            openThirdMenuLevel(findedSecondLevelFirstItem.title);
    };

    const openAdditionalMenuKeyboard = (
        e: KeyboardEvent,
        firstMenuTitle: string,
    ) => {
        if (e.code === "Enter") {
            openAdditionalMenu(firstMenuTitle);
        }
    };

    const openThirdMenuLevel = (secondMenuTitle: string) => {
        setSecondLevelMenuActive(secondMenuTitle);
        setThirdLevelMenuActiveHandler(secondMenuTitle);
    };

    const openThirdMenuLevelKeyboard = (
        e: KeyboardEvent,
        secondMenuTitle: string,
    ) => {
        if (e.code === "Enter") {
            openThirdMenuLevel(secondMenuTitle);
        }
    };

    const additionalMenuRef = useRef<HTMLDivElement>(null);
    onClickOutsideHandler(additionalMenuRef, () => {
        setFirstLevelMenuActive("");
    });

    useEffect(() => {
        setFirstLevelMenuActive("");
    }, [router.asPath]);

    const generateSecondLevelMenu = () => {
        return (
            <>
                {!isShortMenuOpen && (
                    <div className="section-titles">
                        {secondLevelMenu.map((leftNav, index) => (
                            <>
                                {leftNav.link.length ? (
                                    <Link
                                        href={leftNav.link}
                                        tabIndex={0}
                                        onKeyDown={(e) =>
                                            openThirdMenuLevelKeyboard(
                                                e,
                                                leftNav.title,
                                            )
                                        }
                                        onMouseEnter={() =>
                                            openThirdMenuLevel(leftNav.title)
                                        }
                                        key={index}
                                        className={`item ${
                                            secondLevelMenuActive ===
                                            leftNav.title
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <GearIcon
                                            isActive={
                                                secondLevelMenuActive ===
                                                leftNav.title
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <div className="text-arrow">
                                            <span>{leftNav.title}</span>
                                            <ArrowRight
                                                isActive={
                                                    secondLevelMenuActive ===
                                                    leftNav.title
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        /* href={leftNav.link} */
                                        tabIndex={0}
                                        onKeyDown={(e) =>
                                            openThirdMenuLevelKeyboard(
                                                e,
                                                leftNav.title,
                                            )
                                        }
                                        onMouseEnter={() =>
                                            openThirdMenuLevel(leftNav.title)
                                        }
                                        key={index}
                                        className={`item ${
                                            secondLevelMenuActive ===
                                            leftNav.title
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <GearIcon
                                            isActive={
                                                secondLevelMenuActive ===
                                                leftNav.title
                                                    ? true
                                                    : false
                                            }
                                        />
                                        <div className="text-arrow">
                                            <span>{leftNav.title}</span>
                                            <ArrowRight
                                                isActive={
                                                    secondLevelMenuActive ===
                                                    leftNav.title
                                                        ? true
                                                        : false
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                )}
            </>
        );
    };

    return (
        <div ref={additionalMenuRef}>
            <div className="header-additional">
                <div
                    className={`links ${firstLevelMenuActive ? "active" : ""}`}
                >
                    {navigation.map((nav, index) => (
                        <div
                            tabIndex={0}
                            onKeyDown={(e) =>
                                openAdditionalMenuKeyboard(e, nav.title)
                            }
                            onClick={() =>
                                openAdditionalMenu(nav.title, nav.isShort)
                            }
                            key={index}
                            className={`link ${
                                nav.title == firstLevelMenuActive
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <ShortMenu
                                secondLevelMenu={nav.leftMenu}
                                className={
                                    nav.title === firstLevelMenuActive &&
                                    nav.isShort
                                        ? "short-active"
                                        : ""
                                }
                            />
                            {nav.title === "Поддержка" ? (
                                <Link className="h5" href={nav.link || ""}>
                                    {nav.title}
                                </Link>
                            ) : (
                                <div className="h5">{nav.title}</div>
                            )}
                            {nav.leftMenu.length ? (
                                <Image
                                    src="/images/icons/arrow-bottom.svg"
                                    alt="arrow"
                                    width="11"
                                    height="5"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Отображается только тогда, когда выбран активный элементв 1-ом уровне меню
            "Поддержка" - ссылка не имеющая доп. контента, "Поддержка" - просто ссылка на страницу,
            кликнув на нее меню не будет открыто
            */}
            <div
                className={`header-additional-content ${
                    firstLevelMenuActive !== "" &&
                    firstLevelMenuActive !== "Поддержка" &&
                    !isShortMenuOpen &&
                    "active"
                }`}
            >
                <div style={{ minHeight: 0 }} className="content-wrapper">
                    {generateSecondLevelMenu()}
                    <div className="section-links">
                        {thirdLevelMenuActive.map((thirdLevelItem, index) => (
                            <div key={index} className="item">
                                <img
                                    src={thirdLevelItem.icon}
                                    alt={thirdLevelItem.title + " photo"}
                                />
                                <Link tabIndex={0} href={thirdLevelItem.link}>
                                    {thirdLevelItem.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAdditional;
