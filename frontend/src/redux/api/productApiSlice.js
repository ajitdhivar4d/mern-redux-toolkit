import { PRODUCT_URL } from "../constants";
import apiSlice from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => `${PRODUCT_URL}/allProducts`,
    }),
  }),
});

export const { useAllProductsQuery } = productApiSlice;
