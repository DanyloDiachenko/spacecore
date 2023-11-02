import InterestingFactsProps from "./interestingFacts.props";

const InteristingFacts = ({
    interestingFactsBlock,
}: InterestingFactsProps): JSX.Element => {
    return (
        <section className="facts mt-12 container">
            <h2>{interestingFactsBlock.title}</h2>
            <p>{interestingFactsBlock.description}</p>
        </section>
    );
};

export default InteristingFacts;
