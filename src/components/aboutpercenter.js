import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    paper: {
        padding: theme.spacing(2),
    }
}))

export default function AboutPercenter() {
    const classes = useStyles();
    return (
        <>
          <Paper className={classes.paper}>
            <Typography component="h2" variant="h6">
                Online shopping on 10Percenter - Nigerians biggest Ecommerce.
            </Typography>
            <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, esse perspiciatis exercitationem at incidunt fugit dicta molestias tenetur quaerat nam iure, illum, alias consequatur ullam neque possimus mollitia autem quidem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, esse perspiciatis exercitationem at incidunt fugit dicta molestias tenetur quaerat nam iure, illum, alias consequatur ullam neque possimus mollitia autem quidem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, esse perspiciatis exercitationem at incidunt fugit dicta molestias tenetur quaerat nam iure, illum, alias consequatur ullam neque possimus mollitia autem quidem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, esse perspiciatis exercitationem at incidunt fugit dicta molestias tenetur quaerat nam iure, illum, alias consequatur ullam neque possimus mollitia autem quidem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, esse perspiciatis exercitationem at incidunt fugit dicta molestias tenetur quaerat nam iure, illum, alias consequatur ullam neque possimus mollitia autem quidem.

            </Typography>
          </Paper>
        </>
    );
};