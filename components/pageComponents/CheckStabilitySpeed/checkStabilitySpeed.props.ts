import IButton from "./checkStabilitySpeed.interface";

export default interface CheckStabilitySpeedProps {
    checkStabilityBlock: {
        title: string;
        buttons: IButton[];
        downloadTitle: string;
        downloadSpeedTitle: string;
        loadTitle: string;
        loadSpeedTitle: string;
        pingTitle: string;
        pingSpeedTitle: string;
        jitterTitle: string;
        jitterSpeedTitle: string;
        buttonText: string;
    };
}
