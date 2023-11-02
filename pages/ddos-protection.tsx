import { GetServerSideProps } from "next";

import DdosProtection from "components/pages/DdosProtection";
import DdosProtectionPageProps from "interfaces/ddosProtectionPage.props";

const DdosProtectionPage = ({
    content,
}: DdosProtectionPageProps): JSX.Element => {
    const {
        main_block,
        faq_block,
        support_block,
        services_description,
        ddos_protection_banner_block,
        providing_services_block,
    } = content;

    return (
        <DdosProtection
            mainBlock={main_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            servicesDescription={services_description}
            ddosProtectionBannerBlock={ddos_protection_banner_block}
            providingServicesBlock={providing_services_block}
        />
    );
};

export default DdosProtectionPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/ddos-protection.json`);

    return {
        props: {
            content,
        },
    };
};
