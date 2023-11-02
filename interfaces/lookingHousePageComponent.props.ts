import CheckStabilitySpeedProps from "components/pageComponents/CheckStabilitySpeed/checkStabilitySpeed.props";
import ComandsFilesProps from "components/pageComponents/ComandsFiles/comandsFiled.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";

export default interface lookingHousePageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    checkStabilityBlock: CheckStabilitySpeedProps["checkStabilityBlock"];
    comandsFilesBlock: ComandsFilesProps["comandsFilesBlock"];
}
