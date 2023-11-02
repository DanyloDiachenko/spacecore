import { GetServerSideProps } from "next";

import VpsServers from "components/pages/VpsServers";
import VpsServersPageProps from "interfaces/vpsServersPage.props";

const VpsServersPage = ({ content }: VpsServersPageProps): JSX.Element => {
    const {
        main_block,
        tariffes_filters_block,
        tariffes_block,
        operation_systems_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        support_block,
    } = content;

    return (
        <VpsServers
            mainBlock={main_block}
            tariffesFiltersBlock={tariffes_filters_block}
            tariffesBlock={tariffes_block}
            operationSystemsBlock={operation_systems_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
        />
    );
};

export default VpsServersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/virtual-servers.json`);

    return {
        props: {
            content,
        },
    };
};
