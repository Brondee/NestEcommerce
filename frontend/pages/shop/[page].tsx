import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Shop from "../../app/components/screens/Shop/Shop";
import { ProductsForShop } from "../../app/shared/interfaces/products.interface";

interface IProps {
  products: ProductsForShop;
  numPages: number;
  page: number;
}

const shopPage: NextPage<IProps> = ({ products, numPages, page }) => {
  return <Shop products={products} numPages={numPages} page={page} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.params?.page;
  const response = await axios(`http://localhost:3333/product/page=${page}`);
  const data = response.data;
  const products = response.data.products;
  return {
    props: { products, ...data },
  };
};

export default shopPage;
