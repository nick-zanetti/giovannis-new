export default function cartitems(state = [], action) {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];
    case "REMOVE_CART_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}
