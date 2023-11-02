import { createStore, combineReducers } from "redux";

import popupsReducer from "./popups";
import knowledgeBaseNavigationReducer from "./knowledgeBaseNavigation";
import tariffesFiltersReducer from "./tariffesFilters";
import releaseDateReducer from "./releaseDate";

const store = createStore(
    combineReducers({
        popups: popupsReducer,
        knowledgeBaseNavigation: knowledgeBaseNavigationReducer,
        tariffesFilters: tariffesFiltersReducer,
        releaseDate: releaseDateReducer,
    }),
);

export default store;
