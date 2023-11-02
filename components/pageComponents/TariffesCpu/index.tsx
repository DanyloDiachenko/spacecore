import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactSwitch from "react-switch";

import Button from "components/UI/Button";
import Tariff from "../../UI/Tariff";
import TariffesCpuProps from "./tariffes.Cpuprops";
import { ITariff } from "components/UI/Tariff/tariff.interface";

const TariffesCpu = ({ tariffesCpuBlock }: TariffesCpuProps): JSX.Element => {
    const [ipVersion, setIpVersion] =
        useState<boolean>(false); /* false - ipV4, true - ipV6 */
    const [cpu, setCpu] = useState<"standard" | "dedicated">("standard");
    const [tariffes, setTariffes] = useState<ITariff[]>([]);

    const router = useRouter();
    const { pathname } = router;

    const segments = pathname.split("/");
    const lastPath = segments[segments.length - 1];

    const pagePath = `filters[pagePath][$eq]=${lastPath}`;

    const makeQuery = () => {
        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/tariffes-block-items?sort=orderNumber&pagination[pageSize]=1000&filters[tabKey][$eq]=${cpu}&${pagePath}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
                },
            },
        )
            .then((res) => res.json())
            .then((data) => {
                if (ipVersion) {
                    const tariffes = data.data.map((tariff: any) => {
                        return {
                            ...tariff,
                            attributes: {
                                ...tariff.attributes,
                                price: tariff.attributes.ipv6Price
                                    ? tariff.attributes.price +
                                      tariff.attributes.ipv6Price
                                    : tariff.attributes.price,
                            },
                        };
                    });
                    setTariffes(tariffes);
                    return;
                }

                setTariffes(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        makeQuery();
    }, [cpu, ipVersion]);

    return (
        <section className="tariffes-data mt-12">
            <div className="cloud-servers container">
                <h2>{tariffesCpuBlock.title}</h2>
                <div className="filters">
                    <div className="buttons">
                        <Button
                            onClick={() => setCpu("standard")}
                            className={cpu !== "standard" ? "btn-inactive" : ""}
                            background="white"
                        >
                            <span className="h6">
                                {tariffesCpuBlock.standardVcpuText}
                            </span>
                        </Button>
                        <Button
                            onClick={() => setCpu("dedicated")}
                            className={
                                cpu !== "dedicated" ? "btn-inactive" : ""
                            }
                            background="white"
                        >
                            <span className="h6">
                                {tariffesCpuBlock.dedicatedVcpuText}
                            </span>
                        </Button>
                    </div>
                    <div className="ip-versions">
                        <p
                            className={`version ${
                                !ipVersion ? "version-active" : ""
                            }`}
                        >
                            {tariffesCpuBlock.ipVersion4Text}
                        </p>
                        <ReactSwitch
                            id="cpu-version-switcher"
                            uncheckedIcon={false}
                            checkedIcon={false}
                            className="switcher"
                            width={60}
                            height={40}
                            onColor="#f3ebfe"
                            offHandleColor="#8A39F8"
                            onHandleColor="#8A39F8"
                            checked={ipVersion}
                            onChange={() => setIpVersion(!ipVersion)}
                        />
                        <p
                            className={`version ${
                                ipVersion ? "version-active" : ""
                            }`}
                        >
                            {tariffesCpuBlock.ipVersion6Text}
                        </p>
                    </div>
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
