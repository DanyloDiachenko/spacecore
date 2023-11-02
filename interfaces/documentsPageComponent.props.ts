import DocumentsProps from "components/pageComponents/Documents/documents.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DocumentsPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    documentsBlock: DocumentsProps["documentsBlock"];
    notFindedSearchedBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
