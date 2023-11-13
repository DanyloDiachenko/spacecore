import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { ITariff } from "components/UI/Tariff/tariff.interface";
import MainInfo from "components/pageComponents/MainInfo";
import MainPageComponent from "components/pageComponents/MainPageComponent";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";
import OperationSystems from "components/pageComponents/OperationSystems";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import TariffesFilters from "components/pageComponents/TariffesFilters";
import TariffesMain from "components/pageComponents/TariffesMain";
import DedicatedServersNoInstallPageComponentProps from "interfaces/dedicatedServersNoInstallPageComponent.props";
import { ITariffesFiltersInitStore } from "store/tariffesFilters/initStore";
import { IMinMax } from "components/pageComponents/TariffesFilters/Ranges/minMax.interface";

const DedicatedServersNoInstall = ({
    mainBlock,
    tariffesBlock,
    tariffesFiltersBlock,
    operationSystemsBlock,
    mainInfoBlock,
    notFindedSearchedBlock,
    faqBlock,
    supportBlock,
    subscribeTelegramBlock,

    setPrice,
    setCores,
    setDisks,
    setDisksVolume,
    setRam,

    price,
    disks,
    disksVolume,
    ram,
    cores,
}: DedicatedServersNoInstallPageComponentProps): JSX.Element => {
    const [cpuCheckboxStates, setCpuCheckboxStates] = useState<{
        [key: string]: boolean;
    }>(
        tariffesFiltersBlock.checkboxes[0].filterTitles.reduce(
            (acc, cur) => {
                acc[cur.key] = false;
                return acc;
            },
            {} as { [key: string]: boolean },
        ),
    );

    const [diskCheckboxStates, setDiskCheckboxStates] = useState<{
        [key: string]: boolean;
    }>(
        tariffesFiltersBlock.checkboxes[1].filterTitles.reduce(
            (acc, cur) => {
                acc[cur.key] = false;
                return acc;
            },
            {} as { [key: string]: boolean },
        ),
    );
    const [tariffes, setTariffes] = useState<ITariff[]>([]);

    const handleCpuCheckboxChange = (key: string) => {
        setCpuCheckboxStates((prevStates) => ({
            ...prevStates,
            [key]: !prevStates[key],
        }));
    };

    const handleDiskCheckboxChange = (key: string) => {
        setDiskCheckboxStates((prevStates) => ({
            ...prevStates,
            [key]: !prevStates[key],
        }));
    };

    const checkedCheckboxes = (checkboxes: { [key: string]: boolean }) => {
        return Object.keys(checkboxes).filter((key) => checkboxes[key]);
    };

    const [countriesString, setCountriesString] = useState<string[]>([]);

    const changeCountries = (countries: string[]) => {
        setCountriesString(countries);
    };

    const priceQuery = `filters[price][$lte]=${price.max}&filters[price][$gte]=${price.min}`;
    const disksQuery = `&filters[disk][$lte]=${disks.max}&filters[disk][$gte]=${disks.min}`;
    const disksVolumeQuery = `&filters[disksVolume][$lte]=${disksVolume.max}&filters[disksVolume][$gte]=${disksVolume.min}`;
    const ramQuery = `&filters[ram][$lte]=${ram.max}&filters[ram][$gte]=${ram.min}`;
    const coresQuery = `&filters[cores][$lte]=${cores.max}&filters[cores][$gte]=${cores.min}`;
    const countryQuery = (): string => {
        const checkedCountries = [...countriesString];

        if (checkedCountries.length) {
            let queryString = "";
            checkedCountries.map((value, i) => {
                queryString += `&filters[$and][1][$or][${i}][countryKey][$containsi]=${value}`;
            });
            return queryString;
        } else {
            return ``;
        }
    };

    const cpuQuery = (): string => {
        const checkedCpuKeys = checkedCheckboxes(cpuCheckboxStates);

        if (checkedCpuKeys.length) {
            const cpuValues = checkedCpuKeys.map(
                (key) => `${key.toLocaleUpperCase()}`,
            );

            let queryString = "";
            cpuValues.map((value, i) => {
                queryString += `&filters[$or][${
                    i + 1
                }][cpu][$containsi]=${value}`;
            });
            return queryString;
        } else {
            return ``;
        }
    };
    const memoryQuery = (): string => {
        const checkedDiskKeys = checkedCheckboxes(diskCheckboxStates);
        if (checkedDiskKeys.length) {
            const disksValues = checkedDiskKeys.map(
                (key) => `${key.toLocaleUpperCase()}`,
            );

            let queryString = "";
            disksValues.map((value, i) => {
                queryString += `&filters[$or][${
                    i + 1
                }][memory][$containsi]=${value}`;
            });
            return queryString;
        } else {
            return ``;
        }
    };
    const router = useRouter();
    const { pathname } = router;

    const segments = pathname.split("/");
    const lastPath = segments[segments.length - 1];

    const pagePath = `&filters[pagePath][$contains]=${lastPath}`;

    const makeQuery = async (): Promise<void> => {
        try {
            const res = await fetch(
                `${
                    process.env.NEXT_PUBLIC_API_URL
                }/tariffes-block-items?sort=orderNumber&pagination[pageSize]=1000&${
                    priceQuery +
                    disksQuery +
                    disksVolumeQuery +
                    ramQuery +
                    pagePath +
                    coresQuery +
                    countryQuery() +
                    cpuQuery() +
                    memoryQuery()
                }`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
                    },
                },
            );
            const resJsoned = await res.json();
            const data = await resJsoned;

            setTariffes(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setPrice({
            min: tariffesFiltersBlock.ranges.priceMin,
            max: tariffesFiltersBlock.ranges.priceMax,
        });
        setDisks({
            min: tariffesFiltersBlock.ranges.disksMin,
            max: tariffesFiltersBlock.ranges.disksMax,
        });
        setDisksVolume({
            min: tariffesFiltersBlock.ranges.disksVolumeMin,
            max: tariffesFiltersBlock.ranges.disksVolumeMax,
        });
        setRam({
            min: tariffesFiltersBlock.ranges.ramMin,
            max: tariffesFiltersBlock.ranges.ramMax,
        });
        setCores({
            min: tariffesFiltersBlock.ranges.coresMin,
            max: tariffesFiltersBlock.ranges.coresMax,
        });

        makeQuery();
    }, []);

    useEffect(() => {
        makeQuery();
    }, []);

    useEffect(() => {
        makeQuery();
    }, [
        /* price,
        disks,
        ram,
        cores,
        disksVolume, */
        cpuCheckboxStates,
        diskCheckboxStates,
        countriesString,
    ]);

    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #081E5E 49.48%, #01012E 100%)"
                mainBlock={mainBlock}
            />
            <TariffesFilters
                tariffesFiltersBlock={tariffesFiltersBlock}
                cpuCheckboxStates={cpuCheckboxStates}
                onCpuCheckboxChange={handleCpuCheckboxChange}
                diskCheckboxStates={diskCheckboxStates}
                onDiskCheckboxChange={handleDiskCheckboxChange}
                onChangeComplete={makeQuery}
                onCountryClick={changeCountries}
                isTelegramBanner={true}
                subscribeTelegramBlock={subscribeTelegramBlock}
            />
            <TariffesMain tariffesContent={tariffes} tariffes={tariffesBlock} />
            <OperationSystems operationSystemsBlock={operationSystemsBlock} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedSearchedBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
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

export default connector(DedicatedServersNoInstall);
