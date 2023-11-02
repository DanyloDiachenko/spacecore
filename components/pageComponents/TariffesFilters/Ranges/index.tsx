import { useEffect } from "react";
import { connect } from "react-redux";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { formatNumber } from "helpers/formatNumber";
import RangesProps from "./ranges.props";
import { ITariffesFiltersInitStore } from "store/tariffesFilters/initStore";
import { IMinMax } from "./minMax.interface";

const Ranges = ({
    ranges,

    price,
    disksVolume,
    disks,
    cores,
    ram,
    setPrice,
    setCores,
    setDisks,
    setDisksVolume,
    setRam,

    onChangeComplete,
}: RangesProps): JSX.Element => {
    useEffect(() => {
        setPrice({
            min: ranges.priceMin,
            max: ranges.priceMax,
        });
        setCores({ min: ranges.coresMin, max: ranges.coresMax });
        setDisks({ min: ranges.disksMin, max: ranges.disksMax });
        setDisksVolume({
            min: ranges.disksVolumeMin,
            max: ranges.disksVolumeMax,
        });
        setRam({ min: ranges.ramMin, max: ranges.ramMax });
    }, []);

    return (
        <>
            <div className="item price">
                <div className="h3">{ranges.priceTitle}</div>
                <InputRange
                    //@ts-ignore
                    min={price.min}
                    max={price.max}
                    maxValue={ranges.priceMax}
                    minValue={ranges.priceMin}
                    value={price}
                    //@ts-ignore
                    onChange={(value) => {
                        if (typeof value === "number") return value;
                        setPrice({
                            min: Math.max(
                                ranges.priceMin,
                                Math.min(ranges.priceMax, value.min),
                            ),
                            max: Math.max(
                                ranges.priceMin,
                                Math.min(ranges.priceMax, value.max),
                            ),
                        });
                    }}
                    onChangeComplete={onChangeComplete}
                    allowSameValues={true}
                />
                <div className="value d-flex justify-content-between">
                    <span className="min">
                        {price.min && formatNumber(price.min)}€
                    </span>
                    <span className="max">
                        {price.min && formatNumber(price.max)}€
                    </span>
                </div>
            </div>
            <div className="item disks">
                <div className="h3">{ranges.disksTitle}</div>
                <InputRange
                    //@ts-ignore
                    min={disks.min}
                    max={disks.max}
                    minValue={ranges.disksMin}
                    maxValue={ranges.disksMax}
                    value={disks}
                    //@ts-ignore
                    onChange={(value) => {
                        if (typeof value === "number") return value;
                        setDisks({
                            min: Math.max(
                                ranges.disksMin,
                                Math.min(ranges.disksMax, value.min),
                            ),
                            max: Math.max(
                                ranges.disksMin,
                                Math.min(ranges.disksMax, value.max),
                            ),
                        });
                    }}
                    onChangeComplete={onChangeComplete}
                    allowSameValues={true}
                />
                <div className="value d-flex justify-content-between">
                    <span className="min">{disks.min}</span>
                    <span className="max">{disks.max}</span>
                </div>
            </div>
            <div className="item disks-volume">
                <div className="h3">{ranges.disksVolumeTitle}</div>
                <InputRange
                    //@ts-ignore
                    min={disksVolume.min}
                    max={disksVolume.max}
                    minValue={ranges.disksVolumeMin}
                    maxValue={ranges.disksVolumeMax}
                    value={disksVolume}
                    //@ts-ignore
                    onChange={(value) => {
                        if (typeof value === "number") return value;
                        setDisksVolume({
                            min: Math.max(
                                ranges.disksVolumeMin,
                                Math.min(ranges.disksVolumeMax, value.min),
                            ),
                            max: Math.max(
                                ranges.disksVolumeMin,
                                Math.min(ranges.disksVolumeMax, value.max),
                            ),
                        });
                    }}
                    allowSameValues={true}
                    onChangeComplete={onChangeComplete}
                />
                <div className="value d-flex justify-content-between">
                    <span className="min">{disksVolume.min} gb</span>
                    <span className="max">{disksVolume.max} gb</span>
                </div>
            </div>
            <div className="item cores">
                <div className="h3">{ranges.coresTitle}</div>
                <InputRange
                    //@ts-ignore
                    min={cores.min}
                    max={cores.max}
                    minValue={ranges.coresMin}
                    maxValue={ranges.coresMax}
                    value={cores}
                    //@ts-ignore
                    onChange={(value) => {
                        if (typeof value === "number") return value;
                        setCores({
                            min: Math.max(
                                ranges.coresMin,
                                Math.min(ranges.coresMax, value.min),
                            ),
                            max: Math.max(
                                ranges.coresMin,
                                Math.min(ranges.coresMax, value.max),
                            ),
                        });
                    }}
                    allowSameValues={true}
                    onChangeComplete={onChangeComplete}
                />
                <div className="value d-flex justify-content-between">
                    <span className="min">{cores.min}</span>
                    <span className="max">{cores.max}</span>
                </div>
            </div>
            <div className="item ram">
                <div className="h3">{ranges.ramTitle}</div>
                <InputRange
                    //@ts-ignore
                    min={ram.min}
                    max={ram.max}
                    minValue={ranges.ramMin}
                    maxValue={ranges.ramMax}
                    value={ram}
                    //@ts-ignore
                    onChange={(value) => {
                        if (typeof value === "number") return value;
                        setRam({
                            min: Math.max(
                                ranges.ramMin,
                                Math.min(ranges.ramMax, value.min),
                            ),
                            max: Math.max(
                                ranges.ramMin,
                                Math.min(ranges.ramMax, value.max),
                            ),
                        });
                    }}
                    allowSameValues={true}
                    onChangeComplete={onChangeComplete}
                />
                <div className="value d-flex justify-content-between">
                    <span className="min">{ram.min} gb</span>
                    <span className="max">{ram.max} gb</span>
                </div>
            </div>
        </>
    );
};

const mapState = (state: { tariffesFilters: ITariffesFiltersInitStore }) => {
    return {
        price: state.tariffesFilters.price,
        disks: state.tariffesFilters.disks,
        disksVolume: state.tariffesFilters.disksVolume,
        cores: state.tariffesFilters.cores,
        ram: state.tariffesFilters.ram,
    };
};
const mapDispatch = {
    setPrice: (value: IMinMax) => ({
        type: "SET_PRICE",
        value,
    }),
    setDisks: (value: IMinMax) => ({
        type: "SET_DISKS",
        value,
    }),
    setDisksVolume: (value: IMinMax) => ({
        type: "SET_DISKS_VOLUME",
        value,
    }),
    setCores: (value: IMinMax) => ({
        type: "SET_CORES",
        value,
    }),
    setRam: (value: IMinMax) => ({
        type: "SET_RAM",
        value,
    }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Ranges);
