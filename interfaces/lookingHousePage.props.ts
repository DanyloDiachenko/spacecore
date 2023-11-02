import CheckStabilitySpeedProps from "components/pageComponents/CheckStabilitySpeed/checkStabilitySpeed.props";
import ComandsFilesProps from "components/pageComponents/ComandsFiles/comandsFiled.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";

export default interface lookingHousePageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        check_stability_speed_block: CheckStabilitySpeedProps["checkStabilityBlock"];
        comands_files_block: ComandsFilesProps["comandsFilesBlock"];
    };
}
