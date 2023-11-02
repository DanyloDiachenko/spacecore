import { GetServerSideProps } from "next";

import Reviews from "components/pages/Reviews";
import ReviewsPageProps from "interfaces/reviewsPage.props";
// import ICompany from "components/pageComponents/Reviews/company.interface";
// import IReview from "components/pageComponents/Reviews/review.interface";
import ReviewsProps from "components/pageComponents/Reviews/reviews.props";

const ReviewsPage = ({ content }: ReviewsPageProps): JSX.Element => {
    const { main_block, reviews_block } = content;

    return <Reviews reviewsBlock={reviews_block} mainBlock={main_block} />;
};

export default ReviewsPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const mainBlock = {
        imgSrc: "/images/banners/reviews.webp",
        title: "Отзывы клиентов",
        description:
            "Обеспечьте доступность своего сайта или веб-приложения с помощью SpaceCore. Бесплатно размещайте домены и записи на наших DNS-серверах",
    };

    const catsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews-categories?populate[0]=imgSrc`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const catsResJson = await catsRes.json();

    const companies = catsResJson.data.map((item: { attributes: any }) => {
        return {
            link: item.attributes.link,
            imgSrc:
                item.attributes.imgSrc && item.attributes.imgSrc.data
                    ? process.env.NEXT_PUBLIC_STORAGE_URL +
                      item.attributes.imgSrc.data.attributes.url
                    : "/images/medium/hostings-info.webp",
        };
    });

    const lastRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews?populate[0]=reviews_category&populate[1]=reviews_category.imgSrc&sort=date:desc`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );

    const lastResJson = await lastRes.json();

    const reviews = lastResJson.data.map((item: { attributes: any }) => {
        return {
            rate: item.attributes.rating,
            companyImgSrc:
                item.attributes.reviews_category &&
                item.attributes.reviews_category.data &&
                item.attributes.reviews_category.data.attributes.imgSrc &&
                item.attributes.reviews_category.data.attributes.imgSrc.data
                    ? process.env.NEXT_PUBLIC_STORAGE_URL +
                      item.attributes.reviews_category.data.attributes.imgSrc
                          .data.attributes.url
                    : "/images/medium/hostings-info.webp",
            title: item.attributes.text,
            created: new Date(item.attributes.date).toLocaleDateString(),
            author: item.attributes.UserName,
        };
    });

    const reviewsBlock: ReviewsProps["reviewsBlock"] = {
        companies: companies,
        reviews: reviews,
    };

    const content: ReviewsPageProps["content"] = {
        main_block: mainBlock,
        reviews_block: reviewsBlock,
    };

    return {
        props: {
            content,
        },
    };
};
