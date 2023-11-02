import MainPageComponent from "components/pageComponents/MainPageComponent";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import ForInvestorsComponent from "components/pageComponents/ForInvestorsComponent";
import ForInvestorsPageComponentProps from "interfaces/forInvestorsPageComponent.props";

const ForInvestors = ({
    mainBlock,
    faqBlock,
    supportBlock,
    forInvestorsBlock,
}: ForInvestorsPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #0F034D 0%, #421172 100%)"
                mainBlock={mainBlock}
            />
            <ForInvestorsComponent forInvestorsBlock={forInvestorsBlock} />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default ForInvestors;
