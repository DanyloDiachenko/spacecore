import { GetServerSideProps } from "next";

import News from "components/pages/News";
import NewsPageProps from "interfaces/newsPage.props";

const NewsPage = ({ content }: NewsPageProps): JSX.Element => {
    const {
        news_filters_block,
        popular_publications_block,
        last_publications_block,
    } = content;

    return (
        <News
            newsFiltersBlock={news_filters_block}
            popularPublicationsBlock={
                popular_publications_block
                    ? popular_publications_block
                    : undefined
            }
            lastPublicationsBlock={
                last_publications_block ? last_publications_block : undefined
            }
        />
    );
};

export default NewsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const catRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const catResJson = await catRes.json();
    const filters = catResJson.data.map((item: { attributes: any }) => {
        return {
            title:
                item.attributes && item.attributes.title
                    ? item.attributes.title
                    : "",
            slug:
                item.attributes && item.attributes.slug
                    ? item.attributes.slug
                    : "",
        };
    });

    const filterContentAdditional = require(`../../data/${
        context.locale === "default" ? "ru" : context.locale
    }/news-changelog.json`);
    const content: NewsPageProps["content"] = {
        news_filters_block: {
            filters,
            newsletterTitle:
                filterContentAdditional.categories_block.newsletterTitle,
            imgSrc: filterContentAdditional.categories_block.imgSrc,
        },
    };

    const catSlug = context.query.category;

    if (catSlug !== "news" && catSlug !== "changelog") {
        return {
            notFound: true,
        };
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news?sort=created:desc&pagination[page]=1&populate=*&filters[category][slug][$eq]=${catSlug}&locale=${context.locale}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const resJson = await res.json();
    content.popular_publications_block = { title: "" };

    content.popular_publications_block.news = resJson.data.map(
        (item: { attributes: any }) => {
            return {
                ...item.attributes,
                category: {
                    title:
                        item.attributes.category &&
                        item.attributes.category.data
                            ? item.attributes.category.data.attributes.title
                            : "",
                    slug:
                        item.attributes.category &&
                        item.attributes.category.data
                            ? item.attributes.category.data.attributes.slug
                            : "",
                },
                imgSrc:
                    item.attributes.imgSrc && item.attributes.imgSrc.data
                        ? process.env.NEXT_PUBLIC_STORAGE_URL +
                          item.attributes.imgSrc.data.attributes.url
                        : "/images/banners/news-banner.png",
            };
        },
    );

    const lastRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news?sort=created:desc&pagination[page]=1&pagination[pageSize]=12&populate[0]=category&locale=${context.locale}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const lastResJson = await lastRes.json();

    content.last_publications_block = lastResJson.data.map(
        (item: { attributes: any }) => {
            return {
                ...item.attributes,
                category: {
                    title:
                        item.attributes.category &&
                        item.attributes.category.data
                            ? item.attributes.category.data.attributes.title
                            : "",
                    slug:
                        item.attributes.category &&
                        item.attributes.category.data
                            ? item.attributes.category.data.attributes.slug
                            : "",
                },
                imgSrc: item.attributes.imgSrc
                    ? process.env.NEXT_PUBLIC_STORAGE_URL +
                      item.attributes.imgSrc.data.attributes.url
                    : "/images/banners/news-banner.png",
            };
        },
    );

    return {
        props: {
            content,
        },
    };
};
