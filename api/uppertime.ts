export const getUppertime = () => {
    return fetch(`/api/uppertime`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((e) => {
            return e;
        });
};

export const isUppertimeWorks = async (locale: string = "ru") => {
    // const router = useRouter();
    const content = require(`data/${
        locale === "default" ? "ru" : locale
    }/uptime.json`);
    let ids: number[] = [];
    content.systems_time_work_block.groups.map(
        (group: any) => (ids = [...ids, ...group.ids]),
    );

    const uppertimes = await fetch(`/api/uppertime`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((e) => {
            return e;
        });

    if (uppertimes.monitors) {
        const { monitors } = uppertimes;

        const isDown = monitors
            .filter((monitor: any) => ids.includes(monitor.id))
            .find((monitor: { status: number }) => monitor.status !== 2)
            ? true
            : false;
        return !isDown;
    }

    return false;
};
