export type TitleKeyType = "vds" | "web-hosting" | "domains" | "ftp-store";

type TitleType = "VDS" | "Веб-хостинг" | "Домены" | "FTP-хранилище";

export interface IButton {
    title: TitleType;
    titleKey: TitleKeyType;
}

interface IContentTableItem {
    id: number;
    level: number | "Особые условия";
    length: number | 0;
    circulation: {
        from: number;
        to: number;
    };
    update: number | 0;
    discount: number | 0;
}

export interface ITableContentItem {
    titleKey: TitleKeyType;
    title: TitleType;
    content: IContentTableItem[];
}
