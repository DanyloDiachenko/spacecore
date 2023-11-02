import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import OperationSystemProps from "components/pageComponents/OperationSystems/operationSystems.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import TariffesCpuProps from "components/pageComponents/TariffesCpu/tariffes.Cpuprops";

export default interface CloudServersPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    tariffesCpuBlock: TariffesCpuProps["tariffesCpuBlock"];
    operationSystemsBlock: OperationSystemProps["operationSystemsBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    notFindedSearchedBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
}
