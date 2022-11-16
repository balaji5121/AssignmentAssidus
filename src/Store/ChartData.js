import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://apis.ccbp.in/covid19-state-wise-data";

export const getChartData = createAsyncThunk("chartsData", async () => {
  const options = {
    method: "GET"
  };
  const res = await fetch(url, options);
  return res.json();
});

const chartsDataSlice = createSlice({
  name: "chartsData",
  initialState: {
    chartsList: []
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.fulfilled, (state, action) => {
        const updatedData = [];
        const keys = Object.keys(action.payload);
        console.log(action.payload);

        keys.map((each) => {
          updatedData.push({
            stateCode: each,
            ...action.payload[each].delta7
          });
          return updatedData;
        });
        state.chartsList = updatedData;
      })
      .addCase(getChartData.pending, (state, action) => {
        // console.log(action.payload);
      })
      .addCase(getChartData.rejected, (state, action) => {
        // console.log(action.payload);
      });
  }
});

export default chartsDataSlice;
