import { GetServerSideProps } from "next";

import UptimeRobot from "components/pages/UptimeRobot";
import UptimeRobotPageProps from "interfaces/uptimeRobotPage.props";

const UptimeRobotPage = ({ content }: UptimeRobotPageProps): JSX.Element => {
    const { main_block, systems_time_work_block, status_update_block } =
        content;

    return (
        <UptimeRobot
            mainBlock={main_block}
            systemsTimeWorkBlock={systems_time_work_block}
            statusUpdateBlock={status_update_block}
        />
    );
};

export default UptimeRobotPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const content = require(`data/${
        context.locale === "default" ? "ru" : context.locale
    }/uptime.json`);

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/uppertime-reviews?locale=${context.locale}&sort=orderNumber`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer " + process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
            },
        },
    );
    const resJson = await res.json();

    if (resJson.data) {
        content.status_update_block.updates = resJson.data.map(
            (item: { attributes: any }) => {
                return {
                    ...item.attributes,
                };
            },
        );
    }

    return {
        props: {
            content,
        },
    };
};
