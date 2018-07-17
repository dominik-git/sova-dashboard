import ThemeConst from "Consts/theme.const";

const initialState = {
  themeColor: true
};

function themeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ThemeConst.THEME_COLOR:
      return Object.assign({}, state, {
        themeColor: action.payload
      });

    default:
      return state;
  }
}
export default themeReducer;
