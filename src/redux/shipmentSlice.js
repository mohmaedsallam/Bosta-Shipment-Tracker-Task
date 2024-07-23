import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShipment = createAsyncThunk(
  "shipment/fetchShipment",
  async (trackingNumber) => {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`
    );
    return response.data;
  }
);

const shipmentSlice = createSlice({
  name: "shipment",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShipment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchShipment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default shipmentSlice.reducer;
