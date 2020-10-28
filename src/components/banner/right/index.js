import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Storefront from "@material-ui/icons/Storefront";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    cardmedia: {
        width: "40px",
        height: "40px",
    }
}));

const BannerRightSide = () => {
    const classes = useStyles();

    return (
        <>
          <div className={classes.root}>
              <Grid container spacing={3}>
                  <Grid item sm={12}>
                    <Paper>
                        <Storefront /> Sell On NG-Market
                    </Paper>
                  </Grid>
                  <Grid item sm={6}>Hello</Grid>
                  <Grid item sm={12}>
                      <Paper>
                          <div>
                              <CardMedia
                                src="https://nameless-reaches-59547.herokuapp.com/artisans/images/a1c18bb9bc54a648212dc7d237a8058e.jpg"
                                className={classes.cardmedia}
                              />
                          </div>
                      </Paper>
                  </Grid>
              </Grid>
          </div>
        </>
    );
};

export default BannerRightSide;
