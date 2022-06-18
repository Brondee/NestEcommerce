import React from "react";
import Layout from "../../layout/Layout";
import ProductsList from "../../shared/product/ProductsList";
import { ProductsForShop } from "../../../shared/interfaces/products.interface";
import Pagination from "../../shared/pagination/Pagination";

interface IProps {
  products: ProductsForShop;
  numPages: number;
  page: number;
}

const Shop: React.FC<IProps> = ({ products, numPages, page }) => {
  return (
    <Layout title="Shop" desctiption="shop page of the ecommerce shop">
      <section className="w-full flex flex-col items-center">
        <div className="w-9/12">
          <h1 className="text-60 font-bold mb-10">Магазин</h1>
        </div>
        <ProductsList products={products} />
        <Pagination numPages={numPages} curPage={page} />
      </section>
    </Layout>
  );
};

export default Shop;
