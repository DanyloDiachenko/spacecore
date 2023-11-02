import MainPageComponent from "components/pageComponents/MainPageComponent";
import Support from "components/pageComponents/Support";
import DocumentsComponent from "components/pageComponents/Documents";
import DocumentsPageComponentProps from "interfaces/documentsPageComponent.props";
import NotFindedSearched from "components/pageComponents/NotFindedSearched";

const Documents = ({
    mainBlock,
    supportBlock,
    notFindedSearchedBlock,
    documentsBlock,
}: DocumentsPageComponentProps): JSX.Element => {
    return (
        <>
            <MainPageComponent
                background="linear-gradient(101.09deg, #4F0B42 0%, #05065F 100%)"
                mainBlock={mainBlock}
            />
            <DocumentsComponent documentsBlock={documentsBlock} />
            <NotFindedSearched
                notFindedSearchedBlock={notFindedSearchedBlock}
            />
            <Support supportBlock={supportBlock} />
        </>
    );
};

export default Documents;
