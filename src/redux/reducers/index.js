import { combineReducers } from "redux";
import TestReducers from "Reducers/test.reducer";
import NewReducers from "Reducers/new.reducer";
import ThemeReducer from "Reducers/theme.reducer";

const rootReducer = combineReducers({
  testReducers: TestReducers,
  newReducer: NewReducers,
  themeReducer: ThemeReducer
});
export default rootReducer;
