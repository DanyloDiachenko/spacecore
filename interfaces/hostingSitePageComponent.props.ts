import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import TariffesProps from "components/pageComponents/Tariffes/tariffes.props";

export default interface HostingSitePageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    tariffesBlock: TariffesProps["tariffesBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    notFindedSearchedBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
