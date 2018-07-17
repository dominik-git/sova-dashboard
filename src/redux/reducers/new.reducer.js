import NewTestConst from "Consts/newTest.const";

const initialState = {
  newState1: "empty state 1",
  newState2: "asdf"
};

function newReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NewTestConst.NEW_CONST_1:
      return Object.assign({}, state, {
        newState1: action.payload,
        newState2: "not yet"
      });

    case NewTestConst.NEW_CONST_2:
      return {
        ...state,
        newState2: action.payload
      };

    default:
      return state;
  }
}

export default newReducer;
