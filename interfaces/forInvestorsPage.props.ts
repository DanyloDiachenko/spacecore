import ForInvestorsProps from "components/pageComponents/ForInvestorsComponent/forInvestors.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface ForInvestorsPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        for_investors_block: ForInvestorsProps["forInvestorsBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
