import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import NewsItemProps from "./newsItem.props";
import formatDate from "helpers/formatDate";

const NewsItem = ({
    slug,
    imgSrc,
    created,
    title,
    category,
    readed,
    timeToRead,
    description,
    currentSlide,
}: NewsItemProps): JSX.Element => {
    const [minHeight, setMinHeight] = useState<number>(0);

    const router = useRouter();

    const calculateMinHeight = () => {
        const newsInfoElements =
            document.querySelectorAll(".news-info-wrapper");

        let maxHeight = 0;

        newsInfoElements.forEach((item) => {
            const itemHeight = item.getBoundingClientRect().height;
            if (itemHeight > maxHeight) {
                maxHeight = itemHeight;
            }
        });

        setMinHeight(maxHeight);
    };

    useEffect(() => {
        calculateMinHeight();
    }, [currentSlide, router]);

    return (
        <article className="news-item">
            <div className="news-item__image">
                <img
                    src={imgSrc ? imgSrc : "/images/medium/news-1.webp"}
                    alt={title + "photo"}
                />
            </div>
            <div className="info-wrapper">
                <div className="top d-flex align-items-center justify-content-between">
                    <p>{formatDate(created)}</p>
                    {category && category.title ? (
                        <div>{category.title}</div>
                    ) : (
                        ""
                    )}
                </div>
                <div
                    className="news-info-wrapper"
                    style={{ minHeight: minHeight }}
                >
                    <Link
                        /* href={`/news/${slug}`} */ href={`/${
                            category ? category.slug : "none"
                        }/${slug}`}
                        className="h3 title"
                    >
                        <span className="title-long">{title}</span>
                        <span className="title-short">
                            {title.slice(0, 36)}...
                        </span>
                    </Link>
                    {description && description.length ? (
                        <p className="descrpiption">{description}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="bottom d-flex align-items-center justify-content-between">
                    <div className="readed d-flex align-items-center">
                        <Image
                            src="/images/small/eye.svg"
                            alt="readed"
                            width="20"
                            height="15"
                        />
                        <p>{readed}</p>
                    </div>
                    <div className="time-to-read d-flex align-items-center">
                        <Image
                            src="/images/small/time.svg"
                            alt="time to read"
                            width="18"
                            height="19"
                        />
                        <p>{timeToRead}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsItem;
