import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Header.styles.js";
import logo from "./logo/logo-header.svg";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.Header}>
      <div>
        <img src={logo} alt={logo} />
        <nav>
          <ul>
            <li>
              <Link to="/description" className={classes.link}>
                Project description
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
