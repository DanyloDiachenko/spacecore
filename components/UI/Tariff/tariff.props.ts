export default interface TariffProps {
    id: number;
    title: string;
    countryKey: string;
    locationTitle?: string;
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
    instalationPrice: number;
    buttonLink: string;
    discountProcent?: string;
    discountNumber?: string;
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
    period: number;

    propsId: number;
}
