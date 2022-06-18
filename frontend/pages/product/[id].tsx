import { NextPage, GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
import { ISingleProduct } from "../../app/shared/interfaces/products.interface";
import Product from "../../app/components/screens/Product/Product";

interface IProps {
  product: ISingleProduct;
}

const ProductPage: NextPage<IProps> = ({ product }) => {
  return <Product product={product} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const response = await axios(`http://localhost:3333/product/${id}`);
  const product = response.data.product;
  return {
    props: { product },
  };
};

export default ProductPage;
