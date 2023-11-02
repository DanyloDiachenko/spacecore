import Main from "components/pageComponents/Main";
import About from "components/pageComponents/About";
import Services from "components/pageComponents/Services";
import ServicesAdditional from "components/pageComponents/ServicesAdditional";
import Domain from "components/pageComponents/Domain";
import Advantages from "components/pageComponents/Advantages";
import Clients from "components/pageComponents/Clients";
import News from "components/pageComponents/News";
import Support from "components/pageComponents/Support";

import MainPageComponentProps from "interfaces/homePageComponent.props";

const Home = ({
    mainSliderBlock,
    aboutBlock,
    servicesBlock,
    servicesAdditionalBlock,
    domainBlock,
    advantagesBlock,
    actualNewsBlock,
    clientsBlock,
    supportBlock,
}: MainPageComponentProps): JSX.Element => {
    return (
        <>
            <Main mainSliderBlock={mainSliderBlock} />
            <About aboutBlock={aboutBlock} />
            <Services servicesBlock={servicesBlock} />
            <ServicesAdditional servicesAdditional={servicesAdditionalBlock} />
            <Domain domainBlock={domainBlock} />
            <Advantages advantagesBlock={advantagesBlock} />
            <Clients clientsBlock={clientsBlock} />
            <News actualNewsBlock={actualNewsBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default Home;
