import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
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
}));

export default useStyles;
