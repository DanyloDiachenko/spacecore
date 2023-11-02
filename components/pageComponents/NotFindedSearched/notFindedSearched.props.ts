import INotFindedInformation from "./notFindedInformation.interface";

export default interface NotFindedSearchedProps {
    notFindedSearchedBlock: {
        title: string;
        notFindedInformation: INotFindedInformation[];
    } | null;
}
