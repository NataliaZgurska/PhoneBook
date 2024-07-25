import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, refreshUser, register, logout } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  //reducers
  extraReducers: builder => {
    builder
      //register
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      //login
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })

      //refreshUser
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })

      //logout
      .addCase(logout.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refreshUser.pending,
          logout.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refreshUser.rejected,
          logout.rejected
        ),
        state => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
