import { createUseStyles } from "react-jss";
import closeIcon from "./icon/close-icon.svg";

const useStyles = createUseStyles((theme) => ({
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
