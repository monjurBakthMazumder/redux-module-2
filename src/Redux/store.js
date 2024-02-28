import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlices";
import usersSlice from "./features/user/userSlices";

const store = configureStore({
  reducer: {
    taskSlice: tasksSlice,    
    usersSlice: usersSlice,    
  },
});

export default store;
