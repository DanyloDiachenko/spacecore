import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import TariffesProps from "components/pageComponents/Tariffes/tariffes.props";

export default interface HostingSitePageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        tariffes_block: TariffesProps["tariffesBlock"];
        main_info_block: MainInfoProps["mainInfoBlock"];
        not_finded_information_block: NotFindedSearchedProps["notFindedSearchedBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
