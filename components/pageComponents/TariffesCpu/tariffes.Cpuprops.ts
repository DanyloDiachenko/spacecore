export default interface TariffesCpuProps {
    tariffesCpuBlock: {
        title: string;
        standardVcpuText: string;
        dedicatedVcpuText: string;
        ipVersion4Text: string;
        ipVersion6Text: string;
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
        countries: {
            title: string;
            code: string;
        }[];
    };
}
