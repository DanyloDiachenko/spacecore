import { GetServerSideProps } from "next";

import BackupStoragePageProps from "interfaces/backupStoragePage.props";
import BackupStorage from "components/pages/BackupStorage";

const BackupStoragePage = ({
    content,
}: BackupStoragePageProps): JSX.Element => {
    const {
        main_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        support_block,
        configurator_block,
    } = content;

    return (
        <BackupStorage
            mainBlock={main_block}
            mainInfoBlock={main_info_block}
            notFindedSearchedBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            configuratorBlock={configurator_block}
        />
    );
};

export default BackupStoragePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/backup-storage.json`);

    return {
        props: {
            content,
        },
    };
};
