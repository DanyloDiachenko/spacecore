import ICompany from "./company.interface";
import IReview from "./review.interface";

export default interface ReviewsProps {
    reviewsBlock: {
        companies: ICompany[];
        reviews: IReview[];
    };
}
