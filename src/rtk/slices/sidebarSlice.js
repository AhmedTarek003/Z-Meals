import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnOn: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    turnSideBarOn: (state, action) => {
      state.turnOn = true;
    },
    turnSideBarOff: (state, action) => {
      state.turnOn = false;
    },
  },
});

export const { turnSideBarOn, turnSideBarOff } = sidebarSlice.actions;
export default sidebarSlice.reducer;

export const turnSide = (state) => state.sidebar.turnOn;
