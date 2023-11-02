import { GetServerSideProps } from "next";

import DedicatedServers from "components/pages/DedicatedServers";
import DedicatedServersPageProps from "interfaces/dedicatedServersPage.props";

const DedicatedServersPage = ({
    content,
}: DedicatedServersPageProps): JSX.Element => {
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
        <DedicatedServers
            tariffesFiltersBlock={tariffes_filters_block}
            mainBlock={main_block}
            tariffesBlock={tariffes_block}
            operationSystemsBlock={operation_systems_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
        />
    );
};

export default DedicatedServersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/dedicated-servers.json`);

    return {
        props: {
            content,
        },
    };
};
