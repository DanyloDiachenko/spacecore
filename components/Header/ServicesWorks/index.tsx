import Link from "next/link";
import { useState, useEffect } from "react";

import { isUppertimeWorks } from "api/uppertime";
import ServicesWorksProps from "./servicesWorks.props";

const ServicesWorks = ({ header_block }: ServicesWorksProps): JSX.Element => {
    const [isAllWorks, setIsAllWorks] = useState<boolean | null>(null);

    useEffect(() => {
        isUppertimeWorks().then((isWorks) => {
            setIsAllWorks(isWorks);
        });
    }, []);

    return (
        <Link
            href={
                header_block && header_block.servicesLink
                    ? header_block.servicesLink
                    : "https://vm.spacecore.online/"
            }
            className="services"
        >
            {isAllWorks !== null && isAllWorks !== undefined ? (
                <>
                    {isAllWorks ? (
                        <>
                            <div className="green-dot">
                                <div className="border-first"></div>
                                <div className="border-second"></div>
                            </div>

                            <div className="red-color">
                                {header_block && header_block.servicesWorkTitle}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="red-dot">
                                <div className="border-first"></div>
                                <div className="border-second"></div>
                            </div>
                            <div>
                                {header_block &&
                                    header_block.servicesNotWorkTitle}
                            </div>
                        </>
                    )}
                </>
            ) : (
                ""
            )}
        </Link>
    );
};

export default ServicesWorks;
