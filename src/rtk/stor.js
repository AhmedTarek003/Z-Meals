import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import darkmoodSlice from "./slices/darkmoodSlice";
import categorySlice from "./slices/categorySlice";
import mealsSlice from "./slices/mealsSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    darkmood: darkmoodSlice,
    category: categorySlice,
    meals: mealsSlice,
    search: searchSlice,
  },
});
