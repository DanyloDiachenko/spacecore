import { GetServerSideProps } from "next";

import ResellerProgram from "components/pages/ResellerProgram";
import ResellerProgramPageProps from "interfaces/resellerProgramPage.props";

const ResellerProgramPage = ({
    content,
}: ResellerProgramPageProps): JSX.Element => {
    const {
        main_block,
        support_block,
        services_description_block,
        resellers_text_block,
        faq_block,
        resellers_description_block,
        reseller_program_table_block,
    } = content;

    return (
        <ResellerProgram
            mainBlock={main_block}
            supportBlock={support_block}
            servicesDescriptionBlock={services_description_block}
            resellersTextBlock={resellers_text_block}
            faqBlock={faq_block}
            resellersDescriptionBlock={resellers_description_block}
            resellerProgramTableBlock={reseller_program_table_block}
        />
    );
};

export default ResellerProgramPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/reseller-program.json`);

    return {
        props: {
            content,
        },
    };
};
