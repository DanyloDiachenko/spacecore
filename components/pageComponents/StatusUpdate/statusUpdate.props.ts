export interface IUpdate {
    id: number;
    title: string;
    description: string;
    from: string;
    date: string;
}

export interface StatusUpdateProps {
    statusUpdateBlock: {
        title: string;
        titleAdditional: string;
        updateHistoryTitle: string;
        updateHistoryLink: string;
        updates: IUpdate[];
    };
}
