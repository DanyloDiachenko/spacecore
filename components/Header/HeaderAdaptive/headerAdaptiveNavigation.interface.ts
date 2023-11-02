export default interface IHeaderNavigation {
    title: string;
    link?: string;
    additional?: {
        title: string;
        link: string;
    }[];
}
