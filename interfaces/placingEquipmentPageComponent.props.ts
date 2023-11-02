import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import PlacingPricesProps from "components/pageComponents/PlacingPrices/placingPrices.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface PlacingEquipmentPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    placingTextBlock: {
        title: string;
        description: string;
        descriptionAdditional: string;
    };
    placingPricesBlock: PlacingPricesProps["placingPricesBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
