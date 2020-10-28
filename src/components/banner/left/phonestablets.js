import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    cursor: "default",
  },
  link: {
    color: "inherit",
    fontSize: "95%",
    textDecoration: "none",
    "&:hover": {
        color: theme.palette.primary,
        fontSize: "100%",
        opacity: 0.8,
    }
  },
  linkHead: {
    color: "inherit",
    fontSize: "120%",
    textDecoration: "none",
    borderBottom: "1px solid #000",
    display: "block",
    // paddingBottom: "px",
    marginBottom: "4px",
    "&:hover": {
        color: theme.palette.primary,
        opacity: 0.8,
    }
  }
}))

const PhonesTablets = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Mobile Phone Accessories</a>
                    </Link>

                    <Link href="#">
                        <a className={classes.link}>Cables</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Cases & Cover</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Screen Protectors</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Chargers and  Power Banks</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Earphones & Headsets</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Smartwatches & Bands</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Chips, Holders & Stands</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Batteries</a>
                    </Link>
                    <br />
                    <br />
                    
                    
                    {/*<Link href="#">
                        <a className={classes.linkHead}>Cameras</a>
                    </Link>

                     <br />
                    <Link href="#">
                        <a className={classes.link}>Digital Cameras</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Professional & SLR Cameras</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Camcorders & Video Cameras</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Camera Lenses & Accessories</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>CCTV Cameras</a>
                    </Link>
                    <br /> */}
                    
                </Grid>
                {/* Second Column starts here */}
                <Grid item sm={3}>
                    
                <Link href="#">
                        <a className={classes.linkHead}>Mobile Phones</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Smartphones</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Feature Phone</a>
                    </Link>
                    <br />
                    {/* <Link href="#">
                        <a className={classes.link}>Other Accessories</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Gaming Accessories</a>
                    </Link>
                    <br />
                    <br /> */}

                    
                    {/* <Link href="#">
                        <a className={classes.linkHead}>Home Theatres & Audio Systems</a>
                    </Link>

                    <Link href="#">
                        <a className={classes.link}>Home Theatre</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>HiFi Systems</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>MP3 Players & Speakers</a>
                    </Link>
                    <br /> */}

                </Grid>
                <Grid item sm={3}>
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Tablets</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Android</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>iOS</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Windows Wii</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Other OS</a>
                    </Link>
                    <br />

                    
                    <Link href="#">
                        <a className={classes.linkHead}>Tablets Accessories</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Cases & Covers</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Holders & Stands</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Other Accessories</a>
                    </Link>
                    <br />

                </Grid>
                <Grid item sm={3}>Col3</Grid>
            </Grid>
        </div>
    );
};

export default PhonesTablets;
