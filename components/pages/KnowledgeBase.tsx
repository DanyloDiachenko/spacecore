import KnowledgeBaseComponent from "components/pageComponents/KnowledgeBase";
import KnowledgeBasePageComponentProps from "interfaces/knowledgeBasePageComponent.props";

const KnowledgeBase = ({
    knowledgeBaseBlock,
}: KnowledgeBasePageComponentProps): JSX.Element => {
    return <KnowledgeBaseComponent knowledgeBaseBlock={knowledgeBaseBlock} />;
};

export default KnowledgeBase;
