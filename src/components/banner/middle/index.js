import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Zoom } from "react-slideshow-image";
const image1 = "data:image/jpeg;base64,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";
const image2 = "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
const image3 = "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
const image4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU";
const image5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkz37uS1p6Tuqe5l0OpUDCWJgb-CWmOHOmHg&usqp=CAU";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const useStyles = makeStyles((theme) => ({
  slideShowImg: {
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    }
  }
}))
const Slideshow = () => {
  const classes = useStyles();
  
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} className={classes.slideShowImg} src={each} />
        ))}
      </Zoom>
    </div>
  );
};


export default Slideshow;
