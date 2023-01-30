import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quotesData } from "../components/Quotes";

export enum Status {
  LOADING = "loading",
  IDLE = "idle",
  ERROR = "error",
}

const initialState: {
  data: quotesData[];
  status: Status;
} = {
  data: [],
  status: Status.IDLE,
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = Status.IDLE;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = Status.ERROR;
      });
  },
});

// export const { setQuotes, setStatus } = quotesSlice.actions;
export default quotesSlice.reducer;

export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  return data;
});