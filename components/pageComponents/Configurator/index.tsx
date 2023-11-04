import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import Trans from "inc/locale/Trans";
import Button from "components/UI/Button";
import { IMinMax } from "../TariffesFilters/Ranges/minMax.interface";
import ConfiguratorProps from "./configurator.props";

const Configurator = ({
    configuratorBlock,
}: ConfiguratorProps): JSX.Element => {
    const [storageCapacity, setStorageCapacity] = useState<IMinMax>({
        min: configuratorBlock.minVolume,
        max: configuratorBlock.minVolume,
    });
    const [storagePrice, setStoragePrice] = useState(storageCapacity.max * 3);
    const [changedValue, setChangedValue] = useState("max");

    const router: NextRouter = useRouter();

    useEffect(() => {
        setStoragePrice(storageCapacity.max * configuratorBlock.pricePerGB);
    }, [storageCapacity.max]);

    useEffect(() => {
        const storageCapacityInput = document.querySelector('[role="switch"]');
        storageCapacityInput?.setAttribute(
            "aria-label",
            "Storage capacity changer",
        );
    }, []);

    const RightColumnConfigurator = (): JSX.Element => {
        return (
            <div className="right-col">
                <div className="top-info">
                    <div className="h3">{configuratorBlock.choosedTitle}</div>
                    <div className="price">
                        <span className="value">
                            €{storagePrice.toFixed(2)}
                        </span>
                        <p>
                            / <Trans string="месяц" />
                        </p>
                    </div>
                </div>
                <div className="bottom-info">
                    <p className="volume">
                        <b>{storageCapacity.max} GB</b>
                        {configuratorBlock.volumeAdditionaltitle}
                    </p>
                    <p className="description">
                        {configuratorBlock.description}
                    </p>
                </div>
                <Button
                    onClick={() => router.push(configuratorBlock.buttonLink)}
                    background="rose"
                >
                    <span className="h6">{configuratorBlock.buttonText}</span>
                </Button>
            </div>
        );
    };

    return (
        <section className="mt-12 container backup-store">
            <h2>{configuratorBlock.title}</h2>
            <div className="content">
                <div className="left-col">
                    <Image
                        src={configuratorBlock.imgSrc}
                        alt={configuratorBlock.title + "photo"}
                        width="80"
                        height="80"
                    />
                    <div
                        className={`item disks-volume ${
                            changedValue == "max"
                                ? "changed-max"
                                : "changed-min"
                        }`}
                    >
                        <div className="top-info">
                            <span className="h3">
                                {configuratorBlock.volumeTitle}
                            </span>
                            <span className="choosed">
                                <span className="text">
                                    {configuratorBlock.choosedAdditionalTitle}
                                </span>{" "}
                                {storageCapacity.max} GB
                            </span>
                        </div>
                        <InputRange
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            min={storageCapacity.min}
                            max={storageCapacity.max}
                            minValue={configuratorBlock.minVolume}
                            maxValue={configuratorBlock.maxVolume}
                            value={storageCapacity}
                            step={10}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            onChange={(value) => {
                                if (typeof value === "number") return;
                                if (value.max === storageCapacity.max) {
                                    value.max = value.min;
                                    value.min = configuratorBlock.minVolume;
                                    setChangedValue("min");
                                } else {
                                    setChangedValue("max");
                                }
                                setStorageCapacity(value);
                            }}
                            allowSameValues={true}
                        />
                        <div className="value d-flex justify-content-between">
                            <p className="min">10 GB</p>
                            <p className="max">3500 GB</p>
                        </div>
                    </div>
                </div>
                <RightColumnConfigurator />
            </div>
        </section>
    );
};

export default Configurator;
