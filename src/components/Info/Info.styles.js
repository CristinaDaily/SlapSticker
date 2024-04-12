import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  Info: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
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

    "& h2": {
      textAlign: "center",
      margin: "25px",
      fontSize: "25px",
      color: theme.palette.text2,
    },

    "& h3": {
      color: theme.palette.text2,
      fontSize: "25px",
    },

    "& p": {
      color: theme.palette.text2,
      fontSize: "18px",
    },
    "& li": {
      color: theme.palette.text2,
      fontSize: "18px",
    },
  },
}));

export default useStyles;
