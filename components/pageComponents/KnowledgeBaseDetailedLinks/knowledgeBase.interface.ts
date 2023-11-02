export interface ILink {
    title: string;
    slug: string;
    category: string;
    orderNumber: number;
}

export interface IAdditionalItem {
    title: string;
    slug: string;
    links: ILink[];
}

export interface IKnowledgeBaseItem {
    title: string;
    additional: IAdditionalItem[];
}
