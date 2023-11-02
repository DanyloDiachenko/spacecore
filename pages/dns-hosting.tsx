import { GetServerSideProps } from "next";

import DnsHosting from "components/pages/DnsHosting";
import DnsHostingPageProps from "interfaces/dnsHostingPage.props";

const DnsHostingPage = ({ content }: DnsHostingPageProps): JSX.Element => {
    const {
        main_block,
        main_info_block,
        faq_block,
        support_block,
        what_is_dns_block,
        what_need_to_use_dns_block,
    } = content;

    return (
        <DnsHosting
            mainBlock={main_block}
            mainInfoBlock={main_info_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            whatIsDnsBlock={what_is_dns_block}
            whatNeedToUseDnsBlock={what_need_to_use_dns_block}
        />
    );
};

export default DnsHostingPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/dns-hosting.json`);

    return {
        props: {
            content,
        },
    };
};
