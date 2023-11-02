export default interface NewsItemProps {
    slug: string;
    imgSrc: string;
    created: string;
    category: {
        slug: string;
        title: string;
    };
    title: string;
    readed: number;
    timeToRead: string;
    description: string;
    currentSlide: number;
}
