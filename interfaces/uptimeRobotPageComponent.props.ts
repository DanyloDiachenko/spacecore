import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import { StatusUpdateProps } from "components/pageComponents/StatusUpdate/statusUpdate.props";
import SystemsTimeWorkProps from "components/pageComponents/SystemsTimeWork/systemsTimeWork.props";

export default interface UptimeRobotPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    systemsTimeWorkBlock: SystemsTimeWorkProps["systemsTimeWorkBlock"];
    statusUpdateBlock: StatusUpdateProps["statusUpdateBlock"];
}
