import { IKnowledgeBaseItem } from "./knowledgeBase.interface";

export default interface KnowledgeBaseDetailsProps {
    navigation?: IKnowledgeBaseItem[];
    setActiveLinksHandler: (navTitle: string) => void;
    setActiveLink: (linkTitle: string) => void;
    activeLinks: string[];
    activeLink: string;
}
