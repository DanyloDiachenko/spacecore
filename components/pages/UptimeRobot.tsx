import MainPageComponent from "components/pageComponents/MainPageComponent";
import SystemTimeWork from "components/pageComponents/SystemsTimeWork";
import StatusUpdate from "components/pageComponents/StatusUpdate";
import UptimeRobotPageComponentProps from "interfaces/uptimeRobotPageComponent.props";

const UptimeRobot = ({
    mainBlock,
    systemsTimeWorkBlock,
    statusUpdateBlock,
}: UptimeRobotPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #8A39F8 0%, #7160C8 100%)"
                mainBlock={mainBlock}
            />
            <SystemTimeWork systemsTimeWorkBlock={systemsTimeWorkBlock} />
            <StatusUpdate statusUpdateBlock={statusUpdateBlock} />
        </>
    );
};

export default UptimeRobot;
