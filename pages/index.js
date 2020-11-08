import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';

import MainAppBar from "../src/components/navbar/index";
// import SecondaryNavBar from "../src/components/navbar/secondarynav";
import NewArrivalComponent from "../src/components/home/products/newarrival";
import Banner from "../src/components/home/banner";
import HotDeals from "../src/components/home/banner/hotdeal";
import ValuesBanner from "../src/components/home/banner/valuesbanner";
import MoreToLove from "../src/components/home/moretolove";
import FeaturedProducts from '../src/components/home/products/featured';
import AllCategories from "../src/components/home/products/categories/index";
import RecommendedForYou from "../src/components/home/products/recommend";
import About10Percenter from "../src/components/aboutpercenter";
import PrimaryFooter from "../src/components/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  container: {
    padding: "5px 1%",
    // overflow: "hidden",
  },
}))

export default function Index() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <MainAppBar />
      {/* <SecondaryNavBar /> */}
      <div className={classes.container}>
        <Banner />
      </div>
      <div className={classes.container}>
        <ValuesBanner />
      </div>
      <div className={classes.container}>
        <HotDeals />
      </div>

      <div className={classes.container}>
        <FeaturedProducts />
      </div>
      <div className={classes.container}>
        {/* <NewArrivalComponent /> */}
      </div>
      <div className={classes.container}></div>
      <div className={classes.container}>
        <AllCategories />
      </div>
      <div className={classes.container}>
        <RecommendedForYou />
      </div>
      <div className={classes.container}>
        <MoreToLove />
      </div>
      <div className={classes.container}>
        <About10Percenter />
      </div>
      <PrimaryFooter />

    </main>
  );
}
