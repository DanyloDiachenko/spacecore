import MainInfo from "components/pageComponents/MainInfo";
import MainPageComponent from "components/pageComponents/MainPageComponent";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";
import QuestionsAnswers from "components/pageComponents/QuestionsAnswers";
import Support from "components/pageComponents/Support";
import Tariffes from "components/pageComponents/Tariffes";
import HostingSitePageComponentProps from "interfaces/hostingSitePageComponent.props";

const HostingSite = ({
    mainBlock,
    mainInfoBlock,
    notFindedSearchedBlock,
    faqBlock,
    supportBlock,
    tariffesBlock,
}: HostingSitePageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #38C9F7 0%, #A52FEE 100%)"
                mainBlock={mainBlock}
            />
            <Tariffes tariffesBlock={tariffesBlock} />
            <MainInfo mainInfoBlock={mainInfoBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedSearchedBlock}
            />
            <QuestionsAnswers faqBlock={faqBlock} />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default HostingSite;
