import InterestingFactsProps from "components/pageComponents/InterestingFacts/interestingFacts.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ServicesProps from "components/pageComponents/Services/services.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface AboutCompanyPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        services_description_block: ServicesDescriptionProps["servicesDescription"];
        services_block: ServicesProps["servicesBlock"];
        support_block: SupportProps["supportBlock"];
        interesting_facts_block: InterestingFactsProps["interestingFactsBlock"];
    };
}
