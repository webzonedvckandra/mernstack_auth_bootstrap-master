import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
const initialState = {
  status:"idle",
  data: [],
  data1:[]
  };
  export const getResearchSlice= createAsyncThunk("api/research-management/all", async () => {
    let res = await axiosInstance.get(`/research-management/all`);
    let resData = res?.data;
    return resData;
  });

  export const getPromoteResearch= createAsyncThunk("/api/research-management/insert", async (formData) => {
    let res = await axiosInstance.post("/research-management/insert", formData);
  
    let resData = res?.data;
    console.log(resData.data);
  
    return resData;
  });


export const ResearchSlice = createSlice({
  name: "header",
  initialState,
  extraReducers:(builder) => {
    builder
      .addCase(getResearchSlice.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getResearchSlice.fulfilled, (state, action) => {
        state.status = "idle";
        if (action?.payload?.type == "success") {
          state.data = action?.payload?.data;
        }
      })
      .addCase(getResearchSlice.rejected, (state, action) => {
        state.status = "idle";
      })

      .addCase(getPromoteResearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPromoteResearch.fulfilled, (state, action) => {
        state.status = "idle";
        if (action?.payload?.type == "success") {
          state.data1= action?.payload?.data;
        }
      })
      .addCase(getPromoteResearch.rejected, (state, action) => {
        state.status = "idle";
      })
  },
});

export default ResearchSlice;