export default function removeCartItem(id) {
  return { type: "REMOVE_CART_ITEM", payload: id };
}
