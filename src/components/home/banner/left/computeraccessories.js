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

const ComputersAccessories = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Laptops</a>
                    </Link>

                    <Link href="#">
                        <a className={classes.link}>Mini Laptops and Notebooks</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Notebooks TVs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Ultrabooks</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Hybrid PCs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Macbooks</a>
                    </Link>
                    <br />
                    <br />
                    
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Printers, Scanners & Accessories</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Printers</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Scanners</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Toners, Inks & Cartridges</a>
                    </Link>
                    
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Softwares</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Offices & Businesses</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Operating Systems</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Security Utilities</a>
                    </Link>
                    
                </Grid>
                {/* Second Column starts here */}
                <Grid item sm={3}>
                    
                <Link href="#">
                        <a className={classes.linkHead}>Desktop and Monitors</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>CPUs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>All in one</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Monitors</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>UPS</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Servers</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Desktop Bundles</a>
                    </Link>
                    <br />
                    <br />

                    
                    <Link href="#">
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
                    <br />

                </Grid>
                <Grid item sm={3}>
                    
                <Link href="#">
                        <a className={classes.linkHead}>WiFi & Networking</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Switches</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Routers</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Modems</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Networking Peripherals</a>
                    </Link>
                    <br />

                    <Link href="#">
                        <a className={classes.linkHead}>Computing Accessories</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Computer Peripherals</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Storage Devices</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Laptop & Desktop Accessories</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Bags, Cases, Covers & Sleeves</a>
                    </Link>
                    <br />

                    
                    <Link href="#">
                        <a className={classes.linkHead}>PC Gaming</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>PC Games</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>PC Gaming Accessories</a>
                    </Link>
                    <br />

                </Grid>
                <Grid item sm={3}>Col3</Grid>
            </Grid>
        </div>
    );
};

export default ComputersAccessories;
