import { createUseStyles } from "react-jss";

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

    "&:hover": {
      opacity: 0.7,
    },
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

export default useStyles;
