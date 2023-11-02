import { GetServerSideProps } from "next";

import AboutCompany from "components/pages/AboutCompany";
import AboutCompanyPageProps from "interfaces/aboutCompanyPage.props";

const AboutCompanyPage = ({ content }: AboutCompanyPageProps): JSX.Element => {
    const {
        main_block,
        support_block,
        services_description_block,
        services_block,
        interesting_facts_block,
    } = content;

    return (
        <AboutCompany
            mainBlock={main_block}
            supportBlock={support_block}
            servicesDescriptionBlock={services_description_block}
            servicesBlock={services_block}
            interestingFactsBlock={interesting_facts_block}
        />
    );
};

export default AboutCompanyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/about-company.json`);

    return {
        props: {
            content,
        },
    };
};
