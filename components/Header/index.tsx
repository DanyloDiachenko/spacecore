import Image from "next/image";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import { KeyboardEvent, useEffect, useState } from "react";
import { connect } from "react-redux";

import HeaderAdaptive from "./HeaderAdaptive";
import Language from "./Language";
import Button from "components/UI/Button";
import HeaderAdditional from "./HeaderAdditional";
import ThemeSwitcher from "./ThemeSwitcher";
import HeaderProps from "./header.props";
import { IKnowledgeBaseNavigationInitStore } from "store/knowledgeBaseNavigation/initStore";
import ServicesWorks from "./ServicesWorks";

const Header = ({
    isKnowledgeBaseNavigationOpen,
    setOpenKnowledgeBaseNavigation,
}: HeaderProps): JSX.Element => {
    const [isHeaderAdaptiveOpen, setIsHeaderAdaptiveOpen] =
        useState<boolean>(false);

    const router: NextRouter = useRouter();

    const { header_block } = require(`data/${
        router.locale === "default" ? "ru" : router.locale
    }/header.json`);

    const pushToRegister = (): void => {
        router.push(header_block.registerLink);
    };

    const pushToRegisterKeyboardHandler = (e: KeyboardEvent) => {
        if (e.code === "Enter" || e.code === "Space") {
            pushToRegister();
        }
    };

    const setOpenHeaderMenu = (): void => {
        if (
            router.pathname === "/knowledge-base/[category]" ||
            router.pathname === "/knowledge-base/[category]/[slug]"
        ) {
            setOpenKnowledgeBaseNavigation(!isKnowledgeBaseNavigationOpen);
        } else {
            setIsHeaderAdaptiveOpen(!isHeaderAdaptiveOpen);
        }
    };

    useEffect(() => {
        setIsHeaderAdaptiveOpen(false);
        setOpenKnowledgeBaseNavigation(false);
    }, [router, router.query.slug]);

    if (router.pathname === "/404" || router.pathname === "/timer") {
        return <></>;
    }

    if (router.pathname.includes("knowledge-base") && router.query.category) {
    } else {
        if (router.query.category) {
            if (
                router.query.category !== "news" &&
                router.query.category !== "changelog"
            ) {
                return <></>;
            }
        }
    }

    return (
        <>
            <div className="content">
                <div className="d-flex align-items-center justify-content-between">
                    <Link href="/" tabIndex={0} className="logo">
                        <Image
                            src={header_block.logoImgSrc}
                            alt="logo"
                            width="200"
                            height="24"
                        />
                        <div className="logo-title">
                            {header_block.logotitle}
                        </div>
                    </Link>
                    <Language />
                    <ThemeSwitcher />
                    <ServicesWorks header_block={header_block} />
                    <Link className="email" href={header_block.emailLink}>
                        <div className="h4">{header_block.email}</div>
                    </Link>
                    <Link className="login" href={header_block.loginLink}>
                        <div className="h6">{header_block.logintitle}</div>
                    </Link>

                    <Button
                        className="register"
                        onKeyDown={pushToRegisterKeyboardHandler}
                        onClick={pushToRegister}
                        background="white"
                    >
                        <div className="h5">{header_block.registerTitle}</div>
                    </Button>

                    <div className="user">
                        <Button background="white">
                            <Image
                                src="/images/icons/user.svg"
                                alt="user"
                                width="17"
                                height="18"
                            />
                        </Button>
                    </div>
                    <div className="burger">
                        <Button
                            background="rose"
                            onClick={() => setOpenHeaderMenu()}
                        >
                            {isHeaderAdaptiveOpen ||
                            isKnowledgeBaseNavigationOpen ? (
                                <Image
                                    src="/images/small/close.svg"
                                    alt="close menu"
                                    width="12"
                                    height="12"
                                />
                            ) : (
                                <Image
                                    src="/images/icons/burger.svg"
                                    alt="burger menu"
                                    width="23"
                                    height="14"
                                />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
            <HeaderAdditional navigation={header_block.navigation} />
            {router.pathname === "/knowledge-base/[slug]" ? (
                <></>
            ) : (
                <>
                    <HeaderAdaptive
                        headerAdaptiveNavigation={
                            header_block.navigationAdaptive
                        }
                        email={header_block.email}
                        emailLink={header_block.emailLink}
                        servicesWorkstitle={header_block.servicesWorkTitle}
                        className={isHeaderAdaptiveOpen ? "adaptive-open" : ""}
                        headerBlock={header_block}
                    />
                </>
            )}
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
};

const connector = connect(mapState, mapDispatch);

export default connector(Header);
