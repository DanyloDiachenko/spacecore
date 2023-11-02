import { ITariff } from "components/UI/Tariff/tariff.interface";

export default interface TariffesMainProps {
    tariffes: {
        tariffTitles: {
            diskTitle: string;
            coresTitle: string;
            ramTitle: string;
            channelTitle: string;
            locationTitle: string;
            coreTitle: string;
            antiDdosTitle: string;
            buttonText: string;
        };
    };

    tariffesContent: ITariff[];
}
