import { CATEGORY_URL } from "../constants";
import apiSlice from "./apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => `${CATEGORY_URL}/categories`,
    }),
  }),
});

export const { useFetchCategoriesQuery } = categoryApiSlice;
