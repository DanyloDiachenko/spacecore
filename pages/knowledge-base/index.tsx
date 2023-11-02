import { GetServerSideProps, GetServerSidePropsContext } from "next";

import KnowledgeBasePageProps from "interfaces/knowledgeBasePage.props";
import KnowledgeBaseComponent from "components/pageComponents/KnowledgeBase";
import KnowledgeBaseProps from "components/pageComponents/KnowledgeBase/knowledgeBase.props";

const KnowledgeBasePage = ({
    content,
}: KnowledgeBasePageProps): JSX.Element => {
    const knowledgeBaseBlock = content.knowledge_base_block;

    return <KnowledgeBaseComponent knowledgeBaseBlock={knowledgeBaseBlock} />;
};

export default KnowledgeBasePage;

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    const content: KnowledgeBasePageProps["content"] = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/knowledge-base.json`);
    const contentDesctrcutured: KnowledgeBaseProps["knowledgeBaseBlock"] =
        content.knowledge_base_block;

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-parent-categories?populate=*&locale=${context.locale}&order=orderNumber`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
                },
            },
        );
        const data = await response.json();

        const baseItems = data.data.map((item: any) => {
            const links = item.attributes.knowledge_base_categories.data.map(
                (category: any) => {
                    return {
                        title: category.attributes.title,
                        slug: category.attributes.slug,
                    };
                },
            );

            return {
                id: item.id,
                title: item.attributes.title,
                links: links,
            };
        });

        return {
            props: {
                content: {
                    knowledge_base_block: {
                        title: contentDesctrcutured.title,
                        placeholder: contentDesctrcutured.placeholder,
                        buttonText: contentDesctrcutured.buttonText,
                        nothingFound: contentDesctrcutured.nothingFound,
                        baseItems: baseItems,
                    },
                },
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                content: {
                    knowledge_base_block: {
                        title: contentDesctrcutured.title,
                        placeholder: contentDesctrcutured.placeholder,
                        buttonText: contentDesctrcutured.buttonText,
                        nothingFound: contentDesctrcutured.nothingFound,
                        baseItems: [],
                    },
                },
            },
        };
    }
};
