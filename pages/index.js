import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import Container from '@material-ui/core/Container';

import MainAppBar from "../src/components/navbar/index";
// import SecondaryNavBar from "../src/components/navbar/secondarynav";
import NewArrivalComponent from "../src/components/products/newarrival";
import Banner from "../src/components/banner";
import FeaturedProducts from '../src/components/products/featured';
import AllCategories from "../src/components/products/categories/index";
import RecommendedForYou from "../src/components/products/recommend";
import PrimaryFooter from "../src/components/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eee",
  },
  container: {
    padding: "2px 1%",
    overflow: "hidden",
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
        <FeaturedProducts />
      </div>
      <div className={classes.container}>
        <NewArrivalComponent />
      </div>
      <div className={classes.container}></div>
      <div className={classes.container}>
        <AllCategories />
      </div>
      <div className={classes.container}>
        <RecommendedForYou />
      </div>
      <PrimaryFooter />

    </main>
  );
}
