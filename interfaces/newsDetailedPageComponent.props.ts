import ReadByThemeProps from "components/pageComponents/ReadByTheme/readByTheme.props";

export interface INavigation {
    title: string;
    link: string;
}

export interface NewsDetailePageComponentProps {
    newsDetailedBlock: {
        title: string;
        imgSrc: string;
        created: string;
        category: string;
        authorName: string;
        authorImgSrc: string;
        authorJob: string;
        content: string;
        navigation: string[];
    };
    readByThemeBlock: ReadByThemeProps["readByThemeBlock"];

    setOpenPopup: (popupToOpen: string) => void;
}
