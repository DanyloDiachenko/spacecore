import { useRouter, NextRouter } from "next/router";
import Slider from "react-slick";

import ServiceItem from "./Service";
import Button from "components/UI/Button";
import ServicesProps from "./services.props";

const Services = ({ servicesBlock }: ServicesProps): JSX.Element => {
    const router: NextRouter = useRouter();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section
            id="services"
            className={`container-fluid-bg ${
                router.pathname === "/about-company" ? "marginTop" : ""
            }`}
        >
            <div>
                <div className="container services">
                    <h2>{servicesBlock.title}</h2>
                    <section className="content">
                        {servicesBlock.services.map((dataImg, index) => (
                            <ServiceItem {...dataImg} key={index} />
                        ))}
                    </section>
                    <div className="slider-services">
                        <Slider {...settings}>
                            {servicesBlock &&
                                servicesBlock.services.map((dataImg, index) => (
                                    <ServiceItem {...dataImg} key={index} />
                                ))}
                        </Slider>
                    </div>
                    {servicesBlock.buttonText.length ? (
                        <Button
                            className="btn-more"
                            background="white"
                            border="rose"
                            onClick={() =>
                                router.push(servicesBlock.buttonLink)
                            }
                        >
                            <div className="h6">{servicesBlock.buttonText}</div>
                        </Button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
