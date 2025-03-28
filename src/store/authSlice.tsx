import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const loadUserFromStorage = () => {
  try {
    const token = localStorage.getItem('token');
    const user =  JSON.parse(localStorage.getItem('user')||'');
    if (token && user) {
      return { user, token };
    }
  } catch (err) {
    console.error('Błąd ładowania użytkownika:', err);
  }
  return { user: null, token: null };
};

const initialState = loadUserFromStorage();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

// Selectory (opcjonalne)
export const selectUser = (state:RootState) => state.auth.user;
export const selectToken = (state:RootState) => state.auth.token;

export default authSlice.reducer;
