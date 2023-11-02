import NewsFiltersProps from "components/pageComponents/NewsFilters/newsFilters.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface AgreementPageProps {
    content: {
        news_filters_block: NewsFiltersProps["newsFiltersBlock"];
        content_block: string;
        support_block: SupportProps["supportBlock"];
    };
}
