import React from "react";
import { IProductForShop } from "../../../shared/interfaces/products.interface";
import ProductItem from "./ProductItem";

interface IProps {
  products?: IProductForShop[];
}

const ProductsList: React.FC<IProps> = ({ products }) => {
  return (
    <div className="w-9/12 flex flex-wrap justify-evenly">
      {products?.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
