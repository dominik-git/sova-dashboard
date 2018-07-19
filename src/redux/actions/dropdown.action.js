import DropdownConst from "Consts/dropdown.const";

function logoutAction(boolean) {
  return {
    type: DropdownConst.LOGOUT_DD,
    payload: boolean
  };
}

function homeAction(boolean) {
  return {
    type: DropdownConst.HOME_DD,
    payload: boolean
  };
}

function settingsAction(boolean) {
  return {
    type: DropdownConst.SETTINGS_DD,
    payload: boolean
  };
}

const DropdownActions = {
  logoutAction,
  homeAction,
  settingsAction
};

export default DropdownActions;
