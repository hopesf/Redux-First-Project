import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const reducers = {
  increment: (state) => {
    state.value += 1;
  },
  decrement: (state) => {
    state.value -= 1;
  },
  increaseByValue: (state, { payload }) => {
    state.value += payload;
  },
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers,
});

export const { increment, decrement, increaseByValue } = counterSlice.actions;
export default counterSlice.reducer;
