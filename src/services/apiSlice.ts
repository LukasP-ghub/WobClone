import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginSuccess, logout } from '../store/authSlice';
import { ProductModel } from '../types/types';

// Opcjonalnie, jeśli korzystasz z tokena przechowywanego w store, możesz użyć prepareHeaders:
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      // Jeśli masz token w store, możesz go automatycznie dołączać do nagłówków
      const token = (getState() as { auth: { token: string } }).auth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    // Przykłady endpointów, które już masz:
    getEbooks: build.query({
      query: () => 'ebooks?key=YOUR_API_KEY&pageSize=50',
      transformResponse(response) {
        return response as ProductModel[];
      },
    }),
    getCategories: build.query({
      query: () => 'categories?key=YOUR_API_KEY',
      transformResponse(response) {
        return response;
      },
    }),
    getPromotions: build.query({
      query: () => 'promotions?key=YOUR_API_KEY',
      transformResponse(response) {
        return response;
      },
    }),
    
    // Dodajemy endpoint do logowania
    login: build.mutation({
      query: (credentials) => ({
        url: 'auth/login',     // endpoint na backendzie
        method: 'POST',
        body: credentials,     // spodziewamy się obiektu { email, password }
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(loginSuccess(data)); // Zapisujemy dane użytkownika do store
        } catch (error) {
          console.error('Błąd logowania:', error);
        }
      },
    }),
    
    // Endpoint do rejestracji
    register: build.mutation({
      query: (credentials) => ({
        url: 'auth/register',
        method: 'POST',
        body: credentials,     // również { email, password } lub inne wymagane dane
      }),
    }),

    logout: build.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
      async onQueryStarted(args, { dispatch }) {
        dispatch(logout()); // Czyścimy stan użytkownika po wylogowaniu
      },
    }),
  }),
});

// Eksportujemy hooki, których potem użyjesz w komponentach
export const {
  useGetEbooksQuery,
  useGetCategoriesQuery,
  useGetPromotionsQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = apiSlice;
