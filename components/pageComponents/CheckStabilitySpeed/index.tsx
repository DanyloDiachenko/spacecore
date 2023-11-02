import { useState, useEffect } from "react";

import Button from "components/UI/Button";
import IButton from "./checkStabilitySpeed.interface";
import CheckStabilitySpeedProps from "./checkStabilitySpeed.props";

const CheckStabilitySpeed = ({
    checkStabilityBlock,
}: CheckStabilitySpeedProps): JSX.Element => {
    const [placement, setPlacement] = useState<IButton>(
        checkStabilityBlock.buttons[0],
    );
    const [fillProcent, setFillProcent] = useState<number>(0);

    const setPlacementHandler = (
        btnPlacementKeyClicked: IButton["titleKey"],
    ): void => {
        const finded = checkStabilityBlock.buttons.find(
            (btn) => btn.titleKey === btnPlacementKeyClicked,
        );
        finded && setPlacement(finded);
    };

    useEffect(() => {
        setFillProcent(0);
    }, [placement]);

    const startMeasure = (): (() => void) => {
        setFillProcent(0);
        const interval = setInterval(() => {
            setFillProcent((prevProcent) => {
                const newProcent = prevProcent + 1;
                if (newProcent === 150) {
                    clearInterval(interval);
                }
                return newProcent;
            });
        }, 0.5);

        return () => {
            clearInterval(interval);
        };
    };

    return (
        <>
            <section className="container mt-12 check-stability-speed">
                <h2>{checkStabilityBlock.title}</h2>
                <div className="buttons">
                    {checkStabilityBlock.buttons.map((button, index) => (
                        <Button
                            className={
                                placement.title === button.title ? "active" : ""
                            }
                            key={index}
                            background="white"
                            onClick={() => setPlacementHandler(button.titleKey)}
                        >
                            <span className="h6">{button.title}</span>
                        </Button>
                    ))}
                </div>
            </section>
            <section className="container-large speed-test-content">
                <div className="container content">
                    <div className="item">
                        <div className="h3">
                            {checkStabilityBlock.downloadTitle}
                        </div>
                        <svg
                            className="speed-svg"
                            width="300"
                            height="150"
                            viewBox="0 0 300 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="300"
                                height="150"
                            >
                                <rect
                                    width="300"
                                    height="150"
                                    transform="matrix(1 0 0 -1 0 150)"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask0_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="white"
                                    stroke-width="15"
                                />
                            </g>
                            <mask
                                id="mask1_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                            >
                                <rect
                                    width={fillProcent}
                                    height="150"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask1_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="#FD7081"
                                    stroke-width="15"
                                />
                            </g>
                        </svg>
                        <div className="speed-content">
                            <div className="title">{fillProcent}</div>
                            <p className="description">
                                {checkStabilityBlock.downloadSpeedTitle}
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="h3">
                            {checkStabilityBlock.loadTitle}
                        </div>
                        <svg
                            className="speed-svg"
                            width="300"
                            height="150"
                            viewBox="0 0 300 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="300"
                                height="150"
                            >
                                <rect
                                    width="300"
                                    height="150"
                                    transform="matrix(1 0 0 -1 0 150)"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask0_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="white"
                                    stroke-width="15"
                                />
                            </g>
                            <mask
                                id="mask1_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                            >
                                <rect
                                    width={fillProcent}
                                    height="150"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask1_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="#FD7081"
                                    stroke-width="15"
                                />
                            </g>
                        </svg>
                        <div className="speed-content">
                            <div className="title">{fillProcent}</div>
                            <p className="description">
                                {checkStabilityBlock.loadSpeedTitle}
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="h3">
                            {checkStabilityBlock.pingTitle}
                        </div>
                        <svg
                            className="speed-svg"
                            width="300"
                            height="150"
                            viewBox="0 0 300 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="300"
                                height="150"
                            >
                                <rect
                                    width="300"
                                    height="150"
                                    transform="matrix(1 0 0 -1 0 150)"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask0_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="white"
                                    stroke-width="15"
                                />
                            </g>
                            <mask
                                id="mask1_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                            >
                                <rect
                                    width={fillProcent}
                                    height="150"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask1_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="#FD7081"
                                    stroke-width="15"
                                />
                            </g>
                        </svg>
                        <div className="speed-content">
                            <div className="title">{fillProcent}</div>
                            <p className="description">
                                {checkStabilityBlock.loadSpeedTitle}
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="h3">
                            {checkStabilityBlock.jitterTitle}
                        </div>
                        <svg
                            className="speed-svg"
                            width="300"
                            height="150"
                            viewBox="0 0 300 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="300"
                                height="150"
                            >
                                <rect
                                    width="300"
                                    height="150"
                                    transform="matrix(1 0 0 -1 0 150)"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask0_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="white"
                                    stroke-width="15"
                                />
                            </g>
                            <mask
                                id="mask1_502_65451"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                            >
                                <rect
                                    width={fillProcent}
                                    height="150"
                                    fill="#D9D9D9"
                                />
                            </mask>
                            <g mask="url(#mask1_502_65451)">
                                <circle
                                    cx="150"
                                    cy="150"
                                    r="142.5"
                                    stroke="#FD7081"
                                    stroke-width="15"
                                />
                            </g>
                        </svg>
                        <div className="speed-content">
                            <div className="title">{fillProcent}</div>
                            <p className="description">
                                {checkStabilityBlock.jitterSpeedTitle}
                            </p>
                        </div>
                    </div>
                </div>
                <Button background="rose" onClick={startMeasure}>
                    <span className="h6">{checkStabilityBlock.buttonText}</span>
                </Button>
            </section>
        </>
    );
};

export default CheckStabilitySpeed;
