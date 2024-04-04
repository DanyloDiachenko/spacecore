import { GetServerSideProps } from "next";

import LookingHouse from "components/pages/LookingHouse";
import lookingHousePageProps from "interfaces/lookingHousePage.props";

const LookingHousePage = ({ content }: lookingHousePageProps): JSX.Element => {
    const { main_block, check_stability_speed_block, comands_files_block } =
        content;

    return (
        <LookingHouse
            mainBlock={main_block}
            checkStabilityBlock={check_stability_speed_block}
            comandsFilesBlock={comands_files_block}
        />
    );
};

export default LookingHousePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/looking-house.json`);

    return {
        props: {
            content,
        },
    };
};
