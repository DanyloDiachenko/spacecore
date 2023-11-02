import DdosProtectionBannerProps from "components/pageComponents/DdosProtectionBanner/ddosProtectionBanner.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ProvidingServicesProps from "components/pageComponents/ProvidingServices/providingServices.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DdosProtectionPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    servicesDescription: ServicesDescriptionProps["servicesDescription"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
    ddosProtectionBannerBlock: DdosProtectionBannerProps["ddosProtectionBannerBlock"];
    providingServicesBlock: ProvidingServicesProps["providingServicesBlock"];
}
