import { IButton, ITableContentItem } from "./resellerProgramTable.interface";

export default interface ResellerProgramTableProps {
    resellerProgramTableBlock: {
        buttons: IButton[];
        tableContent: ITableContentItem[];
        tableTopTitles: string[];
    };
}
