import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: '',
  userSelected: {},
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    set: (state, action) => {
      state.users = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    selectedUser: (state, action) => {
      state.userSelected = action.payload
    }
  }
})


export default usersSlice.reducer;
export const { actions } = usersSlice;
