import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../src/components/navbar/index";
import TelevisionCategories from "../../src/components/categories/television/index";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
    },
}))
function Television() {
    const classes = useStyles();

    return (
        <body className={classes.root}>
            <Header />
        <main>
           <TelevisionCategories />
        </main>
        </body>
    );
};

export default Television;
