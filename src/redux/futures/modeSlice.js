import { createSlice } from "@reduxjs/toolkit";
export const dataSlice = createSlice({
  name: "mode",
  initialState: {
    value: true,
  },
  reducers: {
    changeState : state => {
      state.value=!state.value;
    },
  },
});
export const { changeState } = dataSlice.actions;
export default dataSlice.reducer;
