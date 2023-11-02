interface INavigationAdditional {
    icon: string;
    title: string;
    link: string;
}

interface INavigationLeftMenu {
    title: string;
    link: string;
    additional?: INavigationAdditional[];
}

export default interface INavigation {
    title: string;
    isShort: boolean;
    leftMenu: INavigationLeftMenu[];
    link?: string;
}
