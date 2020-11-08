import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
  paper: {
    backgroundColor: "transparent",
  },

  mainLI: {
    boxSizing: "border-box",
    backgroundColor: "gold",
    width: "19%",
    margin: "8px 0",
    position: "relative",
  },
  catSection: {
    width: "100%",
  },
//   coverImg: {
//     width: "100%",
//     height: "auto",
//   },
  secondUL: {
    backgroundColor: "red",
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    listStyle: "none",
    margin: "0",
    padding: "0",
    display: "none",
  },
  topLIDiv: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 6px",
    "&:hover > secondUL": {
        // secondUL: {
            display: "block",
        // }
    }
  },
  topLink: {
    textDecoration: "none",
  },
  liMainImg: {
    width: "60px",
    height: "40px",
  },
  hoverableLiLink: {
    backgroundColor: "transparent",
    padding: "4px",
    "&:hover": {
      backgroundColor: "#eee",
    }
  },
  lilink: {
    display: "block",
    textDecoration: "none",
  },
}));

const AllCategories = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <header className="header">
                <h2>Popular Categories</h2>
            </header>
            <ul className="mainUL">
                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>



                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>


                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>

                
                <li className="mainLI">
                    <section className="catSection">
                        <img
                          src="/cverve_logo.jpg"
                          alt="Electronics"
                          className="coverImg"
                        />
                    </section>
                    <ul className="secondUL">
                        <li className={classes.secondLI}>
                            <a
                             href="#"
                             className="topLink"
                            >
                                <div className="topLIDiv">
                                    <h3>Electronics</h3>
                                    <img
                                      src="/cverve_logo.jpg"
                                      alt="Electronics"
                                      className="liMainImg"
                                    />
                                </div>
                            </a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Televisions</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">Cameras</a>
                        </li>
                        <li className="hoverableLiLink">
                            <a href="#" className="lilink">DVD & Home Theaters</a>
                        </li>
                    </ul>
                </li>
             
            </ul>
            {/* Small Screen display starts here */}
            <div className="smallScreenDisplay">
                <Grid container spacing={2}>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Fashion </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Electronics </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Phones and Accessories </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Foods </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img 
                                src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Automobiles </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Paper className="paper">
                          <div className="flexSpace">
                            <h4>
                              <a href="#" className="categoryLinkName"> Computer and Accessories </a>
                            </h4>
                            <div>
                            <a href="#">    
                                <img src="https://ae01.alicdn.com/kf/Hf2517a3ad97e4145b76438220a06c0fbv/Cycling-shorts-sports-font-b-underwear-b-font-compression-tights-bicycle-shorts-gel-font-b-underwear.jpg_220x220xz.jpg_.webp"
                                alt="ImageDescription"
                                className="catDescImg"
                                />
                                </a>
                            </div>
                          </div>
                        </Paper>
                    </Grid>
                    
                </Grid>
            </div>
            <style jsx>{`
              .jsx{
                  box-sizing: border-box;
              }
              .header {
                background-color: orange;
                color: #fff;
                borderRadius: 5px 5px 0 0;
                padding: 1px 1rem
              };
              .mainUL {
                background-color: #eee;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                list-style: none;
              };
              @media all and (max-width: 768px) {
                  .mainUL {
                      display: none;
                  }
              }
              .mainLI {
                box-sizing: border-box;
                background-color: #fff;
                width: 19%;
                margin: 8px 0;
                position: relative;
                overflow: hidden;
                box-shadow: 0 0 0.5rem rgba(0,0,0,.05);
              };
              .catSection{
                width: 100%;
              }
              .secondUL {
                background-color: #fff;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                list-style: none;
                margin: 0;
                padding: 0;
                display: none;
              };
              .mainLI:hover .secondUL {
                  display: block;
              }
              .coverImg {
                width: 100%;
                height: auto;
              };
              .topLIDiv {
                display: flex;
                justify-content: space-between;
                padding: 4px 6px;
              };
              .liMainImg {
                width: 60px;
                height: 40px;
              };
              .hoverableLiLink {
                background-color: transparent;
                padding: 4px;
              };
              .hoverableLiLink:hover {
                background-color: #eee;
              };
              .lilink {
                display: block;
                text-decoration: none;
              };
              .topLink {
                text-decoration: none;
              };

            //   Small Media Display for Categories Description

            
            .paper {
                padding: 4px 6px;
                margin: 4px auto;
            }
            .flexSpace {
              display: flex;
              justify-content: space-between;
              align-items: center;
            };
            .categoryLinkName {
                // font-weight: bold;
                text-decoration: none;
            }
            .catDescImg {
               width: 60px;
               height: 50px;
            }
            .smallScreenDisplay{
                display: none;
            }
            @media screen and (max-width: 768px) {
                .smallScreenDisplay {
                    display: block;
                    background: red;
                };
            };
            `}</style>
        </section>
    );
};

export default AllCategories;
