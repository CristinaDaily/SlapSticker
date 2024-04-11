import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import logo from "../images/logo-header.svg";

const useStyles = createUseStyles((theme) => ({
  Header: {
    paddingTop: "18px",
    paddingBottom: "18px",
    boxSizing: "border-box",
    background: theme.palette.primary,
    color: theme.palette.secondary,
    "& a": {
      color: theme.palette.text2,
      fontWeight: "bold",
    },

    "& div": {
      width: "calc(100% - 140px)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      "@media screen and (max-width: 900px)": {
        width: "calc(100% - 60px)",
      },
      "@media screen and (max-width: 767px)": {
        width: "calc(100% - 28px)",
      },
    },
    "& ul": {
      display: "flex",
      flexDirection: "row",
      listStyle: "none",
      padding: "0",
      gap: "30px",
      alignItems: "center",
    },
  },

  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
  },

  button: {
    width: "76px",
    height: "32px",
    backgroundColor: theme.palette.background2,

    "& a": {
      color: "white",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.Header}>
      <div>
        <img src={logo} alt={logo} />
        <nav>
          <ul>
            <li>
              <Link to="/readme" className={classes.link}>
                ReadMe
              </Link>
            </li>
            <li>
              <button className={classes.button}>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
