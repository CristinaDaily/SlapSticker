import { createUseStyles } from "react-jss";
import "../../vendor/fonts/inter.css";

const useStyles = createUseStyles((theme) => ({
  "@global body": {
    fontFamily: "Inter, sans-serif",
    background: theme.palette.background,
  },

  App: {
    minWidth: "320px",
    maxWidth: "1280px",
    height: "100%",
    margin: "0 auto",

    "& h2": {
      fontSize: "35px",
      fontFamily: "Inter, sans-serif",
      color: theme.palette.text2,
      margin: "0",

      "@media screen and (max-width: 900px)": {
        fontSize: "25px",
      },
    },
    "& button": {
      border: "none",
      cursor: "pointer",
      opacity: "1",
      transition: "opacity 0.5s ease-out",
      "&:hover": {
        opacity: 0.7,
      },
    },
  },

  Main: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",

    "& section": {
      paddingLeft: "70px",
      paddingRight: "70px",

      "@media screen and (max-width: 900px)": {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
      "@media screen and (max-width: 767px)": {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
    },
  },
}));

export default useStyles;
