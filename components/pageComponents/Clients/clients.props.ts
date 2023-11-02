import { IClientReviewItem } from "./ClientReviews/clientReviews.interface";

export default interface ClientsProps {
    clientsBlock: {
        title: string;
        clientsNumber: number;
        clientsDescription: string;
        imgSrc: string;
        buttonText: string;
        buttonLink: string;
        reviews: IClientReviewItem[];
    };
}
