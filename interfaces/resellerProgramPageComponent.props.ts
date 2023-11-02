import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import MainTextComponentProps from "components/pageComponents/MainTextComponent/mainTextComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import ResellerProgramTableProps from "components/pageComponents/ResellerProgramTable/resellerProgramTable.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface ResellerProgramPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    servicesDescriptionBlock: ServicesDescriptionProps["servicesDescription"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
    resellersTextBlock: MainTextComponentProps;
    resellersDescriptionBlock: {
        description: string;
        documentLink: string;
        documentTitle: string;
    };
    resellerProgramTableBlock: ResellerProgramTableProps["resellerProgramTableBlock"];
}
