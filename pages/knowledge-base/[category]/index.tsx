import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter, NextRouter } from "next/router";
import { useState, useEffect } from "react";

import KnowledgeBaseDetailedDetailedComponent from "components/pages/KnowledgeBaseDetailed";
import {
    IAdditionalItem,
    IKnowledgeBaseItem,
    ILink,
} from "components/pageComponents/KnowledgeBaseDetailedLinks/knowledgeBase.interface";
import KnowledgeBaseDetailedPageProps from "interfaces/knowledgeBaseDetailedPage.props";

const KnowledgeBaseDetailedDetailedPage = ({
    content,
}: KnowledgeBaseDetailedPageProps): JSX.Element => {
    const [knowledgeBaseDetailedContent, setKnowledgeBaseDetailedContent] =
        useState(content);

    const router: NextRouter = useRouter();

    const {
        navigation_block,
        content_block,
        knowledgeBaseDetailedDetailTitle,
    } = knowledgeBaseDetailedContent;

    useEffect(() => {
        setKnowledgeBaseDetailedContent(content);
    }, [router.asPath]);

    return (
        <>
            <KnowledgeBaseDetailedDetailedComponent
                navigationBlock={navigation_block}
                contentBlock={content_block}
                knowledgeBaseDetailedDetailTitle={
                    knowledgeBaseDetailedDetailTitle
                }
            />
        </>
    );
};

export default KnowledgeBaseDetailedDetailedPage;

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext,
) => {
    let knowledgeBase: IKnowledgeBaseItem[] = [];

    try {
        const resItems = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-parent-categories?populate=knowledge_base_categories.knowledge_bases&locale=${context.locale}`,
            {
                headers: {
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
                },
            },
        );

        const resJsonItems = await resItems.json();

        knowledgeBase = resJsonItems.data
            .sort(
                (a: any, b: any) =>
                    a.attributes.orderNumber - b.attributes.orderNumber,
            )
            .map((item: any) => {
                const additional: IAdditionalItem[] =
                    item.attributes.knowledge_base_categories.data
                        .sort(
                            (a: any, b: any) =>
                                a.attributes.orderNumber -
                                b.attributes.orderNumber,
                        )
                        .map((category: any) => {
                            const links: ILink[] =
                                category.attributes.knowledge_bases.data
                                    .sort(
                                        (a: any, b: any) =>
                                            a.attributes.orderNumber -
                                            b.attributes.orderNumber,
                                    )
                                    .map((knowledgeBase: any) => ({
                                        title: knowledgeBase.attributes.title,
                                        slug: knowledgeBase.attributes.slug,
                                        category: category.attributes.title,
                                    }));

                            return {
                                title: category.attributes.title,
                                slug: category.attributes.slug,
                                links: links,
                            };
                        });

                return {
                    title: item.attributes.title,
                    additional: additional,
                };
            });
    } catch (e) {
        console.log(e);
    }

    const { category } = context.query;

    const content = {
        navigation_block: knowledgeBase,
        content_block: "",
        knowledgeBaseDetailedDetailTitle: "",
    };

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-detailedlinks?filters[slug][$eq]=${category}&locale=${context.locale}&order=orderNumber:ASC`,
            {
                headers: {
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
                },
            },
        );
        const resJson = await res.json();
        if (resJson.data.length > 0) {
            content.content_block = resJson.data[0].attributes.content;
            content.knowledgeBaseDetailedDetailTitle =
                resJson.data[0].attributes.title;
        }
    } catch (e) {
        console.log(e);
        content.content_block = "";
    }

    const slugObj = knowledgeBase
        .flatMap((item) => item.additional)
        .find((additionalItem) => additionalItem.slug === category);

    const firstSlug =
        slugObj && slugObj.links && slugObj.links.length
            ? slugObj.links[0].slug
            : null;

    if (firstSlug) {
        return {
            redirect: {
                destination: `/ru/knowledge-base/${category}/${firstSlug}`,
                permanent: false,
            },
        };
    }

    return {
        props: {
            content,
        },
    };
};
