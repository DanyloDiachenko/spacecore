import { GetServerSideProps } from "next";

import ForInvestorsPageProps from "interfaces/forInvestorsPage.props";
import ForInvestors from "components/pages/ForInvestors";

const ForInvestorsPage = ({ content }: ForInvestorsPageProps): JSX.Element => {
    const { main_block, faq_block, support_block, for_investors_block } =
        content;
    return (
        <ForInvestors
            mainBlock={main_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            forInvestorsBlock={for_investors_block}
        />
    );
};

export default ForInvestorsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/investor-program.json`);

    return {
        props: {
            content,
        },
    };
};
