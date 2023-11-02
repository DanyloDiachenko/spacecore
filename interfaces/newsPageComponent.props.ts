import LastPublicationsProps from "components/pageComponents/LastPublications/lastPublications.props";
import NewsFiltersProps from "components/pageComponents/NewsFilters/newsFilters.props";
import PopularPublicationsProps from "components/pageComponents/PopularPublications/popularPubllications.props";

export default interface NewsPageComponentProps {
    newsFiltersBlock: NewsFiltersProps["newsFiltersBlock"];
    popularPublicationsBlock?: PopularPublicationsProps["popularPublicationsBlock"];
    lastPublicationsBlock?: LastPublicationsProps["lastPublicationsBlock"];
}
