import AdvantageItem from "./AdvantageItem";
import AdvantagesProps from "./advantages.props";

const Advantages = ({ advantagesBlock }: AdvantagesProps): JSX.Element => {
    const renderTitle = (): JSX.Element => {
        const text: string = advantagesBlock.title; /* Преимущества SpaceCore */
        const searchWord: string = "SpaceCore";

        const highlightedText: string = text.replace(
            new RegExp(searchWord, "gi"),
            `<br /><span class="text-violet">${searchWord}</span>`,
        );

        return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    return (
        <section className="mt-12 container advantages">
            <h2>{renderTitle()}</h2>
            <div className="content">
                {advantagesBlock.advantages.map((advItem, index) => (
                    <AdvantageItem key={index} {...advItem} />
                ))}
            </div>
        </section>
    );
};

export default Advantages;
