import MainInfo from "components/pageComponents/MainInfo";
import MainPageComponent from "components/pageComponents/MainPageComponent";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";
import OperationSystems from "components/pageComponents/OperationSystems";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import TariffesCpu from "components/pageComponents/TariffesCpu";
import CloudServersPageComponentProps from "interfaces/cloudServersPageComponent.props";

const CloudServers = ({
    mainBlock,
    tariffesCpuBlock,
    operationSystemsBlock,
    mainInfoBlock,
    notFindedSearchedBlock,
    faqBlock,
    supportBlock,
}: CloudServersPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #1E95D2 49.48%, #0061AE 100%)"
                mainBlock={mainBlock}
            />
            <TariffesCpu tariffesCpuBlock={tariffesCpuBlock} />
            <OperationSystems operationSystemsBlock={operationSystemsBlock} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedSearchedBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default CloudServers;
