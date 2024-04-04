import MainPageComponent from "components/pageComponents/MainPageComponent";
import CheckStabilitySpeed from "components/pageComponents/CheckStabilitySpeed";
import ComandsFiles from "components/pageComponents/ComandsFiles";
import lookingHousePageComponentProps from "interfaces/lookingHousePageComponent.props";

const LookingHouse = ({
    mainBlock,
    checkStabilityBlock,
    comandsFilesBlock,
}: lookingHousePageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #5F5CDB 0%, #42E8E0 100%)"
                mainBlock={mainBlock}
            />
            <CheckStabilitySpeed checkStabilityBlock={checkStabilityBlock} />
            <ComandsFiles comandsFilesBlock={comandsFilesBlock} />
        </>
    );
};

export default LookingHouse;
