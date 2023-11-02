import { GetServerSideProps } from "next";

import Home from "components/pages/IndexPage";
import HomePageProps from "interfaces/homePage.props";
import { ClientReviewProps } from "components/pageComponents/Clients/ClientReviews/clientReviews.interface";

const HomePage = ({ content }: HomePageProps): JSX.Element => {
    const {
        slider,
        about_block,
        services_block,
        services_additional_block,
        domain_block,
        advantages_block,
        clients_block,
        actual_news_block,
        support_block,
    } = content;

    return (
        <Home
            mainSliderBlock={slider}
            servicesBlock={services_block}
            aboutBlock={about_block}
            servicesAdditionalBlock={services_additional_block}
            domainBlock={domain_block}
            advantagesBlock={advantages_block}
            clientsBlock={clients_block}
            actualNewsBlock={actual_news_block}
            supportBlock={support_block}
        />
    );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/main-page.json`);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/news?sort=created:desc&pagination[page]=1&populate=*&pagination[pageSize]=6&locale=${context.locale}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
                },
            },
        );

        const resJson = await res.json();

        content.actual_news_block.news = resJson.data.map(
            (newsItem: { attributes: any }) => {
                return {
                    ...newsItem.attributes,
                    /* imgSrc: item.attributes.imgSrc
                        ? item.attributes.imgSrc.data.attributes.url
                        : "/images/banners/news-banner.png", */
                    imgSrc:
                        newsItem.attributes.imgSrc &&
                        newsItem.attributes.imgSrc.data
                            ? process.env.NEXT_PUBLIC_STORAGE_URL +
                              newsItem.attributes.imgSrc.data.attributes.url
                            : "/images/medium/news-1.webp",
                    category: {
                        slug: newsItem.attributes.category.data.attributes.slug,
                        title: newsItem.attributes.category.data.attributes
                            .title,
                    },
                };
            },
        );
    } catch (e) {
        console.log(e);
        content.actual_news_block.news = [];
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        });

        const resJson = await res.json();

        content.clients_block.reviews = resJson.data
            .filter(
                (review: { attributes: ClientReviewProps }) =>
                    review.attributes.isOnMainPage === true,
            )
            .map((review: { attributes: ClientReviewProps }) => {
                return {
                    ...review.attributes,
                };
            });
    } catch (e) {
        console.log(e);
        content.clients_block.reviews = [];
    }

    return {
        props: {
            content,
        },
    };
};
