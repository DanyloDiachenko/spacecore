import { GetServerSideProps } from "next";

import VpsServersPageProps from "interfaces/vpsServersPage.props";
import GameHosting from "components/pages/GameHosting";

const GameHostingPage = ({ content }: VpsServersPageProps): JSX.Element => {
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
        <GameHosting
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

export default GameHostingPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/game-hosting.json`);

    return {
        props: {
            content,
        },
    };
};
