import { createStore } from "redux";
import reducer from "./reducers";
import { saveState, loadState } from "./localStorage";
import throttle from "lodash/throttle";
import cartitems from "./reducers/cartitems";

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState({
      modalitem: store.getState().modalitem,
      cartitems: store.getState().cartitems,
      subtotal: store.getState().subtotal,
    });
  }, 1000)
);

export default store;
