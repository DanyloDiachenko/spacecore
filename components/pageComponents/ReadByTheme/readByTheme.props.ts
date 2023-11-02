import INewsItem from "../News/news.interface";

export default interface ReadByThemeProps {
    readByThemeBlock: {
        news: INewsItem[];
    };
}
