import MainPageComponent from "components/pageComponents/MainPageComponent";
import ReviewsComponent from "components/pageComponents/Reviews";
import ReviewsPageComponentProps from "interfaces/reviewsPageComponent.props";

const Reviews = ({
    mainBlock,
    reviewsBlock,
}: ReviewsPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #0F76AC 0%, #CACFFF 100%)"
                mainBlock={mainBlock}
            />
            <ReviewsComponent reviewsBlock={reviewsBlock} />
        </>
    );
};

export default Reviews;
