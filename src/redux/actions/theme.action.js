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

const ThemeActions = {
  themeColorAction,
  compHeightAction
};
export default ThemeActions;
