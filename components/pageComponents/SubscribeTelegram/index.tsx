import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import Button from "components/UI/Button";
import SubscribeTelegramProps from "./subscribeTelegram.props";

const SubscribeTelegram = ({
    subscribeTelegramBlock,
}: SubscribeTelegramProps): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <>
            {subscribeTelegramBlock?.title && (
                <section className="subscribe-telegram container-large">
                    <div className="container">
                        <div className="h3-lg">
                            {subscribeTelegramBlock.title}
                        </div>
                        <p>{subscribeTelegramBlock.description}</p>
                        <Button
                            background="rose"
                            onClick={() =>
                                router.push(subscribeTelegramBlock.buttonLink)
                            }
                        >
                            <span className="h6">
                                {subscribeTelegramBlock.buttonText}
                            </span>
                        </Button>
                        <Image
                            src="/images/icons/long-arrow.svg"
                            alt="arrow"
                            width="403"
                            height="53"
                            className="img-arrow"
                        />
                        <Image
                            src={subscribeTelegramBlock.imgSrc}
                            alt="austronaut photo"
                            width="274"
                            height="266"
                            className="austronaut-banner"
                        />
                        <Image
                            src="/images/medium/telegram.svg"
                            alt="telegram logotype"
                            width="94"
                            height="94"
                            className="tg-logo"
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default SubscribeTelegram;
