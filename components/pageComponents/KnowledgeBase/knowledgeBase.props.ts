import { IBaseItem } from "./baseItem.interface";

export default interface KnowledgeBaseProps {
    knowledgeBaseBlock: {
        title: string;
        placeholder: string;
        buttonText: string;
        baseItems: IBaseItem[];
        nothingFound: string;
    };
}
