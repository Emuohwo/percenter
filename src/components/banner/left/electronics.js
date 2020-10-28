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

const Electronics = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item sm={3}>
                    
                    <Link href="#">
                        <a className={classes.linkHead}>Televisions</a>
                    </Link>

                    <Link href="#">
                        <a className={classes.link}>LED TVs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>OLED TVs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Curved TVs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Smart TVs</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Plasma TVs</a>
                    </Link>
                    <br />
                    <br />
                    
                    
                    <Link href="#">
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
                    <br />
                    
                </Grid>
                {/* Second Column starts here */}
                <Grid item sm={3}>
                    
                <Link href="#">
                        <a className={classes.linkHead}>TV Audio</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>Headphones</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Tevelevions Accessories</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Other Accessories</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Gaming Accessories</a>
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
                        <a className={classes.linkHead}>Games and Consoles</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>PS3</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Xbox One</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Nintendo Wii</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Sony PSP</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>PS Vita</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>Nintendo 3DS</a>
                    </Link>
                    <br />

                    
                    <Link href="#">
                        <a className={classes.linkHead}>DVD Players and Recorders</a>
                    </Link>

                    <br />
                    <Link href="#">
                        <a className={classes.link}>DVD Players</a>
                    </Link>
                    <br />
                    <Link href="#">
                        <a className={classes.link}>DVD Recorders</a>
                    </Link>
                    <br />

                </Grid>
                <Grid item sm={3}>Col3</Grid>
            </Grid>
        </div>
    );
};

export default Electronics;
