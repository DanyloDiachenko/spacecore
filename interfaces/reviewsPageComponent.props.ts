import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import ReviewsProps from "components/pageComponents/Reviews/reviews.props";

export default interface ReviewsPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    reviewsBlock: ReviewsProps["reviewsBlock"];
}
