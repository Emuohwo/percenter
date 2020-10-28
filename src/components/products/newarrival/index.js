import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // overflow: "hidden",
    backgroundColor: "#fff",
    borderRadius: "12px 10px 0 0",
    // boxSizing: "border-box",
  },
  header: {
      backgroundColor: "grey",
      color: "#fff",
      display: "flex",
      padding: "0 0.7rem",
      alignItems: "center",
      "& > div": {
          paddingRight: "2rem",
      }
  },
  newArrivalBox: {
      display: "flex",
      justifyContent: "space-around",
      "& > div": {
          width: "19%",
          padding: "4px",
      }
    //   overflow: "auto",
    // //   padding: "8px",
  },
//   productBox: {
//       width: "100%",
//       margin: "2px",
//       padding: "2px",
//     //   padding: "2px 4px",
//     // "&:hover": {
//     //   boxShadow: "2px 2px 2px green",
//     // },
//     // [theme.breakpoints.down("sm")]: {
//     //   width: "25%",
//     // },
//   },
  prodImg: {
    width: "100%",
    height: "auto"
  },
  prodDetails: {},
}));

const NewArrivalComponent = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
        <header className={classes.header}>
            <div>
                <h3>New Arrival</h3>
            </div>
            <div>See All</div>
        </header>
          <div className={classes.newArrivalBox}>
              <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div>
              {/* Duplicate starts here */}
              <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div>
              <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div>
              <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div>
              {/* <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div> */}
              {/* <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div> */}
              <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div>
              {/* <div className={classes.productBox}>
                  <img className={classes.prodImg} src="/cverve_logo.jpg" alt="ProductName"/>
                  <div className={classes.prodDetails}>
                      <p>Summary of product description here is required</p>
                      <h5>&#8358; 24,999</h5>
                  </div>
              </div> */}
              {/* Duplicate ends here */}
          </div>
        </section>
    );
}

export default NewArrivalComponent;
