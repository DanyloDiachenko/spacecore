import ConfiguratorProps from "components/pageComponents/Configurator/configurator.props";
import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface BackupStoragePageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    configuratorBlock: ConfiguratorProps["configuratorBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    notFindedSearchedBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
