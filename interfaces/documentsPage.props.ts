import DocumentsProps from "components/pageComponents/Documents/documents.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";

export default interface DocumentsPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        documents_block: DocumentsProps["documentsBlock"];
        not_finded_information_block: NotFindedSearchedProps["notFindedSearchedBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
