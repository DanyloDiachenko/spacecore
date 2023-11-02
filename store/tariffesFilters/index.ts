import { AnyAction } from "redux";
import initStore, { ITariffesFiltersInitStore } from "./initStore";

const tariffesFiltersReducer = (
    state: ITariffesFiltersInitStore = initStore,
    action: AnyAction,
): ITariffesFiltersInitStore => {
    switch (action.type) {
        case "SET_PRICE":
            return {
                ...state,
                price: action.value,
            };
        case "SET_DISKS":
            return {
                ...state,
                disks: action.value,
            };
        case "SET_DISKS_VOLUME":
            return {
                ...state,
                disksVolume: action.value,
            };
        case "SET_CORES":
            return {
                ...state,
                cores: action.value,
            };
        case "SET_RAM":
            return {
                ...state,
                ram: action.value,
            };
        case "SET_PERIOD":
            return {
                ...state,
                period: action.value,
            };
        default:
            return state;
    }
};

export default tariffesFiltersReducer;
