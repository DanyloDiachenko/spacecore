import Link from "next/link";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import LinksIcons from "./LinksIcons";
import Pays from "./Pays";
import HeaderAdaptive from "components/Header/HeaderAdaptive";
import IFooterNavigation from "./footerNavigation.interface";

const Footer = (): JSX.Element => {
    const router: NextRouter = useRouter();

    const { footer_block } = require(`data/${
        router.locale === "default" ? "ru" : router.locale
    }/footer.json`);

    if (router.pathname === "/404" || router.pathname === "/timer") {
        return <></>;
    } else if (router.query.category) {
        if (
            router.query.category !== "news" &&
            router.query.category !== "changelog"
        ) {
            return <></>;
        }
    }

    return (
        <div className="container-fluid mt-12">
            <div className="footer-header">
                <HeaderAdaptive
                    headerAdaptiveNavigation={footer_block.footerNavigation}
                />
            </div>
            <div className="container">
                <div className="content large-size-content">
                    {footer_block.footerNavigation.map(
                        (navItem: IFooterNavigation, index: number) => (
                            <div key={index} className="item">
                                <div className="h3">{navItem.title}</div>
                                <div>
                                    {navItem.additional &&
                                        navItem.additional.map(
                                            (navItemAdd, index) => (
                                                <Link
                                                    href={navItemAdd.link}
                                                    key={index}
                                                >
                                                    {navItemAdd.title}
                                                </Link>
                                            ),
                                        )}
                                </div>
                            </div>
                        ),
                    )}
                    <div className="additional-column">
                        <div className="title-links">
                            <div className="h3">
                                {footer_block.stayWithNewsTitle}
                            </div>
                            <LinksIcons
                                vkLink={footer_block.vkLink}
                                telegramLink={footer_block.telegramLink}
                                newsLink={footer_block.newsLink}
                            />
                        </div>
                        <div className="bottom">
                            <div className="logo-info">
                                <div>
                                    <Image
                                        src={footer_block.logoImgSrc}
                                        alt="logo"
                                        width="200"
                                        height="24"
                                    />
                                    <div>{footer_block.logotitle}</div>
                                </div>
                            </div>
                            <div className="company-info">
                                {footer_block.IPTitle} <br />
                                {footer_block.INNTitle} <br />
                                {footer_block.OGRNIPTitle}
                            </div>
                        </div>
                    </div>
                </div>
                <Pays
                    allRightsReserverdTitle={
                        footer_block.allRightsReserverdTitle
                    }
                    pays={footer_block.pays}
                />
            </div>
        </div>
    );
};

export default Footer;
