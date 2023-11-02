export interface ClientReviewProps {
    UserName: string;
    text: string;
    rating: number;
    date: string;
    isOnMainPage: boolean;
}

export interface IClientReviewItem extends ClientReviewProps {}
