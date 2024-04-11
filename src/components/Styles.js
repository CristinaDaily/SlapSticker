import { createUseStyles } from "react-jss";
import closeIcon from "../images/close-icon.svg";

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
      fontSize: "3rem",
      fontFamily: "Inter, sans-serif",
      color: theme.palette.text2,
      margin: "0",
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

  Camera: {
    alignItems: "center",

    "& canvas": {
      width: "100%",
      height: "auto",
    },
    "& video": {
      display: "none",
    },
  },

  About: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    background: theme.palette.primary,

    "& div": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "80px",
      paddingBottom: "60px",
      gap: "20px",

      "@media screen and (max-width: 500px)": {
        paddingTop: "120px",
        paddingBottom: "80px",
      },
    },

    "& h1": {
      fontFamily: "Inter, sans-serif",
      letterSpacing: "3px",
      cursor: "pointer",
      fontSize: "5rem",
      margin: "0",
      fontWeight: 800,
      width: "630px",
      textAlign: "center",
      color: theme.palette.secondary,

      "@media screen and (max-width: 900px)": {
        fontSize: "4rem",
        width: "430px",
      },
      "@media screen and (max-width: 500px)": {
        fontSize: "38px",
        width: "280px",
      },
    },

    "& p": {
      fontFamily: "Inter, sans-serif",
      fontSize: "25px",
      width: "700px",
      margin: "0",
      textAlign: "center",
      color: theme.palette.text2,

      "@media screen and (max-width: 900px)": {
        fontSize: "20px",
        width: "500px",
      },

      "@media screen and (max-width: 500px)": {
        fontSize: "20px",
        width: "290px",
      },
    },
    "& a": {
      color: theme.palette.text,
      margin: "0",
    },
  },

  Section: {
    paddingTop: "30px",
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",

    "& p": {
      fontSize: "1.5rem",
      fontFamily: "Inter, sans-serif",
      color: theme.palette.text2,
      margin: "0",
    },
  },

  Picture: {
    background: theme.palette.secondary,
    padding: 4,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    maxWidth: "270px",
    width: "100%",

    "& img": {
      width: "270px",
      height: "151px",
    },
    "& h3": {
      padding: 8,
      textAlign: "left",
      width: "100%",
      color: theme.palette.text2,
      fontSize: "13px",
    },

    "& div": {
      width: "50px",
    },
  },

  PicContainer: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(270px, 1fr))",
    justifyItems: "center",
    gap: "10px",

    "@media screen and (max-width: 970px)": {
      gridTemplateColumns: "repeat(2, minmax(min(280px, 100%), 1fr))",
    },
    "@media screen and (max-width: 600px)": {
      gridTemplateColumns: "repeat(1, minmax(min(300px, 100%), 1fr))",
    },
  },

  Popup: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    visibility: "hidden",
    opacity: 0,
    transition: "visibility 0.5s, opacity 0.5s ease-in-out",

    "& img": {
      maxWidth: "75vw",
      maxHeight: "75vh",
    },

    "& h3": {
      position: "relative",
      marginTop: "20px",
      marginBottom: "10",
      color: theme.palette.text2,
      fontSize: "25px",
      textAlign: "center",
    },
    "& button": {
      position: "absolute",
      right: "-40px",
      top: "-40px",
      width: "32px",
      height: "32px",
      cursor: "pointer",
      backgroundImage: `url(${closeIcon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "32px 32px",
      appearance: "none",
      backgroundColor: "initial",
      border: 0,
    },
  },

  OpenedPopup: {
    visibility: "visible",
    opacity: 1,
  },

  PopupContainer: {
    position: "relative",
    display: "block",
    background: theme.palette.secondary,
  },
}));

export default useStyles;
