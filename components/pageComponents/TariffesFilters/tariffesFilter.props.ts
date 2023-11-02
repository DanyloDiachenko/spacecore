import ICountry from "./Countries/country.interface";
import ICheckboxItem from "./Checkboxes/checkbox.interface";
import RangesProps from "./Ranges/ranges.props";
import PeriodsProps from "./Period/periods.props";
import SubscribeTelegramProps from "../SubscribeTelegram/subscribeTelegram.props";

export default interface TariffesFiltersProps {
    isTelegramBanner?: boolean;
    tariffesFiltersBlock: {
        title: string;
        countries: {
            title: string;
            countries: ICountry[];
        };
        ranges: RangesProps["ranges"];
        periods: PeriodsProps["periods"];
        checkboxes: ICheckboxItem[];
    };
    subscribeTelegramBlock?: SubscribeTelegramProps["subscribeTelegramBlock"];

    cpuCheckboxStates: { [key: string]: boolean };
    diskCheckboxStates: { [key: string]: boolean };
    onDiskCheckboxChange: (key: string) => void;
    onCpuCheckboxChange: (key: string) => void;

    onChangeComplete: () => void;
    onCountryClick: (keys: string[]) => void;
}
