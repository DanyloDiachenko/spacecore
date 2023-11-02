import Checkboxes from "./Checkboxes";
import Ranges from "./Ranges";
import Countries from "./Countries";
import Period from "./Period";
import TariffesFiltersProps from "./tariffesFilter.props";
import SubscribeTelegram from "../SubscribeTelegram";

const TariffesFilters = ({
    isTelegramBanner,
    tariffesFiltersBlock,
    subscribeTelegramBlock,

    onChangeComplete,
    onCountryClick,
    cpuCheckboxStates,
    onCpuCheckboxChange,
    diskCheckboxStates,
    onDiskCheckboxChange,
}: TariffesFiltersProps): JSX.Element => {
    return (
        <section className="mt-12 tariffes">
            <div className="container">
                <h2>{tariffesFiltersBlock.title}</h2>
            </div>
            {isTelegramBanner && (
                <SubscribeTelegram
                    subscribeTelegramBlock={subscribeTelegramBlock}
                />
            )}
            <div className="container-large">
                <div className="container">
                    <Countries
                        countries={tariffesFiltersBlock.countries}
                        onCountryClick={onCountryClick}
                    />
                    <div className="bottom-content">
                        <Ranges
                            ranges={tariffesFiltersBlock.ranges}
                            onChangeComplete={onChangeComplete}
                        />
                        <Period periods={tariffesFiltersBlock.periods} />
                        <Checkboxes
                            checkboxes={tariffesFiltersBlock.checkboxes}
                            onCpuCheckboxChange={onCpuCheckboxChange}
                            diskCheckboxStates={diskCheckboxStates}
                            onDiskCheckboxChange={onDiskCheckboxChange}
                            cpuCheckboxStates={cpuCheckboxStates}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TariffesFilters;
