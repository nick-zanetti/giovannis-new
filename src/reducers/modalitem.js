export default function modalitem(state = {}, action) {
  switch (action.type) {
    case "CHANGE_MODAL_ITEM":
      return action.payload;
    case "UPDATE_MOD":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
