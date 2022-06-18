import Link from "next/link";
import React from "react";
import styles from "./ProductItem.module.scss";
import { IProductForShop } from "../../../shared/interfaces/products.interface";

interface IProps {
  product: IProductForShop;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  const { id, previewImage, available, title, pricePerDay, pricePerWeek } =
    product;

  return (
    <Link href={`/product/${id}`}>
      <article className={styles.product_container}>
        <img src={previewImage} alt={title} />
        <h3>{title}</h3>
        <div className={styles.prices_container}>
          <p>{pricePerDay}₽</p>
          <p>{pricePerWeek}₽</p>
        </div>
      </article>
    </Link>
  );
};

export default ProductItem;
