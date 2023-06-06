import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { BASE_URL } from "../../utils/apiURL";

export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const res = await fetch(`${BASE_URL}/categories.php`);
  const data = await res.json();
  return data;
});

const initialState = {
  category: [],
  categoryStatus: STATUS.IDLE,
  categoryProduct: [],
  categoryProductStatus: STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.categoryStatus = STATUS.LOADING;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.categoryStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.categoryStatus = STATUS.FAILED;
    });
  },
});

export const { extraReducers } = categorySlice.actions;
export default categorySlice.reducer;

export const categoryProducts = (state) => state.category.category.categories;
export const categoryStatus = (state) => state.category.categoryStatus;
