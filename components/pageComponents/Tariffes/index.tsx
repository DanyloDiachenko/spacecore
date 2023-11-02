import { useRef, useState } from "react";
import Slider from "react-slick";

import PrevArrow from "helpers/Arrows/Next";
import NextArrow from "helpers/Arrows/Prev";
import Tariff from "./Tariff";
import TariffesProps from "./tariffes.props";

const Tariffes = ({ tariffesBlock }: TariffesProps): JSX.Element => {
    const [tariffesprices, setTariffesPrices] = useState(
        tariffesBlock.tariffes.map((tariff) => ({
            title: tariff.title,
            activePriceType: "ssd",
        })),
    );

    const sliderRef = useRef<Slider>(null);

    const handleArrowClick = (arrowType: "prev" | "next"): void => {
        if (arrowType == "prev") {
            sliderRef.current && sliderRef.current.slickPrev();
        } else {
            sliderRef.current && sliderRef.current.slickNext();
        }
    };

    const handlePriceTypeChange = (
        title: string,
        newPriceType: string,
    ): void => {
        const updatedTariffes = tariffesprices.map((tariff) => {
            if (tariff.title === title) {
                return { ...tariff, activePriceType: newPriceType };
            }
            return tariff;
        });

        setTariffesPrices(updatedTariffes);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="mt-12 container tariffes">
            <div className="top">
                <h2>{tariffesBlock.title}</h2>
                <div className="arrows">
                    <PrevArrow onClick={() => handleArrowClick("prev")} />
                    <NextArrow onClick={() => handleArrowClick("next")} />
                </div>
            </div>
            <div className="tariffes-content">
                {tariffesBlock.tariffes.map((tariff, index) => (
                    <Tariff
                        {...tariff}
                        activePriceType={
                            tariffesprices.find((t) => t.title === tariff.title)
                                ?.activePriceType || ""
                        }
                        onPriceTypeChange={handlePriceTypeChange}
                        key={index}
                    />
                ))}
            </div>
            <Slider ref={sliderRef} {...settings} className="slider-adaptive">
                {tariffesBlock.tariffes.map((tariff, index) => (
                    <Tariff
                        activePriceType={
                            tariffesprices.find((t) => t.title === tariff.title)
                                ?.activePriceType || ""
                        }
                        onPriceTypeChange={handlePriceTypeChange}
                        key={index}
                        {...tariff}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Tariffes;
