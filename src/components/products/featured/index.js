import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import CardMedia from "@material-ui/core/CardMedia";

const useStyles =  makeStyles((theme) => ({
  root: {
      backgroundColor: "#fff",
    width: "100%",
    padding: "5px 0",
    boxSizing: "border-box",
  },
  container: {
    margin: theme.spacing(1, "auto"),
  },
  heading:{
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      verticalAlign: "center",
      padding: theme.spacing(0, 5),
      borderRadius: "12px 12px 0 0",
  },
  productList: {
    // backgroundColor: "green",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productwrapper: {
    width: "32%",
    margin: "0.5rem auto",
    boxShadow: "1px 1px 1px 1px #888",
    "&:hover": {
        boxShadow: "2px 2px 4px #888",
    },
  },
  link: {
    textDecoration: "none",
  },
  img: {
    width: "100px",
    height: "120px",
  },
  innerDiv: {
    backgroundColor: "#fff",
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "space-around",
  }
}));

const FeaturedProducts = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div className={classes.container}>
              <header className={classes.heading}>
                  <h2>Featured Products </h2>
                  <div><p>See All</p></div>
              </header>
              <div className={classes.productList}>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div className={classes.productwrapper}>
                      <a href="#" className={classes.link}>
                          <div className={classes.innerDiv}>
                              <img
                                className={classes.img}
                                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/T/168963_1583252566.jpg"
                              />
                              <div>
                                  <p>Some short description here are to limited by word count</p>
                                  <h5>N3500</h5>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default FeaturedProducts;
