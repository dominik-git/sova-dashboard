import NewTestConst from "Consts/newTest.const";

function newAction1(payload) {
  return {
    type: NewTestConst.NEW_CONST_1,
    payload
  };
}
function newAction2(payload) {
  return {
    type: NewTestConst.NEW_CONST_2,
    payload
  };
}
const NewActions = {
  newAction1,
  newAction2
};

export default NewActions;
