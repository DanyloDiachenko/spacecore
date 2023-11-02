import NewsFilters from "components/pageComponents/NewsFilters";
import PopularPublications from "components/pageComponents/PopularPublications";
import LastPublications from "components/pageComponents/LastPublications";
import NewsPageComponentProps from "interfaces/newsPageComponent.props";

const News = ({
    newsFiltersBlock,
    popularPublicationsBlock,
    lastPublicationsBlock,
}: NewsPageComponentProps): JSX.Element => {
    return (
        <>
            <NewsFilters newsFiltersBlock={newsFiltersBlock} />
            <section className="container news-content">
                {popularPublicationsBlock &&
                popularPublicationsBlock.news &&
                popularPublicationsBlock.news.length ? (
                    <PopularPublications
                        popularPublicationsBlock={popularPublicationsBlock}
                    />
                ) : (
                    ""
                )}
                {lastPublicationsBlock && lastPublicationsBlock.length ? (
                    <LastPublications
                        lastPublicationsBlock={lastPublicationsBlock}
                    />
                ) : (
                    ""
                )}
            </section>
        </>
    );
};

export default News;
