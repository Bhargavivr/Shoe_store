import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/data";
const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {},
});

export const itemactions = itemsSlice.actions;
export default itemsSlice;
