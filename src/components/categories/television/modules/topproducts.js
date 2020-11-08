import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Slider from "react-slick";
// Add the associated styles in _app.js

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
    },
    paperLarge: {
        padding: theme.spacing(2),
        "& img": {
            width: "100%",
            height: "100px",
        },
        "& img:hover": {
            width: "100%",
            height: "100px",
            transform: "scale(0.999)",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        }
    },
    paperMedium: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            padding: theme.spacing(2),
            "& img": {
                width: "100%",
                height: "70px",
            },
            "& img:hover": {
                width: "100%",
                transform: "scale(0.999)",
            },
        },
    }
}));

const slickSetting1 = {
    dots: false,
    autoplay: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
};
const slickSetting2 = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
};

function HotDeals() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
           <div className={classes.slickContainer}>
               <Paper className={classes.paperLarge}>
               <Typography variant="h6" color="error">Hot Deals for you</Typography>
                   <Slider {...slickSetting1}>
                       {/* <div>
                           <img
                             src={require("/folder Location")}
                             alt=""
                            />
                            <div className={classes.descBox}>
                                Some description
                            </div>
                       </div> */}
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hc7885e0115db4362913e453c018af866e.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hb18d7f54a54249599a6dac87cc1c4628B.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/H7cbb990a4c984f7a948ff79bdbe137b7g.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hc7885e0115db4362913e453c018af866e.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hb18d7f54a54249599a6dac87cc1c4628B.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/H7cbb990a4c984f7a948ff79bdbe137b7g.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                   </Slider>
               </Paper>
               {/* Medium Size */}
               <Paper className={classes.paperMedium}>
               <Typography variant="h6" color="error">Hot Deals</Typography>
                   <Slider {...slickSetting2}>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hc7885e0115db4362913e453c018af866e.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hb18d7f54a54249599a6dac87cc1c4628B.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/H7cbb990a4c984f7a948ff79bdbe137b7g.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hc7885e0115db4362913e453c018af866e.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/Hb18d7f54a54249599a6dac87cc1c4628B.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                       <div>
                            <img
                                src="https://ae01.alicdn.com/kf/H7cbb990a4c984f7a948ff79bdbe137b7g.jpg_350x350.jpg_.webp"
                                alt="SlideImageName"
                                className={classes.img}
                            />
                        </div>
                   </Slider>
               </Paper>
               <Paper className={classes.paperSmall}></Paper>
           </div>
            <style global>
                {`
                .slick-prev{
                    background: #000 !important;
                    margin-left: 1.5rem !important;
                    z-index: 88;
                }
                .slick-next{
                    background: #000 !important;
                    margin-right: 1.5rem !important;
                    color: red !important;
                }
                .slick-next:hover, 
                .slick-prev:hover 
                {
                    background: #000!important;
                    // padding: 3px 10px!important;
                }
                `}
            </style>
        </section>
    );
}

export default HotDeals;
