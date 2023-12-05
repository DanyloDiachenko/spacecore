import Image from "next/image";
import { useEffect, useState } from "react";

import Trans from "inc/locale/Trans";
import { getUppertime, isUppertimeWorks } from "api/uppertime";
import { dotToAdd } from "./dotToAdd";
import SystemsTimeWorkProps from "./systemsTimeWork.props";
import { renderTitle } from "./renderTitle";
import ITrafic from "./trafic.interface";

const dotsNumber = 18;

const SystemTimeWork = ({
    systemsTimeWorkBlock,
}: SystemsTimeWorkProps): JSX.Element => {
    const [trafic, setTrafic] = useState<ITrafic[]>([]);
    const [lastUpdateTime, setLastUpdateTime] = useState<Date | null>(null);
    const [secLeftToUpdate, setSecLeftToUpdate] = useState<number>(0);
    const [isAllWorks, setIsAllWorks] = useState<boolean | null>(null);

    useEffect(() => {
        setTimeout(() => {
            isUppertimeWorks().then((isWorks) => {
                isWorks !== null && setIsAllWorks(isWorks);
            });
            returnTimeNextUpdate();
        }, 1000);
    }, [secLeftToUpdate]);

    const returnTimeNextUpdate = () => {
        if (secLeftToUpdate > 0) {
            setSecLeftToUpdate(secLeftToUpdate - 1);
        } else {
            setSecLeftToUpdate(60);
            getUppertimeHandler();
            setLastUpdateTime(new Date());
        }
    };

    const getUppertimeHandler = (): void => {
        getUppertime()
            .then((uppertime) => {
                const { monitors } = uppertime;
                if (!monitors) {
                    return;
                }

                const desiredOrder: number[] = [];
                systemsTimeWorkBlock.groups.forEach((group) => {
                    desiredOrder.push(...group.ids);
                });

                const uppertimes = monitors.map((uptime: ITrafic) => {
                    const durationSum = uptime.logs
                        .map((log) => log.duration)
                        .reduce(
                            (accumulator: number, current: number) =>
                                accumulator + current,
                            0,
                        );
                    let uptimePercent = 0;
                    let dots: number[] = [];

                    uptime.logs.forEach((log: any) => {
                        if (log.type === 2) {
                            uptimePercent += log.duration / durationSum;
                        }
                        const numberDot = Math.ceil(
                            (log.duration / durationSum) * dotsNumber,
                        );
                        dots = [
                            ...dots,
                            ...Array(numberDot).fill(dotToAdd(log.type)),
                        ];
                    });
                    uptimePercent *= 100;

                    dots = dots.slice(-dotsNumber);
                    return { ...uptime, uptimePercent, dots };
                });

                const sortedUppertimes = uppertimes.sort(
                    (uptimeA: ITrafic, uptimeB: ITrafic) => {
                        const indexA = desiredOrder.indexOf(uptimeA.id);
                        const indexB = desiredOrder.indexOf(uptimeB.id);

                        if (indexA !== -1 && indexB !== -1) {
                            return indexA - indexB;
                        }

                        if (indexA !== -1) {
                            return -1;
                        }

                        if (indexB !== -1) {
                            return 1;
                        }

                        return 0;
                    },
                );

                setTrafic(sortedUppertimes);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUppertimeHandler();

        isUppertimeWorks().then((isWorks) => {
            setIsAllWorks(isWorks);
        });
    }, []);

    const addLeadingZero = (number: number): string => {
        if (typeof number === "number" && !isNaN(number)) {
            return number < 10 ? "0" + number.toString() : number.toString();
        } else {
            return "";
        }
    };

    return (
        <section className="systems mt-12">
            <div className="container top-content">
                <div className="left-col">
                    <div className="play">
                        {isAllWorks != null ? (
                            <Image
                                tabIndex={0}
                                src={
                                    isAllWorks
                                        ? "/images/icons/circle.svg"
                                        : "/images/icons/circle-red.svg"
                                }
                                alt={systemsTimeWorkBlock.title + "photo"}
                                width="100"
                                height="100"
                                className="img-play"
                                loading="eager"
                            />
                        ) : (
                            ""
                        )}
                        <div
                            className={`border-first ${
                                isAllWorks ? "" : "red"
                            }`}
                        ></div>
                        <div
                            className={`border-second ${
                                isAllWorks ? "" : "red"
                            }`}
                        ></div>
                    </div>
                    <>
                        {isAllWorks != null
                            ? renderTitle(
                                  isAllWorks
                                      ? systemsTimeWorkBlock.title
                                      : systemsTimeWorkBlock.titleNotWorks,
                              )
                            : ""}
                    </>
                </div>
                <div className="right-col">
                    <div>
                        <div className="h3">
                            {systemsTimeWorkBlock.statusTitle}
                        </div>
                        <p>
                            {systemsTimeWorkBlock.lastUpdate}{" "}
                            {lastUpdateTime &&
                                addLeadingZero(lastUpdateTime.getHours())}
                            :
                            {lastUpdateTime &&
                                addLeadingZero(lastUpdateTime.getMinutes())}
                            :
                            {lastUpdateTime &&
                                addLeadingZero(lastUpdateTime.getSeconds())}
                        </p>
                        <p>
                            {systemsTimeWorkBlock.nextUpdate} {secLeftToUpdate}{" "}
                            <Trans string="сек" />.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-large work-time">
                <div className="container content">
                    <div className="top">
                        <div className="h2-sm">
                            {systemsTimeWorkBlock.workTimeTitle}
                        </div>
                        <p>{systemsTimeWorkBlock.workTimeTitleAdditional}</p>
                    </div>
                    {systemsTimeWorkBlock.groups.map((group, index) => (
                        <div key={index}>
                            <div className="top mt-4">
                                <div className="h3-lg">{group.title}</div>
                            </div>
                            {trafic &&
                                trafic
                                    .filter((traf) =>
                                        group.ids.includes(traf.id),
                                    )
                                    .map((traf: ITrafic, index) => (
                                        <div className="item" key={index}>
                                            <p className="title">
                                                {traf.friendly_name}
                                            </p>
                                            <div className="main-col">
                                                <div className="procent">
                                                    {traf.uptimePercent.toFixed(
                                                        2,
                                                    )}
                                                    %
                                                </div>
                                                <span className="icons">
                                                    {traf.dots.map(
                                                        (
                                                            icon: JSX.Element,
                                                            index: number,
                                                        ) => (
                                                            <span key={index}>
                                                                {icon}
                                                            </span>
                                                        ),
                                                    )}
                                                </span>
                                            </div>
                                            <div className="right-col">
                                                <div className="play small">
                                                    <Image
                                                        src={
                                                            traf.status === 2
                                                                ? "/images/small/status.svg"
                                                                : "/images/small/status-red.svg"
                                                        }
                                                        alt="circle"
                                                        width="7"
                                                        height="7"
                                                    />
                                                    <div
                                                        className={`border-first ${
                                                            traf.status == 2
                                                                ? ""
                                                                : "red"
                                                        }`}
                                                    ></div>
                                                    <div
                                                        className={`border-second ${
                                                            traf.status == 2
                                                                ? ""
                                                                : "red"
                                                        }`}
                                                    ></div>
                                                </div>
                                                <span
                                                    className={
                                                        traf.status == 2
                                                            ? ""
                                                            : "red-color"
                                                    }
                                                >
                                                    {traf.status == 2
                                                        ? systemsTimeWorkBlock.worksTitle
                                                        : systemsTimeWorkBlock.notWorksTitle}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SystemTimeWork;
