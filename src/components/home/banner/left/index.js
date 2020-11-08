import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import TV from "@material-ui/icons/LiveTv";

import Electronics from "./electronics";
import PhonesTablets from "./phonestablets";
import ComputerAccessories from "./computeraccessories";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    link: {
      textDecoration: "none",
      verticalAlign: "middle",
    },
    linkIcon: {
      margin: "0, 2px",
      verticalAlign: "middle",
    },
    subLinks: {
      width: "60rem",
        backgroundColor: "#fff",
        boxShadow: "1px 1px 8px #888888",
      position: "absolute",
      top: "0",
      left: "100%",
      display: "none",
      zIndex: 99,
    },
    lineDiv: { /** The main navbar container */
        position: "relative",
        display: "block",
        padding: "0.18rem 1rem",
        "&:hover": {  /** hover effect of main navlinks container */
        //   backgroundColor: "#eee",
        boxShadow: "1px 1px 2px #888888",
            color: "blue",
        },
        "&:hover > a": {  /** hover effect of main navlinks */
            cursor: "pointer",
            color: "blue",
        },
        "&:hover > div": { /** show subLinks containers */
            display: "block",
        }
    }
}));

const BannerLinks = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.lineDiv}>
                <TV className={classes.linkIcon} />
                <Link href="#">
                    <a className={classes.link}>Phones and Tablets</a>
                </Link>
                <div className={classes.subLinks}>
                    <PhonesTablets />
                </div>
            </div>
            <div className={classes.lineDiv}>
                <TV className={classes.linkIcon} />
                <Link href="#">
                    <a className={classes.link}>Electronics</a>
                </Link>
                <div className={classes.subLinks}>
                    <Electronics />
                </div>
            </div>
            <div className={classes.lineDiv}>
                {/* <TV className={classes.linkIcon} /> */}
                <Link href="#">
                    <a className={classes.link}>Computers and Accessories</a>
                </Link>
                <div className={classes.subLinks}>
                    <ComputerAccessories />
                </div>
            </div>
        </div>

    );
}
export default BannerLinks;
