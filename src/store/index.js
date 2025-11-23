import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

import bagSlice from "./bagSlice";
import OrderSlice from "./OrderSlice";
const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagSlice.reducer,
    order: OrderSlice.reducer,
  },
});
export default store;
