import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addCred: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const {addCred} = authSlice.actions;
export default authSlice.reducer;
