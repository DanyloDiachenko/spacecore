export default interface NewsFiltersProps {
    newsFiltersBlock?: {
        filters: {
            slug: string;
            title: string;
        }[];
        newsletterTitle: string;
        imgSrc: string;
    };
}
