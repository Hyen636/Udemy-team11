const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const chatSlice = createSlice({
  name: "Chat",
  initialState,
  reducers: {
    addChatStore(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addChatStore } = chatSlice.actions;
export default chatSlice.reducer;
