import { IMinMax } from "./minMax.interface";

export default interface RangesProps {
    ranges: {
        priceTitle: string;
        priceMin: number;
        priceMax: number;
        disksTitle: string;
        disksMin: number;
        disksMax: number;
        disksVolumeTitle: string;
        disksVolumeMin: number;
        disksVolumeMax: number;
        coresTitle: string;
        coresMin: number;
        coresMax: number;
        ramTitle: string;
        ramMin: number;
        ramMax: number;
    };

    price: {
        min: number;
        max: number;
    };
    disks: {
        min: number;
        max: number;
    };
    disksVolume: {
        min: number;
        max: number;
    };
    cores: {
        min: number;
        max: number;
    };
    ram: {
        min: number;
        max: number;
    };

    setPrice: (value: IMinMax) => void;
    setDisks: (value: IMinMax) => void;
    setDisksVolume: (value: IMinMax) => void;
    setCores: (value: IMinMax) => void;
    setRam: (value: IMinMax) => void;

    onChangeComplete: () => void;
}
