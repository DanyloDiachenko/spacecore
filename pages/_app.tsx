import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { NextRouter, useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { StrictMode } from "react";
import { Provider } from "react-redux";

import store from "store";

import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/index-page.scss";
import "../styles/footer.scss";
import "../styles/vps-servers.scss";
import "../styles/cloud-servers.scss";
import "../styles/mainComponents.scss";
import "../styles/tariffes.scss";
import "../styles/domains.scss";
import "../styles/dns-hosting.scss";
import "../styles/ddos-protection.scss";
import "../styles/for-investors.scss";
import "../styles/referral.scss";
import "../styles/reseller-program.scss";
import "../styles/uptime-robot.scss";
import "../styles/knowledge-base.scss";
import "../styles/news.scss";
import "../styles/small-page-styles.scss";
import "../styles/popups.scss";

import Header from "components/Header";
import Footer from "components/Footer";
import TimerComponent from "components/pageComponents/Timer";

const Chatra = require("@chatra/chatra");

const inter = Inter({
    weight: ["300", "400", "500", "700"],
    subsets: ["cyrillic", "latin"],
    preload: true,
    display: "swap",
});

const museoSans = localFont({
    src: [
        {
            path: "../public/fonts/MuseoSansCyrl-300.ttf",
            weight: "300",
        },
        {
            path: "../public/fonts/MuseoSansCyrl-500.ttf",
            weight: "500",
        },
        {
            path: "../public/fonts/MuseoSansCyrl-700.ttf",
            weight: "700",
        },
    ],
    preload: true,
    display: "swap",
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router: NextRouter = useRouter();
    const [title, setTitle] = useState<string>(
        "SpaceCore - хостинг для всех Ваших интересов!",
    );

    useEffect(() => {
        switch (router.locale) {
            case "ru":
                setTitle("SpaceCore - хостинг для всех Ваших интересов!");
                break;
            case "uk":
                setTitle("SpaceCore – хостинг для всіх Ваших інтересів!");
                break;
            case "en":
                setTitle("SpaceCore - hosting for all Your interests!");
                break;
            default:
                setTitle("SpaceCore - хостинг для всех Ваших интересов!");
        }
    }, [router.locale]);

    const config = {
        ID: process.env.NEXT_PUBLIC_CHATRA_ID,
    };

    useEffect(() => {
        Chatra("init", config);
    }, []);

    const releaseDate = new Date(
        "Mon Sep 6 2023 21:08:30 GMT+0200 (Восточная Европа, стандартное время)",
    );

    return (
        <StrictMode>
            <Head>
                <title>{title}</title>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="apple-touch-icon" href="/images/icons/logo.svg" />
                <meta
                    name="apple-mobile-web-app-status-bar"
                    content="#ffffff"
                />
                <meta
                    name="webmoney"
                    content="78B5E8C0-761D-4D47-9B93-0D9287251D7D"
                />

                <meta name="title" content="Хостинг SpaceCore" />
                <meta
                    name="description"
                    content="VPS/VDS, выделенные сервера, тех. поддержка, удобный биллинг под Ваши проекты"
                />
                <meta
                    name="keywords"
                    content="Выделенные сервера, vds, vps, notinstall сервера, Германия, Финляндия, Франция"
                />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="Russian" />
                <meta name="revisit-after" content="2 days" />
                <meta property="og:title" content="SpaceCore" />
                <meta property="og:site_name" content="SpaceCore" />
                <meta property="og:url" content="https://spacecore.pro" />
                <meta
                    property="og:description"
                    content="VPS/VDS, выделенные сервера, тех. поддержка, удобный биллинг под Ваши проекты"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://spacecore.pro/template/images/logo.png"
                />
                <meta name="apple-mobile-web-app-title" content="SpaceCore" />
                <meta name="application-name" content="SpaceCore" />
                <link
                    rel="icon"
                    type="image/png"
                    href="https://spacecore.pro/template/images/logotype.png"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/images/banners/servers.webp"
                />
            </Head>
            <style jsx global>{`
                :root {
                    --museoSans: ${museoSans.style.fontFamily};
                }
            `}</style>
            <Provider store={store}>
                {releaseDate.getTime() > Date.now() /* false */ ? (
                    <main className={inter.className}>
                        <TimerComponent releaseDate={releaseDate} />
                    </main>
                ) : (
                    <>
                        <header
                            className={`container ${inter.className}`}
                            id="header"
                        >
                            <Header />
                        </header>

                        <main className={inter.className}>
                            <Component {...pageProps} />
                        </main>
                        <footer className={`${inter.className}`} id="footer">
                            <Footer />
                        </footer>
                    </>
                )}
            </Provider>
        </StrictMode>
    );
};

export default App;
