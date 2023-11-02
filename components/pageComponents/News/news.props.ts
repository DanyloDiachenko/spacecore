import INewsItem from "./news.interface";

export default interface ActualNewsProps {
    actualNewsBlock: {
        title: string;
        news: INewsItem[];
        buttonText: string;
        buttonLink: string;
    };
}
