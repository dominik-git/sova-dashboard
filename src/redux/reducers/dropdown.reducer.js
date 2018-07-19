import DropdownConst from "Consts/dropdown.const";

const initialState = {
  logout: false,
  home: false,
  settings: false
};

function dropdownReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DropdownConst.LOGOUT_DD:
      return Object.assign({}, state, {
        logout: action.payload
      });

    case DropdownConst.HOME_DD:
      return Object.assign({}, state, {
        home: action.payload
      });

    case DropdownConst.SETTINGS_DD:
      return Object.assign({}, state, {
        settings: action.payload
      });

    default:
      return state;
  }
}
export default dropdownReducer;
