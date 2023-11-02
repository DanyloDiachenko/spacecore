import { GetServerSideProps } from "next";

import DomainNamePageProps from "interfaces/domainNamePage.props";
import DomainName from "components/pages/DomainName";

const DomainNamePage = ({
    domain,
    content,
}: DomainNamePageProps): JSX.Element => {
    const {
        main_block,
        main_info_block,
        not_finded_information_block,
        faq_block,
        domain_block,
        support_block,
    } = content;

    return (
        <DomainName
            domain={domain}
            mainBlock={main_block}
            mainInfoBlock={main_info_block}
            notFindedInformationBlock={not_finded_information_block}
            faqBlock={faq_block}
            supportBlock={support_block}
            domainBlock={domain_block}
        />
    );
};

export default DomainNamePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { domain } = context.query;
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/domains.json`);

    return {
        props: {
            domain: domain ? domain : "",
            content,
        },
    };
};
