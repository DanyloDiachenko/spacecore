import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import PlacingEquipmentPageComponentProps from "./placingEquipmentPageComponent.props";
import PlacingPricesProps from "components/pageComponents/PlacingPrices/placingPrices.props";

export default interface PlacingEquipmentPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        placing_text_block: PlacingEquipmentPageComponentProps["placingTextBlock"];
        placing_prices_block: PlacingPricesProps["placingPricesBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
