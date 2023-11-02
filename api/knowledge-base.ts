import {
    IAdditionalItem,
    IKnowledgeBaseItem,
    ILink,
} from "components/pageComponents/KnowledgeBaseDetailedLinks/knowledgeBase.interface";

export const getKnowledgeBase = async (slug: string, locale: string = "en") => {
    let knowledgeBase: IKnowledgeBaseItem[] = [];

    try {
        const resItems = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-parent-categories?populate=knowledge_base_categories.knowledge_bases&locale=${locale}`,
            {
                headers: {
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
                },
            },
        );

        const resJsonItems = await resItems.json();

        knowledgeBase = resJsonItems.data.map((item: any) => {
            const additional: IAdditionalItem[] =
                item.attributes.knowledge_base_categories.data.map(
                    (category: any) => {
                        const links: ILink[] =
                            category.attributes.knowledge_bases.data.map(
                                (knowledgeBase: any) => ({
                                    title: knowledgeBase.attributes.title,
                                    slug: knowledgeBase.attributes.slug,
                                    category: category.attributes.title,
                                }),
                            );

                        return {
                            title: category.attributes.title,
                            slug: category.attributes.slug,
                            links: links,
                        };
                    },
                );

            return {
                title: item.attributes.title,
                additional: additional,
            };
        });
    } catch (e) {
        console.log(e);
    }

    const content = {
        navigation_block: knowledgeBase,
        content_block: "",
        knowledgeBaseDetailedDetailTitle: "",
    };

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/knowledge-base-detailedlinks?filters[slug][$eq]=${slug}&locale=${locale}`,
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

    return content;
};
