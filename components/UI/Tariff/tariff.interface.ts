export interface ITariff {
    attributes: {
        id: number;
        title: string;
        core: string;
        antiDdos: string;
        cores: number;
        coresTitle: string;
        ram: number;
        ramTitle: string;
        disk: number;
        disksVolume: number;
        diskTitle: string;
        channel: number;
        channelTitle: string;
        price: number;
        buttonLink: string;
        disсountProcent?: string;
        disсountNumber?: string;
        countryKey: string;
        instalationPrice: number;
        link1month: string;
        link3month: string;
        link6month: string;
        link12month: string;
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
}
