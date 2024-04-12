import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
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
      textAlign: "center",
      width: "100%",
      color: theme.palette.text2,
      fontSize: "15px",
      marginTop: "8px",
      marginBottom: "8px",
    },

    "& div": {
      width: "50px",
      boxSizing: "border-box",
    },
    "& button": {
      background: theme.palette.primary,
      color: theme.palette.secondary,
      textAlign: "center",
      borderRadius: "20px",
      alignSelf: "center",
      width: "40%",
      height: "20px",
      fontSize: "14px",
    },
  },
}));

export default useStyles;
