import ServicesDescription from "../ServicesDescription";
import MainTextComponent from "../MainTextComponent";
import ForInvestorsProps from "./forInvestors.props";

const ForInvestorsComponent = ({
    forInvestorsBlock,
}: ForInvestorsProps): JSX.Element => {
    return (
        <>
            <section className="mt-12 container for-investors">
                <MainTextComponent
                    description={forInvestorsBlock.description}
                    title={forInvestorsBlock.title}
                />
            </section>
            <ServicesDescription
                servicesDescription={forInvestorsBlock.servicesDescription}
                isMinusMarginTop={false}
            />
            <section className="mt-12 container for-investors-text">
                <p>{forInvestorsBlock.descriptionAdditional}</p>
            </section>
        </>
    );
};

export default ForInvestorsComponent;
