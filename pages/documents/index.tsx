import { GetServerSideProps } from "next";

import DocumentsPageProps from "interfaces/documentsPage.props";
import Documents from "components/pages/Documents";

const DocumentsPage = ({ content }: DocumentsPageProps): JSX.Element => {
    const {
        main_block,
        not_finded_information_block,
        faq_block,
        support_block,
        documents_block,
    } = content;

    return (
        <Documents
            mainBlock={main_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            documentsBlock={documents_block}
        />
    );
};

export default DocumentsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/documents.json`);

    return {
        props: {
            content,
        },
    };
};
