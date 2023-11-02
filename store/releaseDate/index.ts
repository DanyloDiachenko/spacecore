import { AnyAction } from "redux";
import initStore, { IReleaseDate } from "./initStore";

const releaseDateReducer = (
    state: IReleaseDate = initStore,
    action: AnyAction,
): IReleaseDate => {
    switch (action.type) {
        case "SET_RELEASE_DATE":
            return {
                ...state,
                releaseDate: action.releaseDateValue,
            };
        default:
            return state;
    }
};

export default releaseDateReducer;
