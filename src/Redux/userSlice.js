// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userList: [], currentUser: null },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
