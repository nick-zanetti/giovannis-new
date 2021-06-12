export default function subtotal(state = 0, action) {
  switch (action.type) {
    case "ADD_TO_TOTAL":
      return state + action.payload;
    case "REMOVE_FROM_TOTAL":
      return state - action.payload;
    default:
      return state;
  }
}
