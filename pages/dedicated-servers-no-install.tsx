import { GetServerSideProps } from "next";

import DedicatedServersNoInstall from "components/pages/DedicatedServersNoInstall";
import DedicatedServersNoInstallPageProps from "interfaces/dedicatedServersNoInstallPage.props";

const DedicatedServersNoInstallPage = ({
    content,
}: DedicatedServersNoInstallPageProps): JSX.Element => {
    const {
        main_block,
        tariffes_filters_block,
        tariffes_block,
        operation_systems_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        support_block,
        subscribe_telegram_block,
    } = content;

    return (
        <DedicatedServersNoInstall
            tariffesFiltersBlock={tariffes_filters_block}
            mainBlock={main_block}
            tariffesBlock={tariffes_block}
            operationSystemsBlock={operation_systems_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            subscribeTelegramBlock={subscribe_telegram_block}
        />
    );
};

export default DedicatedServersNoInstallPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/dedicated-servers-no-install.json`);

    return {
        props: {
            content,
        },
    };
};
