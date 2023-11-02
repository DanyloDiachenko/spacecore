import AboutProps from "components/pageComponents/About/about.props";
import AdvantagesProps from "components/pageComponents/Advantages/advantages.props";
import ClientsProps from "components/pageComponents/Clients/clients.props";
import DomainProps from "components/pageComponents/Domain/domain.props";
import MainBlockProps from "components/pageComponents/Main/mainBlock.props";
import ActualNewsProps from "components/pageComponents/News/news.props";
import ServicesProps from "components/pageComponents/Services/services.props";
import ServicesAdditionalProps from "components/pageComponents/ServicesAdditional/servicesAdditional.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface MainPageComponentProps {
    mainSliderBlock: MainBlockProps["mainSliderBlock"];
    aboutBlock: AboutProps["aboutBlock"];
    servicesBlock: ServicesProps["servicesBlock"];
    servicesAdditionalBlock: ServicesAdditionalProps["servicesAdditional"];
    domainBlock: DomainProps["domainBlock"];
    advantagesBlock: AdvantagesProps["advantagesBlock"];
    clientsBlock: ClientsProps["clientsBlock"];
    actualNewsBlock: ActualNewsProps["actualNewsBlock"];
    supportBlock: SupportProps["supportBlock"];
}
