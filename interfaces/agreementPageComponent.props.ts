import NewsFiltersProps from "components/pageComponents/NewsFilters/newsFilters.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface AgreementPageComponentProps {
    newsFiltersBlock: NewsFiltersProps["newsFiltersBlock"];
    supportBlock: SupportProps["supportBlock"];
    contentBlock: string;
}
