import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Payment from "@material-ui/icons/Payment";
import ShutterSpeed from "@material-ui/icons/ShutterSpeed";
import TripOrigin from "@material-ui/icons/TripOrigin";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    valuesFlexContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "no-wrap",
        [theme.breakpoints.down("xs")] : {
            display: "none",
        }
    },
    valuesBoxColumn: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        width: "23%",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            width: "22%",
        },
        [theme.breakpoints.down("sm")]: {
            display: "block",
            textAlign: "center",
        },
    },
    firstColumn: {
    },
    secondColumn: {
        color: "#000",
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            textAlign: "left",
            marginLeft: theme.spacing(0),
        }
    },
}));

function ValuesBanner() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
          <div className={classes.valuesFlexContainer}>
              <div className={classes.valuesBoxColumn}>
                  <div className={classes.firstColumn}>
                      <Payment />
                  </div>
                  <div className={classes.secondColumn}>
                      <Typography component="h4" variant="subtitle2">
                          Secured Payment
                      </Typography>
                      <Typography component="p" variant="caption">
                          All Payment on 10Percented are 100% secured
                      </Typography>
                  </div>
              </div>
              <div className={classes.valuesBoxColumn}>
                  <div className={classes.firstColumn}>
                      <ShutterSpeed />
                  </div>
                  <div className={classes.secondColumn}>
                      <Typography component="h4" variant="subtitle2">
                          Fast Shipping
                      </Typography>
                      <Typography component="p" variant="caption">
                          Goods are shipped nationwide
                      </Typography>
                  </div>
              </div>
              <div className={classes.valuesBoxColumn}>
                  <div className={classes.firstColumn}>
                      <TripOrigin />
                  </div>
                  <div className={classes.secondColumn}>
                      <Typography component="h4" variant="subtitle2">
                          Return Policy
                      </Typography>
                      <Typography component="p" variant="caption">
                          Customer can return product where necessary
                      </Typography>
                  </div>
              </div>
              <div className={classes.valuesBoxColumn}>
                  <div className={classes.firstColumn}>
                      <Payment />
                  </div>
                  <div className={classes.secondColumn}>
                      <Typography component="h4" variant="subtitle2">
                          Pay Bills
                      </Typography>
                      <Typography component="p" variant="caption">
                          Pay all bill on campusverve
                      </Typography>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default ValuesBanner;
