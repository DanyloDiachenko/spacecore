import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Button from "components/UI/Button";
import Tariff from "../../UI/Tariff";
import TariffesCpuProps from "./tariffes.Cpuprops";
import { ITariff } from "components/UI/Tariff/tariff.interface";

const TariffesCpu = ({ tariffesCpuBlock }: TariffesCpuProps): JSX.Element => {
    const [activeCountryCode, setActiveCountryCode] = useState<string>(
        tariffesCpuBlock.countries[0].code,
    );
    const [tariffes, setTariffes] = useState<ITariff[]>([]);

    const router = useRouter();

    const makeQuery = (countryCode: string) => {
        try {
            fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/tariffes-block-items?sort=orderNumber&filters[$or][0][language][$containsi]=${router.locale}&filters[$or][1][language][$null]=true&pagination[pageSize]=1000&filters[tabKey][$eq]=${countryCode}&filters[pagePath][$eq]=contabo`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
                    },
                },
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.data) {
                        setTariffes(data.data);
                    }
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (router.query.country) {
            setActiveCountryCode(router.query.country as string);
            makeQuery(router.query.country as string);
        } else {
            makeQuery(activeCountryCode);
        }
    }, []);

    useEffect(() => {
        makeQuery(activeCountryCode);
    }, [activeCountryCode]);

    return (
        <section className="tariffes-data mt-12">
            <div className="cloud-servers container">
                <h2>{tariffesCpuBlock.title}</h2>
                <div className="buttons">
                    {tariffesCpuBlock.countries.map((country, index) => (
                        <Button
                            onClick={() => setActiveCountryCode(country.code)}
                            key={index}
                            background="white"
                            className={
                                country.code === activeCountryCode
                                    ? "active"
                                    : ""
                            }
                        >
                            <span className="h6">{country.title}</span>
                        </Button>
                    ))}
                </div>
                {tariffes.map((tariff, index) => (
                    <Tariff
                        key={tariff.attributes.id}
                        {...tariff.attributes}
                        tariffTitles={tariffesCpuBlock.tariffTitles}
                        propsId={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default TariffesCpu;
