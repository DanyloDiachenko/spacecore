import { IKnowledgeBaseItem } from "components/pageComponents/KnowledgeBaseDetailedLinks/knowledgeBase.interface";

export default interface KnowledgeBaseDetailedPageProps {
    content: {
        navigation_block: IKnowledgeBaseItem[];
        content_block?: string;
        knowledgeBaseDetailedDetailTitle?: string;
    };
}
