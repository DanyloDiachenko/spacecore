import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import { StatusUpdateProps } from "components/pageComponents/StatusUpdate/statusUpdate.props";
import SystemsTimeWorkProps from "components/pageComponents/SystemsTimeWork/systemsTimeWork.props";

export default interface UptimeRobotPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        systems_time_work_block: SystemsTimeWorkProps["systemsTimeWorkBlock"];
        status_update_block: StatusUpdateProps["statusUpdateBlock"];
    };
}
