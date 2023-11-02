import MainTextComponentProps from "./mainTextComponent.props";

const MainTextComponent = ({
    title,
    description,
}: MainTextComponentProps): JSX.Element => {
    return (
        <section className="container mt-12 referral-text">
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    );
};

export default MainTextComponent;
