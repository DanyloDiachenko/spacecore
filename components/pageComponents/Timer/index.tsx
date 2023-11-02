import Image from "next/image";
import Link from "next/link";
import Timers from "./Timers";
import Button from "components/UI/Button";
import LinksIcons from "components/Footer/LinksIcons";
import { useRouter } from "next/router";
import { useState } from "react";
import PreviewReleasePopup from "components/popups/PreviewRelease";

const TimerComponent = ({
    releaseDate,
}: {
    releaseDate: Date;
}): JSX.Element => {
    const [isShowPopup, setIsShowPopup] = useState<boolean>(false);

    const router = useRouter();
    const { locale } = router;

    const jsonData = require(`data/${
        locale === "default" ? "ru" : locale
    }/timer.json`);

    const { data } = jsonData;

    const onComplete = () => {
        setIsShowPopup(true);
        document.body.style.overflow = "hidden";
    };
    const onVideoEnd = (): void => {
        router.push("/");
        setIsShowPopup(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <PreviewReleasePopup
                openPopup={isShowPopup}
                onVideoEnd={onVideoEnd}
                videoUrl={data.videoPreviewUrl}
            />
            <section className="timer">
                <Image
                    src="/images/large/circle-large.svg"
                    alt="circle"
                    width="720"
                    height="720"
                    className="circle circle-large circle-large-top-left"
                />
                <Image
                    src="/images/large/circle-medium-with-circles.svg"
                    alt="circle"
                    width="340"
                    height="340"
                    className="circle circle-medium circle-medium-top-left"
                />
                <Image
                    src="/images/large/circle-large.svg"
                    alt="circle"
                    width="720"
                    height="720"
                    className="circle circle-large circle-large-bottom-right"
                />
                <Image
                    src="/images/large/circle-medium-with-circles.svg"
                    alt="circle"
                    width="340"
                    height="340"
                    className="circle circle-medium circle-medium-bottom-right"
                />
                <div className="content-wrapper">
                    <h1>{data.title}</h1>
                    <Timers releaseDate={releaseDate} complete={onComplete} />
                    <Link href={data.buttonLink}>
                        <Button background="rose">
                            <span className="h6">{data.buttonTitle}</span>
                        </Button>
                    </Link>
                </div>
                <img
                    src="/images/banners/austronaut-timer.png"
                    alt="austronaut banner"
                    width="365"
                    height="511"
                    className="austronaut-banner"
                />
                <div className="title-links">
                    <div className="h3">{data.stayWithNewsTitle}</div>
                    <LinksIcons
                        vkLink={data.vkLink}
                        telegramLink={data.telegramLink}
                        newsLink={data.newsLink}
                    />
                </div>
            </section>
        </>
    );
};

export default TimerComponent;
