import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import { KeyboardEvent, useState } from "react";

import NewsFiltersProps from "./newsFilters.props";

const NewsFilters = ({ newsFiltersBlock }: NewsFiltersProps): JSX.Element => {
    if (!newsFiltersBlock) {
        return <></>;
    }

    const router = useRouter();

    // const [activeFilter, setActiveFilter] = useState<string>(
    //     newsFiltersBlock.filters[0],
    // );

    // const setActiveFilterKeyboardHandler = (
    //     e: KeyboardEvent,
    //     filterTitle: string,
    // ) => {
    //     if (e.code === "Space" || e.code === "Enter") {
    //         e.preventDefault();
    //         setActiveFilter(filterTitle);
    //     }
    // };
    return (
        <section className="container news-filters">
            <div className="filters">
                {newsFiltersBlock.filters.map((filter, index) => (
                    <Link href={`/${filter.slug}`} key={index}>
                        <span
                            tabIndex={0}
                            className={
                                router.query.category &&
                                filter.slug === router.query.category
                                    ? "active"
                                    : ""
                            }
                        >
                            {filter.title}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mailing">
                <Link href="https://billing.spacecore.pro/">
                    {newsFiltersBlock.newsletterTitle}
                </Link>
                <Image
                    alt={newsFiltersBlock.newsletterTitle + "photo"}
                    src={
                        newsFiltersBlock.imgSrc
                    } /* "/images/medium/austronaut-reading.webp" */
                    width="86"
                    height="150"
                />
            </div>
        </section>
    );
};

export default NewsFilters;
