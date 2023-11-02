import { useState } from "react";

import Trans from "inc/locale/Trans";
import NewsItem from "../News/NewsItem";
import PopularPublicationsProps from "./popularPubllications.props";
import Button from "components/UI/Button";

const PopularPublications = ({
    popularPublicationsBlock,
}: PopularPublicationsProps): JSX.Element => {
    const publicationsPerPage = 6;

    const [loadedPublications, setLoadedPublications] =
        useState<number>(publicationsPerPage);

    const handleLoadMore = () => {
        const newLoadedPublications = loadedPublications + publicationsPerPage;
        setLoadedPublications(newLoadedPublications);
    };

    const totalPublications = popularPublicationsBlock.news?.length || 0;
    const remainingPublications = totalPublications - loadedPublications;
    const showLoadMoreButton = remainingPublications > 0;

    return (
        <section className="popular-publications">
            <h2 className="h2-sm">
                <Trans string="Популярные публикации" />
            </h2>
            <div className="content">
                {popularPublicationsBlock.news &&
                    popularPublicationsBlock.news
                        .slice(0, loadedPublications)
                        .map((newsItem, index) => (
                            <NewsItem {...newsItem} key={index} />
                        ))}
            </div>
            {showLoadMoreButton && (
                <Button
                    background="white"
                    border="rose"
                    onClick={handleLoadMore}
                >
                    <Trans string="Загрузить еще" />
                </Button>
            )}
        </section>
    );
};

export default PopularPublications;
