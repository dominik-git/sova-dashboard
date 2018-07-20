import ThemeConst from "Consts/theme.const";

function themeColorAction(booleanValue) {
  return {
    type: ThemeConst.THEME_COLOR,
    payload: booleanValue
  };
}

function compHeightAction(string) {
  return {
    type: ThemeConst.COMP_HEIGHT,
    payload: string
  };
}

function logoutAction(boolean) {
  return {
    type: ThemeConst.LOGOUT,
    payload: boolean
  };
}

const ThemeActions = {
  themeColorAction,
  compHeightAction,
  logoutAction
};

export default ThemeActions;
