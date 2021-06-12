import { v4 as uuidv4 } from "uuid";

export default function addCartItem(item) {
  return {
    type: "ADD_CART_ITEM",
    payload: {
      title: item.title,
      description: item.description,
      mod1: item.mod1,
      mod2: item.mod2,
      mod1Add: item.mod1Add,
      mod2Add: item.mod2Add,
      price: item.price,
      id: uuidv4(),
    },
  };
}
