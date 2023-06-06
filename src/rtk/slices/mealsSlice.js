import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASE_URL } from "../../utils/apiURL";

export const fetchMeals = createAsyncThunk("meals/fetch", async (category) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${category}`);
  const data = res.json();
  return data;
});

const initialState = {
  meal: [],
  mealStatus: STATUS.IDLE,
  mealsproduct: [],
  mealsProductStatus: STATUS.IDLE,
};

const mealsSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeals.pending, (state, action) => {
      state.mealStatus = STATUS.LOADING;
    });
    builder.addCase(fetchMeals.fulfilled, (state, action) => {
      state.meal = action.payload;
      state.mealStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchMeals.rejected, (state, action) => {
      state.mealStatus = STATUS.FAILD;
    });
  },
});

export const { extraReducers } = mealsSlice.actions;
export default mealsSlice.reducer;

export const mealsProducts = (state) => state.meals.meal.meals;
export const mealsProductStatus = (state) => state.meals.mealStatus;
