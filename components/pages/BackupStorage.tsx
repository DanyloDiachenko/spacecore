import MainPageComponent from "components/pageComponents/MainPageComponent";
import MainInfo from "components/pageComponents/MainInfo";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import Configurator from "components/pageComponents/Configurator";
import BackupStoragePageComponentProps from "interfaces/backupStoragePageComponent.props";

const BackupStorage = ({
    mainBlock,
    mainInfoBlock,
    notFindedSearchedBlock,
    faqBlock,
    supportBlock,
    configuratorBlock,
}: BackupStoragePageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #0F034D 0%, #3D0D5F 100%)"
                mainBlock={mainBlock}
            />
            <Configurator configuratorBlock={configuratorBlock} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedSearchedBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default BackupStorage;
