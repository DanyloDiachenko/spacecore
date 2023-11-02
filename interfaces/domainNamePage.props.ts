import DomainInputBlockProps from "components/pageComponents/DomainInput/domainInput.props";
import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DomainNamePageProps {
    domain: string;

    content: {
        main_block: MainComponentProps["mainBlock"];
        domain_block: DomainInputBlockProps["domainBlock"];
        main_info_block: MainInfoProps["mainInfoBlock"];
        not_finded_information_block: NotFindedSearchedProps["notFindedSearchedBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
