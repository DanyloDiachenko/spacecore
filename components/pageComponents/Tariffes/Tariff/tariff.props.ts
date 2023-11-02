import ITariff from "./tariff.interface";

export type LogosType = "drupal" | "wordpress" | "joomla" | "circus";

export interface TariffProps extends ITariff {
    activePriceType: string;
    onPriceTypeChange: (tariffTitle: string, newPriceType: string) => void;
}
