import { useRouter, NextRouter } from "next/router";
import { useRef } from "react";
import Slider from "react-slick";

import NewsItem from "./NewsItem";
import NextArrow from "helpers/Arrows/Prev";
import PrevArrow from "helpers/Arrows/Next";
import Button from "components/UI/Button";
import ActualNewsProps from "./news.props";

const News = ({ actualNewsBlock }: ActualNewsProps): JSX.Element => {
    const router: NextRouter = useRouter();
    const sliderRef = useRef<Slider>(null);

    const handleArrowClick = (arrowType: "prev" | "next") => {
        if (arrowType == "prev") {
            sliderRef.current && sliderRef.current.slickPrev();
        } else {
            sliderRef.current && sliderRef.current.slickNext();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <section className="mt-12 container news">
            <div className="title-arrows">
                <h2>{actualNewsBlock.title}</h2>
                <div className="arrows">
                    <PrevArrow onClick={() => handleArrowClick("prev")} />
                    <NextArrow onClick={() => handleArrowClick("next")} />
                </div>
            </div>
            <div className="slider-content">
                <Slider ref={sliderRef} {...settings}>
                    {actualNewsBlock.news.map((newsItem, index) => (
                        <NewsItem key={index} {...newsItem} />
                    ))}
                </Slider>
            </div>
            <Button
                onClick={() => router.push(actualNewsBlock.buttonLink)}
                className="more"
                background="white"
                border="rose"
            >
                <span className="h6">{actualNewsBlock.buttonText}</span>
            </Button>
        </section>
    );
};

export default News;
