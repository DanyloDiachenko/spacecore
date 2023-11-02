import { GetServerSideProps } from "next";

import CloudServers from "components/pages/CloudServers";
import CloudServersPageProps from "interfaces/cloudServersPage.props";

const CloudServersPage = ({ content }: CloudServersPageProps): JSX.Element => {
    const {
        main_block,
        tariffes_cpu_block,
        operation_systems_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        support_block,
    } = content;

    return (
        <CloudServers
            tariffesCpuBlock={tariffes_cpu_block}
            mainBlock={main_block}
            operationSystemsBlock={operation_systems_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
        />
    );
};

export default CloudServersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/cloud-servers.json`);

    return {
        props: {
            content,
        },
    };
};
