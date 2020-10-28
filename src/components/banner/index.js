import React from "react";
// import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BannerLinks from "./left";
import ImageSlideShow from "./middle";
import BannerRightSide from "./right";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        padding: "12px",
        width: "100%",
        boxSizing: "border-box",
    },
    grow: {
        flewGrow: 1,
    },
    bannerWrapper: {
      display: "flex",
      flexWrap: "noWarp",
      "& > div": {
        //   margin: ".5rem",
          backgroundColor: "#fff",
          "&:hover": {
              boxShadow: "1px 1px 8px #888888",
          }
      }
    },
    bannerLeft: {
        // width: "15rem",
      backgroundColor: "#fff",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    },
    bannerMiddle: {
        // maxWidth: "60%",
    //   flewGrow: 1,
    //   backgroundColor: "gold",
    },
    bannerRight: {
        display: "none",
    //   maxWidth: "22%",
    //   backgroundColor: "green",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    },
    // indicator: {
    //   marginTop: "4px",
    //   display: "flex",
    //   justifyContent: "space-between",
    //   overflow: "auto",
    //   "& > div": {
    //       width: "18%",
    //       backgroundColor: "#fff",
    //       boxShadow: "1px 1px 4px #888",
    //       "& > img": {
    //           width: "100%",
    //       }
    //   }
    // }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <div className={classes.bannerWrapper}> */}
            <Grid container spacing={2}>
                
                <Grid item md={2} sm={4} className={classes.bannerLeft}>
                    <BannerLinks />
                </Grid>
                
                <Grid item xs={12}  md={10}className={classes.bannerMiddle}>
                    <ImageSlideShow /> 
                </Grid>
                
                <Grid item md={2} className={classes.bannerRight}>
                    <BannerRightSide />
                </Grid>
                
            </Grid>
        </div>
    );
};

export default Banner;
