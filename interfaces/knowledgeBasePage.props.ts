import KnowledgeBasePageComponentProps from "./knowledgeBasePageComponent.props";

export default interface KnowledgeBasePageProps {
    content: {
        knowledge_base_block: KnowledgeBasePageComponentProps["knowledgeBaseBlock"];
    };
}
