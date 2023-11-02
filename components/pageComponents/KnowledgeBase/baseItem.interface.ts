export interface ISlugLink {
    id: number;
    title: string;
    slug: string;
}

export interface IBaseItem {
    id: number;
    title: string;
    links: ISlugLink[];
}
