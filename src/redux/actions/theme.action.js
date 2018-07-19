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

function upDownAction(boolean) {
  return {
    type: ThemeConst.UP_DOWN,
    payload: boolean
  };
}

const ThemeActions = {
  themeColorAction,
  compHeightAction,
  upDownAction
};

export default ThemeActions;
