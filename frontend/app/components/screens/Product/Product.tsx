import React, { useState } from "react";
import Link from "next/link";
import Layout from "../../layout/Layout";
import { ISingleProduct } from "../../../shared/interfaces/products.interface";
import PeopleIcon from "../../../assets/icons/people.svg";
import ClockIcon from "../../../assets/icons/clock.svg";
import KidIcon from "../../../assets/icons/kid.svg";
import ReviewsList from "./ReviewsList";
import styles from "./Product.module.scss";
import LoadMoreBtn from "../../shared/buttons/LoadMoreBtn";

interface IProps {
  product: ISingleProduct;
}

const Products: React.FC<IProps> = ({ product }) => {
  const [numToShow, setNumToShow] = useState<number>(1);
  const [curImageUrl, setCurImageUrl] = useState<string>(product.previewImage);
  const [curImageId, setCurImgId] = useState<number>(0);

  const reviewsData = product.reviews.slice(0, numToShow);
  const reviewsLength = product.reviews.length;

  const hangleImageClick = (e: any, imageId: number) => {
    setCurImgId(imageId);
    setCurImageUrl(e.target.src);
  };

  return (
    <Layout
      title={product.title}
      desctiption={`a single page about ${product.title} game`}
    >
      <section className={styles.first_section}>
        <div className={styles.images_container}>
          <ul>
            <li className={curImageId === 0 ? "bg-dullPink" : "bg-white"}>
              <img
                src={product.previewImage}
                alt="product image 1"
                onClick={(e) => hangleImageClick(e, 0)}
              />
            </li>
            {product.images.map((image, index) => {
              return (
                <li
                  key={image.id}
                  className={
                    curImageId === image.id ? "bg-dullPink" : "bg-white"
                  }
                >
                  <img
                    src={image.url}
                    alt={`product image ${index}`}
                    onClick={(e) => hangleImageClick(e, image.id)}
                  />
                </li>
              );
            })}
          </ul>
          <div className={styles.main_img_container}>
            <img src={curImageUrl} alt={product.title} />
          </div>
        </div>
        <div className={styles.text_contanier}>
          <h1>{product.title}</h1>
          <ul className={styles.quick_info_container}>
            <li>
              <img src={PeopleIcon.src} alt="people icon" />
              <p>{product.players}</p>
            </li>
            <li>
              <img src={ClockIcon.src} alt="clock icon" />
              <p>{product.time}</p>
            </li>
            <li>
              <img src={KidIcon.src} alt="kid icon" />
              <p>{product.age}</p>
            </li>
          </ul>
          <div className={styles.add_cart_btns_container}>
            <div className={styles.add_cart_btn}>
              <h3>{product.pricePerDay}₽</h3>
              <p>на день</p>
              <button>В корзину</button>
            </div>
            <div className={styles.add_cart_btn}>
              <h3>{product.pricePerWeek}₽</h3>
              <p>на неделю</p>
              <button>В корзину</button>
            </div>
          </div>
          <ul className={styles.categories_container}>
            <Link href={`/category/id`}>
              <li>
                <a>Семейные игры</a>
              </li>
            </Link>
            <Link href={`/category/id`}>
              <li>
                <a>Для двоих</a>
              </li>
            </Link>
            <Link href={`/category/id`}>
              <li>
                <a>Для компании</a>
              </li>
            </Link>
          </ul>
        </div>
      </section>
      <section className={styles.description_section}>
        <div className={styles.description_container}>
          <h1>Описание</h1>
          <p>{product.description}</p>
        </div>
        <article className={styles.other_games_section}>
          <h3>Другие товары</h3>
          <div className={styles.other_games_container}>
            <div className={styles.another_game}>
              <img src={product.previewImage} alt="games img" />
              <p>каркассон</p>
            </div>
            <div className={styles.another_game}>
              <img
                src="https://cdn1.ozone.ru/multimedia/1019445869.jpg"
                alt="games img"
              />
              <p>цитадели</p>
            </div>
          </div>
        </article>
      </section>
      <section className={styles.reviews_section}>
        <h1>Отзывы</h1>
        <ReviewsList reviews={reviewsData} />
        <LoadMoreBtn
          numToShow={numToShow}
          setNumToShow={setNumToShow}
          reviewsLength={reviewsLength}
        />
      </section>
      <section className={styles.leave_review_section}>
        <h2>Свой Отзыв</h2>
        <form>
          <textarea placeholder="Введите текст" />
          <button>Оставить отзыв</button>
        </form>
      </section>
    </Layout>
  );
};

export default Products;
