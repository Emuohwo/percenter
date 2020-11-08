import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

function BrowseAllCategories() {
    const classes = useStyles();

    return (
        <>
          BrowseAllCategories
        </>
    );
};

export default BrowseAllCategories;
