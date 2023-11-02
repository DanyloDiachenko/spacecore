import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ReviewsProps from "components/pageComponents/Reviews/reviews.props";

export default interface ReviewsPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        reviews_block: ReviewsProps["reviewsBlock"];
    };
}
