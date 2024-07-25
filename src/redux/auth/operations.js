import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

// Utility to add JWT
export const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

// register - для реєстрації нового користувача.
export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

//     login - для логіну існуючого користувача
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//     logout - для виходу з додатка
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();

    await instance.post('/users/logout');
    clearToken();
    return;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

//     refreshUser - оновлення користувача за токеном
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (token === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(token);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
