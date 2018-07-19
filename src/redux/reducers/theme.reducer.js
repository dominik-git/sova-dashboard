import ThemeConst from "Consts/theme.const";

const initialState = {
  themeColor: true,
  logoHeight: "",
  upDown: false
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ThemeConst.THEME_COLOR:
      return Object.assign({}, state, {
        themeColor: action.payload
      });

    case ThemeConst.COMP_HEIGHT:
      return Object.assign({}, state, {
        logoHeight: action.payload
      });

    case ThemeConst.UP_DOWN:
      return Object.assign({}, state, {
        upDown: action.payload
      });

    default:
      return state;
  }
}
export default themeReducer;
