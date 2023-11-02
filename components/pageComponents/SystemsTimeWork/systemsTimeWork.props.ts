export default interface SystemsTimeWorkProps {
    systemsTimeWorkBlock: {
        title: string;
        titleNotWorks: string;
        statusTitle: string;
        lastUpdate: string;
        nextUpdate: string;
        workTimeTitle: string;
        workTimeTitleAdditional: string;
        toTopTitle: string;
        worksTitle: string;
        notWorksTitle: string;
        groups: {
            title: string;
            ids: number[];
        }[];
    };
}
