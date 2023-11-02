import { useRef } from "react";
import Slider from "react-slick";

import MainSliderItem from "./MainItem";
import MainBlockProps from "./mainBlock.props";

const Main = ({ mainSliderBlock }: MainBlockProps): JSX.Element => {
    const slider = useRef<Slider>(null);

    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 30000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: "custom-dots",
        customPaging: function (i: number) {
            return (
                <div
                    onClick={() =>
                        slider.current && slider.current.slickGoTo(i)
                    }
                >
                    {i + 1}
                </div>
            );
        },
    };

    return (
        <>
            <section className="main container-fluid">
                <Slider ref={slider} {...settings}>
                    {mainSliderBlock.map((dataItem, index) => (
                        <MainSliderItem {...dataItem} key={index} />
                    ))}
                </Slider>
            </section>
        </>
    );
};

export default Main;
