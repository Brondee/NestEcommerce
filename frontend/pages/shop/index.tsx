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

const shop: NextPage<IProps> = ({ products, numPages, page }) => {
  return <Shop products={products} numPages={numPages} page={page} />;
};

export const getStaticProps: GetServerSideProps = async (context) => {
  const response = await axios("http://localhost:3333/product/page=1");
  const data = response.data;
  const products = response.data.products;
  return {
    props: { products, ...data },
  };
};

export default shop;
