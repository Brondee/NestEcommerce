import React from "react";
import styles from "./Home.module.scss";
import BlueBackgoundBlock from "../../ui/backgounds/blue/BlueBackgoundBlock";
import PinkLinkBtn from "../../ui/buttons/PinkLinkBtn";

const Home = () => {
  return (
    <section className={styles.main}>
      <BlueBackgoundBlock>
        <div className={styles.inner_container}>
          <div className={styles.info_container}>
            <h1>Borent</h1>
            <p>Новый сервис аренды ваших любимых настолок</p>
            <PinkLinkBtn value="Купить" link="/shop" />
          </div>
        </div>
      </BlueBackgoundBlock>
    </section>
  );
};

export default Home;
