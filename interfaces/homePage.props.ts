import ServicesProps from "components/pageComponents/Services/services.props";
import MainPageComponentProps from "./homePageComponent.props";
import ServicesAdditionalProps from "components/pageComponents/ServicesAdditional/servicesAdditional.props";
import DomainProps from "components/pageComponents/Domain/domain.props";
import AdvantagesProps from "components/pageComponents/Advantages/advantages.props";
import ClientsProps from "components/pageComponents/Clients/clients.props";
import ActualNewsProps from "components/pageComponents/News/news.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface HomePageProps {
    content: {
        slider: MainPageComponentProps["mainSliderBlock"];
        about_block: MainPageComponentProps["aboutBlock"];
        services_block: ServicesProps["servicesBlock"];
        services_additional_block: ServicesAdditionalProps["servicesAdditional"];
        domain_block: DomainProps["domainBlock"];
        advantages_block: AdvantagesProps["advantagesBlock"];
        clients_block: ClientsProps["clientsBlock"];
        actual_news_block: ActualNewsProps["actualNewsBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
