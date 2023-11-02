import NewsPageComponentProps from "./newsPageComponent.props";

export default interface NewsPageProps {
    content: {
        news_filters_block: NewsPageComponentProps["newsFiltersBlock"];
        popular_publications_block?:
            | NewsPageComponentProps["popularPublicationsBlock"]
            | null;
        last_publications_block?:
            | NewsPageComponentProps["lastPublicationsBlock"]
            | null;
    };
}
