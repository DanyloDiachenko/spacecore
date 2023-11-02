import Image from "next/image";
import { useRouter, NextRouter } from "next/router";

import Trans from "inc/locale/Trans";
import { TariffProps, LogosType } from "./tariff.props";
import Button from "components/UI/Button";

const Tariff = ({
    imgSrc,
    title,
    priceSsd,
    priceNvme,
    ssdButtonTitle,
    nvmeButtonTitle,
    disk,
    diskTitle,
    domens,
    domensTitle,
    mySql,
    mySqlTitle,
    protection,
    protectionTitle,
    controlPanel,
    controlPanelTitle,
    logotypes,
    buttonText,
    buttonLink,

    activePriceType,
    onPriceTypeChange,
}: TariffProps): JSX.Element => {
    const router: NextRouter = useRouter();

    const handlePriceTypeChange = (newPriceType: string): void => {
        onPriceTypeChange(title, newPriceType);
    };

    const currentPrice = activePriceType === "ssd" ? priceSsd : priceNvme;

    const renderLogos = (logos: LogosType[]): JSX.Element => {
        return (
            <div className="icons">
                {logos.map((logo, index) => (
                    <div key={index} className="img-item">
                        <Image
                            src={`/images/small/${logo}.svg`}
                            alt={logo}
                            width="20"
                            height="24"
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <article className="tariff-item">
            <div className="d-flex justify-content-center">
                {/* <Image
                    className="banner"
                    src={imgSrc}
                    alt={title + "photo"}
                    layout="intrinsic"
                    width={122}
                    height={149}
                /> */}
                <img className="banner" src={imgSrc} alt={title + " photo"} />
            </div>
            <div className="title">
                <Trans string={title} />
            </div>
            <div className="price">
                <span className="number">{currentPrice}</span>
                <p>
                    / <Trans string="месяц" />
                </p>
            </div>
            <div className="buttons">
                <Button
                    className={
                        activePriceType === "ssd" ? "active" : "inactive"
                    }
                    background="white"
                    onClick={() => handlePriceTypeChange("ssd")}
                >
                    {ssdButtonTitle}
                </Button>
                <Button
                    className={
                        activePriceType === "nvme" ? "active" : "inactive"
                    }
                    background="white"
                    onClick={() => handlePriceTypeChange("nvme")}
                >
                    {nvmeButtonTitle}
                </Button>
            </div>
            <div className="top-info">
                <div className="info-item">
                    <p className="key">{diskTitle}</p>
                    <p className="value">{disk}</p>
                </div>
                <div className="info-item">
                    <p className="key">{domensTitle}</p>
                    <p className="value">{domens}</p>
                </div>
                <div className="info-item">
                    <p className="key">{mySqlTitle}</p>
                    <p className="value">{mySql}</p>
                </div>
            </div>
            <div className="top-info bottom-info">
                <div className="info-item">
                    <p className="key">{protectionTitle}</p>
                    <p className="value">{protection}</p>
                </div>
                <div className="info-item">
                    <p className="key">{controlPanelTitle}</p>
                    <p className="value">{controlPanel}</p>
                </div>
            </div>
            {renderLogos(logotypes)}
            <Button
                onClick={() => router.push(buttonLink)}
                className="order"
                background="rose"
            >
                <span className="h6">{buttonText}</span>
            </Button>
        </article>
    );
};

export default Tariff;
