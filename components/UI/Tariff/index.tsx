import { useRouter, NextRouter } from "next/router";

import Trans from "inc/locale/Trans";
import Button from "components/UI/Button";
import TariffProps from "./tariff.props";
import { connect } from "react-redux";
import { ITariffesFiltersInitStore } from "store/tariffesFilters/initStore";
// import Tooltip from "../Tooltip";
import { Tooltip } from "react-tooltip";

const Tariff = ({
    /*  id, */
    title,
    countryKey,
    core,
    antiDdos,
    cores,
    coresTitle,
    ram,
    ramTitle,
    disk,
    disksVolume,
    diskTitle,
    channel,
    channelTitle,
    price,
    instalationPrice,
    discountProcent,
    /* discountNumber, */
    buttonLink,
    link1month,
    link3month,
    link6month,
    link12month,

    tariffTitles,
    period,
}: TariffProps): JSX.Element => {
    const router: NextRouter = useRouter();

    const { pathname } = router;

    const segments = pathname.split("/");
    const lastPath = segments[segments.length - 1];

    const tariffesFiltersBlock = require("../../../data/" +
        router.locale +
        "/" +
        lastPath +
        ".json");

    const returnPrice = () => {
        if (period === 1 && discountProcent) {
            return ((price * period * Number(discountProcent)) / 100).toFixed(
                2,
            );
        }
        if (period === 3) {
            return (price * 3 - price * 0.09).toFixed(2);
        }
        if (period === 6) {
            return (price * 6 - price * 0.36).toFixed(2);
        }
        if (period === 12) {
            return (price * 12 - price * 1.44).toFixed(2);
        }

        return (price * period).toFixed(2);
    };

    const returnDiscountTitle = () => {
        if (period === 1) {
            return discountProcent + "%";
        }
        if (period === 3) {
            return "3%";
        }
        if (period === 6) {
            return "6%";
        }
        if (period === 12) {
            return "12%";
        }

        return discountProcent + "%";
    };

    const returnPeriodTitle = () => {
        if (period === 1) {
            return "1 месяц";
        } else if (period === 3) {
            return "3 месяца";
        } else if (period === 6) {
            return "6 месяцев";
        } else if (period === 12) {
            return "12 месяцев";
        }

        return period + " месяцев";
    };

    return (
        <div className="item container-large">
            <div className="container container-wrapper">
                <div>
                    <div className="title-countries">
                        <div className="title">{title}</div>
                        <div className="title-sm countries">
                            {tariffTitles.locationTitle}:
                            {tariffesFiltersBlock &&
                            tariffesFiltersBlock.tariffes_filters_block &&
                            tariffesFiltersBlock.tariffes_filters_block
                                .countries &&
                            tariffesFiltersBlock.tariffes_filters_block
                                .countries.countries ? (
                                <>
                                    {countryKey
                                        .split(",")
                                        .map((oneCountryKey) => (
                                            <>
                                                <img
                                                    src={
                                                        tariffesFiltersBlock.tariffes_filters_block.countries.countries.find(
                                                            (country: any) =>
                                                                country.key ===
                                                                oneCountryKey,
                                                        ).imgSrc
                                                    }
                                                    alt={
                                                        tariffesFiltersBlock.tariffes_filters_block.countries.countries.find(
                                                            (country: any) =>
                                                                country.key ===
                                                                oneCountryKey,
                                                        ).title
                                                    }
                                                    data-tooltip-id="country"
                                                    data-tooltip-content={
                                                        tariffesFiltersBlock.tariffes_filters_block.countries.countries.find(
                                                            (country: any) =>
                                                                country.key ===
                                                                oneCountryKey,
                                                        ).title
                                                    }
                                                />
                                            </>
                                        ))}
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="title-sm">
                            {tariffTitles.coreTitle}:
                        </div>
                        <span>{core}</span>
                    </div>
                    <div className="info-item">
                        <div className="title-sm">
                            {tariffTitles.antiDdosTitle}:
                        </div>
                        <span>{antiDdos}</span>
                    </div>
                </div>
                <div className="main-content">
                    <div className="item core">
                        <div className="h4">{tariffTitles.coreTitle}</div>
                        <p>{core}</p>
                    </div>
                    <div className="item">
                        <div className="h4">{tariffTitles.coresTitle}</div>
                        <p>
                            {cores} {coresTitle}
                        </p>
                    </div>
                    <div className="item">
                        <div className="h4">{tariffTitles.ramTitle}</div>
                        <p>
                            {ram} {ramTitle}
                        </p>
                    </div>
                    <div className="item">
                        <div className="h4">{tariffTitles.diskTitle}</div>
                        <p>
                            {disk} x {disksVolume} {diskTitle}
                        </p>
                    </div>
                    <div className="item">
                        <div className="h4">{tariffTitles.channelTitle}</div>
                        <p>
                            {channel} {channelTitle}
                        </p>
                    </div>
                </div>
                <div className="price">
                    <div className="price-discount">
                        <div className="discount">
                            <span className="procent">
                                -{returnDiscountTitle()}
                            </span>
                            <span className="value">
                                €{(price * period).toFixed(2)}
                            </span>
                        </div>
                        <div
                            className="price-text"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            <div className="h3">€{returnPrice()}</div>
                            <p className="per-month">
                                / <Trans string={returnPeriodTitle()} />
                            </p>
                        </div>

                        {instalationPrice ? (
                            <div className="price-installation price-text">
                                €{instalationPrice} /{" "}
                                <Trans string="установка" />
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <Button
                        onClick={() => {
                            if (period === 1 && link1month) {
                                router.push(link1month);
                            } else if (period === 3 && link3month) {
                                router.push(link3month);
                            } else if (period === 6 && link6month) {
                                router.push(link6month);
                            } else if (period === 12 && link12month) {
                                router.push(link12month);
                            } else {
                                router.push(buttonLink);
                            }
                            return false;
                        }}
                        background="rose"
                    >
                        <span className="h6">{tariffTitles.buttonText}</span>
                    </Button>
                </div>
            </div>
            <Tooltip
                id="country"
                style={{ backgroundColor: "black", color: "white" }}
            />
        </div>
    );
};
const mapState = (state: { tariffesFilters: ITariffesFiltersInitStore }) => {
    return {
        period: state.tariffesFilters.period,
    };
};
const mapDispatch = {};
const connector = connect(mapState, mapDispatch);

export default connector(Tariff);
