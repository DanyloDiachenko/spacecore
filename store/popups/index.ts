import { AnyAction } from "redux";
import initStore from "./initStore";

const popupsReducer = (state = initStore, action: AnyAction) => {
    switch (action.type) {
        case "SET_OPEN_POPUP":
            return {
                ...state,
                openPopup: action.popupToOpen,
            };
        case "CLOSE_POPUPS":
            return {
                ...state,
                openPopup: "",
            };
        default:
            return state;
    }
};

export default popupsReducer;
