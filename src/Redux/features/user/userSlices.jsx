import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "monjur",
  email: "sdasd",
  userTasks: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
