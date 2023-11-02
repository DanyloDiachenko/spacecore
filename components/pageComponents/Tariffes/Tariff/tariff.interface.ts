import { LogosType } from "./tariff.props";

export default interface ITariff {
    imgSrc: string;
    title: string;
    priceSsd: string;
    priceNvme: string;
    ssdButtonTitle: string;
    nvmeButtonTitle: string;
    disk: string;
    diskTitle: string;
    domens: number;
    domensTitle: string;
    mySql: string;
    mySqlTitle: string;
    protection: string;
    protectionTitle: string;
    controlPanel: string;
    controlPanelTitle: string;
    logotypes: LogosType[];
    buttonText: string;
    buttonLink: string;
}
