import { GetServerSideProps } from "next";

import HostingSite from "components/pages/HostingSite";
import HostingSitePageProps from "interfaces/hostingSitePage.props";

const HostingSitePage = ({ content }: HostingSitePageProps): JSX.Element => {
    const {
        main_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        support_block,
        tariffes_block,
    } = content;

    return (
        <HostingSite
            mainBlock={main_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            tariffesBlock={tariffes_block}
        />
    );
};

export default HostingSitePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/web-hosting.json`);

    return {
        props: {
            content,
        },
    };
};
