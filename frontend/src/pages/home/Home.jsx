import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommendation from "./Recommendation";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommendation />
      <News />
    </>
  );
};

export default Home;
