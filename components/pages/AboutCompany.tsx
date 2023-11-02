import MainPageComponent from "components/pageComponents/MainPageComponent";
import Support from "components/pageComponents/Support";
import ServicesDescription from "components/pageComponents/ServicesDescription";
import Services from "components/pageComponents/Services";
import InteristingFacts from "components/pageComponents/InterestingFacts";
import AboutCompanyPageComponentProps from "interfaces/aboutCompanyPageComponent.props";

const AboutCompany = ({
    mainBlock,
    servicesDescriptionBlock,
    servicesBlock,
    supportBlock,
    interestingFactsBlock,
}: AboutCompanyPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #FD7081 0%, #8A39F8 100%)"
                mainBlock={mainBlock}
            />
            <InteristingFacts interestingFactsBlock={interestingFactsBlock} />
            <ServicesDescription
                servicesDescription={servicesDescriptionBlock}
                isMinusMarginTop={false}
            />
            <Services servicesBlock={servicesBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default AboutCompany;
