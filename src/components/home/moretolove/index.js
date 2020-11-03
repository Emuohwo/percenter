import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "blue",
    padding: theme.spacing(2, 1),
    margin: theme.spacing(1, 0),
  },
  link: {
      textDecoration: "none",
      color: "#000",
  },
  sectionHeader: {},
  productFlexBox: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  product_box: {
    width: "15%",
    marginTop: theme.spacing(2),
    padding: "7px",
    [theme.breakpoints.down("md")]: {
        width: "19%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "30%",
    },
    [theme.breakpoints.down("xs")]: {
        width: "47%",
    },
  },
  productImg: {
      width: "100%",
      borderRadius: "5px 5px 0 0",
  },
  price: {
    display: "block",
    margin: "1px auto",
    fontWeight: "bolder",
  },
  unit_sold: {
      fontSize: "small",
  },
}));

function MoreToLove() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
         <div className={classes.sectionHeader}>
             <Typography component="h2" variant="h6">
                 More To Love
             </Typography>
         </div>
         <div className={classes.productFlexBox}>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/H7436568986d947cba9c32101a4f29d77v/Oumor-Men-2020-Spring-Casual-Motor-Spliced-Leather-Jacket-Coat-Men-Autumn-Fashion-Biker-Vintage-Warm.jpg_220x220xz.jpg_.webp" alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             {/* 
             Duplication starts here 
             Hence lines of code below can be deleted
             */}
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/H51ea8bd51edf452a9ed295dd755dffe2x/ORLVS-Mens-Boxer-Sexy-Underwear-soft-long-boxershorts-Cotton-soft-Underpants-Male-Panties-3D-Pouch-Shorts.jpg_220x220xz.jpg_.webp"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hb8fda49bc8a0432bb5586e6b633be187U/New-Maternity-Bra-Nursing-Bras-Pregnancy-Cothes-For-Pregnant-Women-Underwear-Breastfeeding-Bra-Soutien-Gorge-Femme.jpg_220x220xz.jpg_.webp"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hde40ae74ccd445739b04308c4a3c8ef31/BABEICUI-Sexy-Water-Soluble-Lace-font-b-Underwear-b-font-Women-s-Traceless-Low-Rise-Hip.png_220x220xz.png_.webp"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hc7885e0115db4362913e453c018af866e.jpg_350x350.jpg_.webp" 
                           alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/He0efce8c11654f51a71dff291073fbb2r/High-quality-Sexy-fashion-brand-Modal-U-convex-men-s-underwear-briefs-male-modal-panties-male.jpg_220x220xz.jpg_.webp" 
                           alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hf28bfd460bea4db69e26a36275962ddb7/Men-Sneakers-Summer-Breathable-font-b-Shoes-b-font-Super-Light-Casual-font-b-Shoes-b.jpg_220x220xz.jpg_.webp"
                           alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/H23fe3868fbda4c5e89c893a75893892cT/AGSan-Winter-Men-Casual-Shoes-Lace-Up-Fashion-Sneakers-Plush-Shoes-Big-Size-48-47-Mens.jpg_220x220xz.jpg_.webp" alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/H4aa5d73c90bf42f5b67b578a800472fdi.jpg_350x350.jpg_.webp" 
                           alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/Hb18d7f54a54249599a6dac87cc1c4628B.jpg_350x350.jpg_.webp" alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>
             <Paper className={classes.product_box}>
                 <div className={classes.product_imgBox}>
                     <a href="#">
                        <img
                           className={classes.productImg}
                           src="https://ae01.alicdn.com/kf/H7cbb990a4c984f7a948ff79bdbe137b7g.jpg_350x350.jpg_.webp"
                           alt="productName"
                        />
                     </a>
                 </div>
                 <div className={classes.product_descBox}>
                     <div className={classes.descTitle}>
                         <a className={classes.link} title="Product short description" href="#">Product short description</a>
                     </div>
                     <div className={classes.desc_price_sold}>
                         <span title="NGN 2,2832" className={classes.price}>NGN 2,2832</span>
                         <span className={classes.unit_sold}>7493 Sold</span>
                     </div>
                 </div>
             </Paper>

             {/* 
             Duplication ends here 
             Hence lines of code above can be deleted
             */}
             
         </div>
        </section>
    );
};

export default MoreToLove;