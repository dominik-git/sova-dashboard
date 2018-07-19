import { combineReducers } from "redux";
import TestReducers from "Reducers/test.reducer";
import NewReducers from "Reducers/new.reducer";
import ThemeReducer from "Reducers/theme.reducer";
import DropdownReducer from "Reducers/dropdown.reducer";

const rootReducer = combineReducers({
  testReducers: TestReducers,
  newReducer: NewReducers,
  themeReducer: ThemeReducer,
  dropdownReducer: DropdownReducer
});
export default rootReducer;
