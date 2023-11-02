import { useRouter, NextRouter } from "next/router";
import { useRef } from "react";
import Slider from "react-slick";

import Button from "components/UI/Button";
import ClientReview from "./ClientReview";
import PrevArrow from "helpers/Arrows/Next";
import NextArrow from "helpers/Arrows/Prev";
import ClientReviewsProps from "./clientReviews.props";

const ClientReviews = ({
    reviews,
    buttonText,
    buttonLink,
}: ClientReviewsProps): JSX.Element => {
    const router: NextRouter = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    slidesToShow: 3.25,
                },
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 1.65,
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

    const sliderRef = useRef<Slider>(null);

    const handleArrowClick = (arrowType: "prev" | "next") => {
        if (arrowType == "prev") {
            sliderRef.current && sliderRef.current.slickPrev();
        } else {
            sliderRef.current && sliderRef.current.slickNext();
        }
    };

    return (
        <div>
            <div className="container">
                <div className="arrows">
                    <PrevArrow onClick={() => handleArrowClick("prev")} />
                    <NextArrow onClick={() => handleArrowClick("next")} />
                </div>
            </div>
            <div className="slider-clients">
                <Slider ref={sliderRef} {...settings}>
                    {reviews.map((review, index) => (
                        <ClientReview {...review} key={index} />
                    ))}
                </Slider>
            </div>
            <Button
                onClick={() => router.push(buttonLink)}
                className="btn-reviews"
                background="white"
                border="rose"
            >
                <span className="h6">{buttonText}</span>
            </Button>
        </div>
    );
};

export default ClientReviews;
