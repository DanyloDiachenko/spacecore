import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import MainTextComponentProps from "components/pageComponents/MainTextComponent/mainTextComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";
import ResellerProgramPageComponentProps from "./resellerProgramPageComponent.props";

export default interface ResellerProgramPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        services_description_block: ServicesDescriptionProps["servicesDescription"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
        resellers_text_block: MainTextComponentProps;
        resellers_description_block: ResellerProgramPageComponentProps["resellersDescriptionBlock"];
        reseller_program_table_block: ResellerProgramPageComponentProps["resellerProgramTableBlock"];
    };
}
