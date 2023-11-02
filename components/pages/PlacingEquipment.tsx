import MainPageComponent from "components/pageComponents/MainPageComponent";
import Support from "components/pageComponents/Support";
import PlacingPrices from "components/pageComponents/PlacingPrices";
import PlacingEquipmentPageComponentProps from "interfaces/placingEquipmentPageComponent.props";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";

const PlacingEquipment = ({
    mainBlock,
    faqBlock,
    supportBlock,
    placingTextBlock,
    placingPricesBlock,
}: PlacingEquipmentPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #221771 49.48%, #14085A 100%)"
                mainBlock={mainBlock}
            />
            <section className="container placing-text mt-12">
                <h2>{placingTextBlock.title}</h2>
                <p>{placingTextBlock.description} </p>
                <p>{placingTextBlock.descriptionAdditional} </p>
            </section>
            <PlacingPrices placingPricesBlock={placingPricesBlock} />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default PlacingEquipment;
