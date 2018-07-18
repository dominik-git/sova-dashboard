import ThemeConst from "Consts/theme.const";
import CompConts from "Consts/theme.const";

const initialState = {
  themeColor: true,
  logoHeight: ""
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ThemeConst.THEME_COLOR:
      return Object.assign({}, state, {
        themeColor: action.payload
      });

    case CompConts.COMP_HEIGHT:
      return Object.assign({}, state, {
        logoHeight: action.payload
      });

    default:
      return state;
  }
}
export default themeReducer;
