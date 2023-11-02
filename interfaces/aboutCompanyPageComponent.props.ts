import InterestingFactsProps from "components/pageComponents/InterestingFacts/interestingFacts.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ServicesProps from "components/pageComponents/Services/services.props";
import ServicesDescriptionProps from "components/pageComponents/ServicesDescription/servicesDescrption.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface AboutCompanyPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    servicesDescriptionBlock: ServicesDescriptionProps["servicesDescription"];
    servicesBlock: ServicesProps["servicesBlock"];
    supportBlock: SupportProps["supportBlock"];
    interestingFactsBlock: InterestingFactsProps["interestingFactsBlock"];
}
