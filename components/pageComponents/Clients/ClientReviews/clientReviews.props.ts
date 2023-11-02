import { IClientReviewItem } from "./clientReviews.interface";

export default interface ClientReviewsProps {
    reviews: IClientReviewItem[];
    buttonText: string;
    buttonLink: string;
}
