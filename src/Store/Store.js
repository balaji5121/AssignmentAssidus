import { configureStore } from "@reduxjs/toolkit";
import chartsDataSlice from "./ChartData";
const store = configureStore({
  reducer: {
    chartsData: chartsDataSlice.reducer
  }
});

export default store;
