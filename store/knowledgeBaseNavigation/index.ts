import { AnyAction } from "redux";
import initStore from "./initStore";

const knowledgeBaseNavigationReducer = (
    state = initStore,
    action: AnyAction,
) => {
    switch (action.type) {
        case "SET_OPEN":
            return {
                ...state,
                isKnowledgeBaseNavigationOpen: action.typeValue,
            };
        default:
            return state;
    }
};

export default knowledgeBaseNavigationReducer;
