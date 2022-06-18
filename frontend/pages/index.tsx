import type { NextPage } from "next";
import Layout from "../app/components/layout/Layout";
import HomePage from "../app/components/screens/Home/Home";

const Home: NextPage = () => {
  return (
    <Layout title="Borent" desctiption="Home page of Borent shop">
      <HomePage />
    </Layout>
  );
};

export default Home;
