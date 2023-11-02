import { connect } from "react-redux";

import Select from "components/UI/Select";
import IVariant from "components/UI/Select/select.interface";
import Trans from "inc/locale/Trans";
import translate from "inc/locale/transFunc";
import { monthWord } from "helpers/monthWord";
import PeriodsProps from "./periods.props";
import { ITariffesFiltersInitStore } from "store/tariffesFilters/initStore";

const Period = ({ periods, period, setPeriod }: PeriodsProps): JSX.Element => {
    const setCurrentPeriod = (selectedPeriod: IVariant) => {
        setPeriod(Number(selectedPeriod.title));
    };

    return (
        <div>
            <div className="h3">
                <Trans string="При оплате за" />
            </div>
            <Select
                type="periods"
                currentVariant={
                    /* отображение текущего периода (период(1 / 2 / 3) + мессяц(а/ев)) */
                    period + " " + translate(monthWord(Number(period)))
                }
                variants={periods}
                setCurrentVariant={setCurrentPeriod}
            />
        </div>
    );
};

const mapState = (state: { tariffesFilters: ITariffesFiltersInitStore }) => {
    return {
        period: state.tariffesFilters.period,
    };
};
const mapDispatch = {
    setPeriod: (value: number) => ({ type: "SET_PERIOD", value }),
};
const connector = connect(mapState, mapDispatch);

export default connector(Period);
