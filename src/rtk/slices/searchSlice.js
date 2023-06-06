import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASE_URL } from "../../utils/apiURL";

export const fetchSearch = createAsyncThunk("search/fetch", async (search) => {
  const res = await fetch(`${BASE_URL}/search.php?s=${search}`);
  const data = res.json();
  return data;
});

const initialState = {
  meal: [],
  mealStatus: STATUS.IDLE,
  mealsproduct: [],
  mealsProductStatus: STATUS.IDLE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state, action) => {
      state.mealStatus = STATUS.LOADING;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.meal = action.payload;
      state.mealStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.mealStatus = STATUS.FAILD;
    });
  },
});

export const { extraReducers } = searchSlice.actions;
export default searchSlice.reducer;

export const SearchProduct = (state) => state.meals;
// export const SearchProductStatus = (state) => state.meals.mealStatus;
