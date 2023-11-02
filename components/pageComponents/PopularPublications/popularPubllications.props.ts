import INewsItem from "../News/news.interface";

export default interface PopularPublicationsProps {
    popularPublicationsBlock: {
        title?: string;
        news?: INewsItem[];
    };
}
