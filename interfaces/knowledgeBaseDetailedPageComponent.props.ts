import { IKnowledgeBaseItem } from "components/pageComponents/KnowledgeBaseDetailedLinks/knowledgeBase.interface";

export default interface KnowledgeBaseDetailedPageComponentProps {
    navigationBlock: IKnowledgeBaseItem[];
    knowledgeBaseDetailedDetailTitle?: string;
    contentBlock?: string;
    isKnowledgeBaseNavigationOpen: boolean;
    setOpenKnowledgeBaseNavigation: (typeValue: boolean) => void;

    setOpenPopup: (popupToOpen: string) => void;
}
