import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import OperationSystemProps from "components/pageComponents/OperationSystems/operationSystems.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SupportProps from "components/pageComponents/Support/support.props";
import TariffesCpuProps from "components/pageComponents/TariffesCpu/tariffes.Cpuprops";

export default interface CloudServersPageProps {
    content: {
        main_block: MainComponentProps["mainBlock"];
        tariffes_cpu_block: TariffesCpuProps["tariffesCpuBlock"];
        operation_systems_block: OperationSystemProps["operationSystemsBlock"];
        main_info_block: MainInfoProps["mainInfoBlock"];
        not_finded_information_block: NotFindedSearchedProps["notFindedSearchedBlock"];
        faq_block: FaqProps["faqBlock"];
        support_block: SupportProps["supportBlock"];
    };
}
