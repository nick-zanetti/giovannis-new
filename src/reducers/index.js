import { combineReducers } from "redux";
import modalitem from "./modalitem";
import cartitems from "./cartitems";
import subtotal from "./subtotal";

export default combineReducers({
  modalitem,
  cartitems,
  subtotal,
});
