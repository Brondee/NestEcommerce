import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsForShop } from "../../shared/interfaces/products.interface";

interface IResults {
  products: ProductsForShop;
  numPages: number;
  page: number;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3333/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<IResults, number>({
      query: (page: number) => `product/page=${page}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
