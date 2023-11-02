import { GetServerSideProps } from "next";

import NewsDetailed from "components/pages/NewsDetailed";
import NewsDetailePageProps from "interfaces/newsDetailedPage.props";

const NewsDetailedPage = ({ content }: NewsDetailePageProps): JSX.Element => {
    const { news_detailed_block, read_by_theme_block } = content;

    return (
        <>
            <NewsDetailed
                newsDetailedBlock={news_detailed_block}
                readByThemeBlock={read_by_theme_block}
            />
        </>
    );
};

export default NewsDetailedPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug, category } = context.query;
    const catRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories?locale=${context.locale}&filters[slug][$eqi]=${category}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const catResJson = await catRes.json();

    const cats =
        catResJson.data && catResJson.data.length
            ? catResJson.data.map((item: { attributes: any }) => {
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
              })
            : [{ slug: "", title: "" }];

    const cat = cats[0];

    let content = {};
    // let categoryQuery = "";
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/news?filters[slug][$eqi]=${slug}&locale=${context.locale}&populate[0]=imgSrc&populate[1]=category&populate[2]=readAlso.imgSrc&populate[3]=authorImgSrc&populate[4]=readAlso.category`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );
    const resJson = await res.json();

    if (resJson.data.length === 0) {
        return {
            notFound: true,
        };
    }

    const readed = resJson.data[0].attributes.readed + 1;
    // categoryQuery =
    //     resJson.data[0].attributes.category.data.attributes.slug;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${resJson.data[0].id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: { readed },
        }),
    });

    // const allNewsRes = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/news?populate=*`,
    //     {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization:
    //                 "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
    //         },
    //     },
    // );
    // const allNewsQuery = await allNewsRes.json();

    // const newsByTheme = allNewsQuery.data

    const newsByTheme = resJson.data[0].attributes.readAlso.data.map(
        (newsItem: any) => {
            return {
                slug: newsItem.attributes.slug,
                imgSrc:
                    newsItem.attributes.imgSrc &&
                    newsItem.attributes.imgSrc.data
                        ? process.env.NEXT_PUBLIC_STORAGE_URL +
                          newsItem.attributes.imgSrc.data.attributes.url
                        : "/images/medium/news-1.webp",
                created: newsItem.attributes.created,
                category: {
                    slug: newsItem.attributes.category
                        ? newsItem.attributes.category.data.attributes.slug
                        : cat
                        ? cat.slug
                        : "",
                    title: newsItem.attributes.category
                        ? newsItem.attributes.category.data.attributes.title
                        : cat
                        ? cat.title
                        : "",
                },
                title: newsItem.attributes.title,
                readed: newsItem.attributes.readed,
                timeToRead: newsItem.attributes.timeToRead,
                description: newsItem.attributes.description,
            };
        },
    );
    // .filter(
    //     (newsItem: any) =>
    //         newsItem.category.slug === categoryQuery &&
    //         newsItem.slug !== slug,
    // );

    content = {
        news_detailed_block: {
            ...resJson.data[0].attributes,
            imgSrc:
                resJson.data[0].attributes.imgSrc &&
                resJson.data[0].attributes.imgSrc.data
                    ? process.env.NEXT_PUBLIC_STORAGE_URL +
                      resJson.data[0].attributes.imgSrc.data.attributes.url
                    : "/images/banners/news-banner.png",
            authorImgSrc:
                resJson.data[0].attributes.authorImgSrc &&
                resJson.data[0].attributes.authorImgSrc.data
                    ? process.env.NEXT_PUBLIC_STORAGE_URL +
                      resJson.data[0].attributes.authorImgSrc.data.attributes
                          .url
                    : "/images/icons/news-author.png",
            navigation: [],
            category: resJson.data[0].attributes.category
                ? resJson.data[0].attributes.category.data.attributes.title
                : cat
                ? cat.title
                : "",
        },
        read_by_theme_block: {
            news: newsByTheme && newsByTheme.length > 0 ? newsByTheme : [],
        },
    };

    return {
        props: {
            content,
        },
    };
};
