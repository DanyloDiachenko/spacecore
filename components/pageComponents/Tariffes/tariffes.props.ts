import ITariff from "./Tariff/tariff.interface";

export default interface TariffesProps {
    tariffesBlock: {
        title: string;
        tariffes: ITariff[];
    };
}
