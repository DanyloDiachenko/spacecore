import DomainInputBlockProps from "components/pageComponents/DomainInput/domainInput.props";
import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DomainNamePageComponentProps {
    domain: string;
    mainBlock: MainComponentProps["mainBlock"];
    domainBlock: DomainInputBlockProps["domainBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    notFindedInformationBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
