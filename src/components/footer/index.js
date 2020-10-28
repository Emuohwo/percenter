import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    footerContainer: {
        padding: "0.5rem 4%",
    },
    // Top footer section starts here
    topSection: {
        backgroundColor: "#000",
        color: "#fff",
    },
    flexBox: {
        display: "flex",
    },
    iconBox: {
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: "50%",
      margin: "1rem 0.5rem ",
      padding: "0.4rem 0.46rem 0.2rem",
    },
    icon: {
    },
    flexContent: {
        margin: "0.5rem, auto",
        "& > h5": {
            margin: "4px auto",
            marginTop: "0.9rem",
        },
        "& > a": {
            textDecoration: "none",
            color: "#888",
        },
        "& > a:hover": {
            color: "#fff",
        },
    },
    newsletter: {
        marginTop: "0.5rem",
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    },
    textfield: {
        // flexGrow: 1,
        backgroundColor: "#fff",
        marginLeft: "1rem",
        height: "3rem",
        border: "none",
        borderRadius: "4px 0 0 4px",
        width: "16rem",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0",
            maxWidth: "16rem",
        },
    },
    submit: {
        width: "100px",
        height: "3rem",
        color: "#fff",
        backgroundColor: "red",
        border: "none",
        borderRadius: "0 4px 4px 0",
        "&:hover": {
            opacity: 8
        }
    },
    // Bottom section Starts here
    bottomSection: {
        backgroundColor: "#0d0d0d",
        color: "#fff",
    },
    columnBox: {
        "& > a": {
            fontSize: "80%",
            textDecoration: "none",
            color: "grey",
        },
        "& > a:hover": {
            textDecoration: "underline",
        },
    },
    socialmediaUL: {
        margin: "0",
        padding: "0",
        listStyle: "none",
    },
    socialmediaLI: {
        // width: "4rem",
        // height: "4rem",
        display: "inline-block",
        margin: "4px 4px",
        // "&:hover a": {
        //     backgroundColor: "#fff",
        // },
    },
    socialIconBox: {
        padding: "1rem 0.4rem 0",
        "&:hover": {
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "1rem 0.4rem 0",
        }
    },
    // copyright Section starts here
    copyrightSection: {
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "2rem",
        textAlign: "center",
    }
}));

const PrimaryFooter = () => {
    const classes = useStyles();

    return (
        <>
        <footer>
            <section className={classes.topSection}>
            <div className={classes.footerContainer}>
                <Grid container spacing={3}>

                    <Grid item md={3}>
                        <div className={classes.flexBox}>
                            <div className={classes.flexIcon}>
                                <div className={classes.iconBox}>
                                    <CallIcon className={classes.icon} />
                                </div>
                            </div>
                            <div className={classes.flexContent}>
                                <h5>PHONE SUPPORT</h5>
                                <a href="#">07030062542</a>{" "}
                                <a href="#">07030062542</a>
                            </div>
                        </div>
                    </Grid>
                    

                    <Grid item md={3}>
                        <div className={classes.flexBox}>
                            <div className={classes.flexIcon}>
                                <div className={classes.iconBox}>
                                    <MailIcon className={classes.icon} />
                                </div>
                            </div>
                            <div className={classes.flexContent}>
                                <h5>EMAIL SUPPORT</h5>
                                <a href="#">info@10percenter.com</a>
                            </div>
                        </div>
                    </Grid>
                    

                    <Grid item md={6}>
                        <div className={classes.flexBox}>
                            <div className={classes.flexIcon}>
                                    {/* <p>Subscribe for updates</p> */}
                                <div className={classes.newsletter}>
                                    <p>Subscribe for updates</p>
                                    <form>
                                        <input
                                        type="text"
                                        name="email"
                                        placeholder="Email Address"
                                        className={classes.textfield}
                                        />
                                        <button
                                        type="submit"
                                        className={classes.submit}
                                        >
                                            Subscribe
                                        </button>  
                                    </form>

                                </div>
                            </div>

                        </div>
                    </Grid>
                    
                </Grid>
            </div>
            </section>
            <section className={classes.bottomSection}>
                <div className={classes.footerContainer}>
                    <Grid container spacing={3}>

                        <Grid item md={3}>
                            <div className={classes.columnBox}>
                                <h4>LET US HELP YOU</h4>
                                <a href="#">About us</a> <br />
                                <a href="#">Careers</a> <br />
                                <a href="#">Percenter Express</a> <br />
                                <a href="#">Terms and Conditions</a> <br />
                                <a href="#">Privacy policy</a> <br />
                                <a href="#">Holiday deals</a> <br />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className={classes.columnBox}>
                                <h4>ABOUT US</h4>
                                <a href="#">Help Center</a> <br />
                                <a href="#">How to shop with us</a> <br />
                                <a href="#">Delivery options and timelines</a> <br />
                                <a href="#">How to retur a product to Percenter</a> <br />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className={classes.columnBox}>
                                <h4>MAKE MONEY WITH PERCENTER</h4>
                                <a href="#">Sell on 10Percenter</a> <br />
                                <a href="#">Become an Affiliate Partner</a> <br />
                                <a href="#">Become a Sales Cosultant</a> <br />
                                <a href="#">Become a 10Percenter Vendor Service Provider</a> <br />
                                <a href="#">Become a 10Percenter Logistics Service Provider</a> <br />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className={classes.columnBox}>
                                <h4>CONNECT WITH US</h4>
                                <ul className={classes.socialmediaUL}>
                                    <li className={classes.socialmediaLI}>
                                        <a href="#" className={classes.socialIconBox}>
                                            <Facebook title="facebook" />
                                        </a>
                                    </li>
                                    <li className={classes.socialmediaLI}>
                                        <a href="#" className={classes.socialIconBox}>
                                            <Instagram title="instagram" />
                                        </a>
                                    </li>
                                    <li className={classes.socialmediaLI}>
                                        <a href="#" className={classes.socialIconBox}>
                                            <Twitter title="twitter" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </section>
            <section className={classes.copyrightSection}>
                <div>
                    Copyright &copy; {new Date().getFullYear()} 10Percenter. All rights reserved
                </div>
            </section>
        </footer>
        </>
    );
};

export default PrimaryFooter;
