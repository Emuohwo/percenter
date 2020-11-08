import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "#fff",
        padding: theme.spacing(1, 2),
    },
    sectionWrapper: {
    },
    sectionHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #eee",
    },
    bannerProductsBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: theme.spacing(2),
    },
    percent: {
        backgroundColor: "red",
        color: "#fff",
        borderRadius: "0 8px 8px 0",
        fontSize: "12px",
        padding: theme.spacing(1),
    },
    // This defines the width of product Container
    productContainer: {
        width: "45%",
        boxShadow: "0 0 16px transparent",
        padding: theme.spacing(1),
        overflow: "hidden",
        "&:hover": {
            boxShadow: "0 0 16px #888",
        },
        [theme.breakpoints.up("md")]: {
            width: "18%"
        },
        
    },
    productImg: {
        width: "100%",
        height: "auto",
    },
    ProductLink: {
        textDecoration: "none",
        color: "inherit",
    },
    discountedPrice: {
        fontWeight: "bold",
        display: "block",
    },
    price: {
        fontSize: "smaller",
        textDecoration: "line-through",
    },
    sellerNameLink: {
        textDecoration: "none",
        color: "#888"
    },
    cart: {
        textAlign: "center",
    },
    addToCartBtn: {
        border: "2px solid #ff6d00",
        borderRadius: "4px",
        backgroundColor: "#fff",
        color: "#ff6d00",
        width: "100%",
        padding: theme.spacing(1, 2),
        margin: "8px auto",
        "&:hover": {
            backgroundColor: "#ff6d00",
            color: "#fff",
        },
    },
}));

const TelevisionBanner = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
           <div className={classes.sectionWrapper}>
        {/* Header section starts here */}
               <div className={classes.sectionHeader}>
                   <h2> Televisions</h2>
                   <div className={classes.seeAll}>
                       <a className={classes.seeAllLink} href="#"> See All</a>
                   </div>
               </div>
           {/* Banner products starts here */}
           <div className={classes.bannerProductsBox}>

               <div className={classes.productContainer}>
                   <span className={classes.percent}>-29% OFF</span>
                   <div>
                       <img
                         src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/J/174738_1599739860.jpg"
                          alt="productImg"
                         className={classes.productImg}
                       />
                   </div>
                   <div>
                       <a href="#" className={classes.ProductLink}>ProductLink</a>
                   </div>
                   <div>
                       <span className={classes.discountedPrice}>NGN 40,400</span>
                       <span className={classes.price}>NGN 50,400</span>
                   </div>
                   <div className={classes.sellerDetail}>
                       sold by {" "} 
                       <span className={classes.sellerName}>
                           <a className={classes.sellerNameLink} href="#">Eloshines</a>
                       </span>
                   </div>
                   <div className={classes.cart}>
                       <button
                         type="button"
                         className={classes.addToCartBtn}
                        >
                           Add To Cart
                       </button>
                   </div>
               </div>

               <div className={classes.productContainer}>
                   <span className={classes.percent}>-29%</span>
                   <div>
                       <img
                         src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/J/174738_1599739860.jpg"
                          alt="productImg"
                         className={classes.productImg}
                       />
                   </div>
                   <div>
                       <a href="#" className={classes.ProductLink}>ProductLink</a>
                   </div>
                   <div>
                       <span className={classes.discountedPrice}>NGN 40,400</span>
                       <span className={classes.price}>NGN 50,400</span>
                   </div>
               </div>
               
               
           </div>
           </div>
        </section>
    );
};

export default TelevisionBanner;
