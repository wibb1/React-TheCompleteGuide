import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartShown: false },
  reducers: {
    toggle(state) {
      state.cartShown = !state.cartShown
    }
  },
});

export const uiActions = uiSlice.actions

export default uiSlice;
