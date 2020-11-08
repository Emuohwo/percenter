import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BannerModules from "./modules/banner";
import TopProducts from "./modules/topproducts";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98%",
        margin: "auto",
    },
    gutter: {
        width: "96%",
        margin: "5px auto",
    },
    // All Categories and all Product container Starts here
    categoriesAndProducts: {
        display: "flex",
        justifyContent: "space-between",
    },
    categoriesBox: {
        width: "auto",
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
    },
    productsBox: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}))
const Television = () => {
    const classes = useStyles();
    
    return (
        <>
          <div className={classes.gutter}>
            <TopProducts />
          </div>


         <BannerModules />

         <div className={classes.categoriesAndProducts}>
             <div className={classes.categoriesBox}> All Categories details Here</div>
             <div className={classes.productsBox}><BannerModules /></div>
         </div>
        </>
    );
};

export default Television;
