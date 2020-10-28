import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Electronics from "../../banner/left/electronics";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: "gold",
        overflow: "hidden",
    },
    mainUL: {
        margin: "0",
        padding: "0",
        listStyle: "none",
        display: "flex",
        flexWrap: "noWrap",
    },
    mainLI: {
        padding: "0.4rem 0.6rem",
        position: "relative",
      "&:hover": {
          backgroundColor: "#fff",
      }
    },
    dropdownlinkContainer: {
      backgroundColor: "green",
      position: "absolute",
      top: "2rem",
      width: "30rem",
      height: "100%",
    }
}));

const SecondaryNavBar = () => {
    const classes = useStyles();
    const [isShown, setIsShown] = React.useState(false);
    const [isShown2, setIsShown2] = React.useState(null);

    const hide = () => {
        setIsShown(!isShown);
    }

    return (
        <header>
            <nav className="navbarBox">
                <ul className="navUlBox">
                  <li
                    className="liBox"
                  >
                      <a>link</a>
                      <div className="maindropdown">
                        Dropdown 1
                      </div>
                    </li>
                  <li
                    className="liBox"
                  >
                      <a>link</a>
                      <div className="maindropdown">
                        <Electronics />
                      </div>
                    </li>
                </ul>
            </nav>
            
                    
            {/* {isShown &&  (
                <div
                  onMouseLeave={hide}
                >
                    <Electronics />
                </div>
            )} */}
            <style jsx>{`
              .navUlBox {
                margin: 0;
                padding: 0;
                list-style: none;
              }
              .liBox {
                margin: 0;
                padding: 0;
                position: relative;
                display: inline-block;
              }
              .liBox a{
                background: blue;
                color: #fff;
                padding: 8px 12px;
              }
              .liBox:hover a{
                background: purple;
              }
              .liBox a:hover{
                background: transparent;
                color: blue;
                padding: 8px 12px;
              }
              .maindropdown {
                position: absolute;
                top: 20px;
                background: #purple;
                width: 80rem;
                z-index: 9;
                display: none;
              }
              .liBox:hover .maindropdown {
                display: block;
                background: purple;
              }
            `}</style>
        </header>
    );
};

export default SecondaryNavBar;
