import MainInfoProps from "components/pageComponents/MainInfo/mainInfo.props";
import MainComponentProps from "components/pageComponents/MainPageComponent/mainComponent.props";
import NotFindedSearchedProps from "components/pageComponents/NotFindedSearched/notFindedSearched.props";
import OperationSystemProps from "components/pageComponents/OperationSystems/operationSystems.props";
import FaqProps from "components/pageComponents/QuestionsAnswers/faq.props";
import SubscribeTelegramProps from "components/pageComponents/SubscribeTelegram/subscribeTelegram.props";
import SupportProps from "components/pageComponents/Support/support.props";
import { IMinMax } from "components/pageComponents/TariffesFilters/Ranges/minMax.interface";
import TariffesFiltersProps from "components/pageComponents/TariffesFilters/tariffesFilter.props";
import TariffesMainProps from "components/pageComponents/TariffesMain/tariffesMain.props";

export default interface DedicatedServersNoInstallPageComponentProps {
    mainBlock: MainComponentProps["mainBlock"];
    tariffesFiltersBlock: TariffesFiltersProps["tariffesFiltersBlock"];
    tariffesBlock: TariffesMainProps["tariffes"];
    operationSystemsBlock: OperationSystemProps["operationSystemsBlock"];
    mainInfoBlock: MainInfoProps["mainInfoBlock"];
    notFindedSearchedBlock: NotFindedSearchedProps["notFindedSearchedBlock"];
    faqBlock: FaqProps["faqBlock"];
    supportBlock: SupportProps["supportBlock"];
    subscribeTelegramBlock: SubscribeTelegramProps["subscribeTelegramBlock"];

    price: IMinMax;
    disks: IMinMax;
    disksVolume: IMinMax;
    cores: IMinMax;
    ram: IMinMax;

    setPrice: (price: IMinMax) => void;
    setDisks: (disks: IMinMax) => void;
    setDisksVolume: (disksVolume: IMinMax) => void;
    setCores: (cores: IMinMax) => void;
    setRam: (ram: IMinMax) => void;
}
