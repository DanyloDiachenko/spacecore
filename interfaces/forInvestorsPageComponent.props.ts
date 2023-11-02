import ForInvestorsProps from "components/pageComponents/ForInvestorsComponent/forInvestors.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface ForInvestorsPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    forInvestorsBlock: ForInvestorsProps["forInvestorsBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
