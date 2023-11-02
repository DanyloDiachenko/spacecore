import DdosProtectionBannerProps from "components/pageComponents/DdosProtectionBanner/ddosProtectionBanner.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ProvidingServicesProps from "components/pageComponents/ProvidingServices/providingServices.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DdosProtectionPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        services_description: ServicesDescriptionProps["servicesDescription"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
        ddos_protection_banner_block: DdosProtectionBannerProps["ddosProtectionBannerBlock"];
        providing_services_block: ProvidingServicesProps["providingServicesBlock"];
    };
}
