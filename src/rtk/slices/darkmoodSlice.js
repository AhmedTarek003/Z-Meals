import { createSlice } from "@reduxjs/toolkit";

const saveInLocalStorage = (data) => {
  localStorage.setItem("theme", data);
};

const initialState = {
  turnOn: localStorage.getItem("theme") === "true" ? true : false,
};

const darkmoodSlice = createSlice({
  name: "darkmood",
  initialState,
  reducers: {
    turnDarkMoodOn: (state, action) => {
      state.turnOn = true;
      saveInLocalStorage(state.turnOn);
    },
    turnDarkMoodOff: (state, action) => {
      state.turnOn = false;
      saveInLocalStorage(state.turnOn);
    },
  },
});

export const { turnDarkMoodOn, turnDarkMoodOff } = darkmoodSlice.actions;
export default darkmoodSlice.reducer;

export const themeMood = (state) => state.darkmood.turnOn;
