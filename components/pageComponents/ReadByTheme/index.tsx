import Slider from "react-slick";

import NewsItem from "../News/NewsItem";
import ReadByThemeProps from "./readByTheme.props";

const ReadByTheme = ({ readByThemeBlock }: ReadByThemeProps): JSX.Element => {
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
        <section className="mt-12 container news-read-by-theme">
            <div className="title">
                <h2>
                    {/* {readByThemeBlock.title} */}Что еще почитать по теме
                </h2>
            </div>
            <div className="content">
                <div className="no-slider">
                    {readByThemeBlock.news.map((newsItem, index) => (
                        <NewsItem key={index} {...newsItem} />
                    ))}
                </div>
                <Slider className="slider" {...settings}>
                    {readByThemeBlock.news.map((newsItem, index) => (
                        <NewsItem key={index} {...newsItem} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ReadByTheme;
