import IHeaderNavigation from "./headerAdaptiveNavigation.interface";

export default interface HeaderAdaptiveProps {
    headerAdaptiveNavigation: IHeaderNavigation[];
    emailLink?: string;
    email?: string;
    servicesWorkstitle?: string;
    className?: string;
    headerBlock?: any;
}
