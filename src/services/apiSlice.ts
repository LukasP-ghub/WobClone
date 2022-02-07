import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { normalizeFirestoreRes } from '../utils/normalizeFirestoreRes';
import { ProductCategories, Promotions, ProductModel } from '../types/types';


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `https://firestore.googleapis.com/v1/projects/wobclone-3d29b/databases/(default)/documents/` }),
  reducerPath: 'apiSlice',
  endpoints: (build) => ({
    getEbooks: build.query<ProductModel[], string>({
      query: (param: any) => `ebooks?key=AIzaSyBcPWLW6D0lZqB-FyT0Fdtz1XUi0nhS2Zo&pageSize=50`,
      transformResponse(response: { documents: { fields: any }[] }) {
        return response.documents.map(item => normalizeFirestoreRes(item.fields) as ProductModel);
      },
    }),
    getCategories: build.query<ProductCategories[], string>({
      query: (param: any) => `categories?key=AIzaSyBcPWLW6D0lZqB-FyT0Fdtz1XUi0nhS2Zo`,
      transformResponse(response: { documents: { fields: any }[] }) {
        return response.documents.map(item => normalizeFirestoreRes(item.fields) as ProductCategories);
      },
    }),
    getPromotions: build.query<Promotions, string>({
      query: (param: any) => `promotions?key=AIzaSyBcPWLW6D0lZqB-FyT0Fdtz1XUi0nhS2Zo`,
      transformResponse(response: { documents: { fields: any }[] }) {
        return response.documents.map(item => normalizeFirestoreRes(item.fields))[0] as Promotions;
      },
    }),
  }),
})

export const { useGetEbooksQuery, useGetCategoriesQuery, useGetPromotionsQuery } = apiSlice;