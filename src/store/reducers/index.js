import { combineReducers } from "redux";
import leadsReducer from "./leadsReducer";
import filterReducer from "./filterReducer";
const reducers = combineReducers({
  leads: leadsReducer,
  filter: filterReducer
});

export { reducers };
