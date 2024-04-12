import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  ChooseBox: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",

    "@media screen and (max-width: 500px)": {
      gap: "4px",
    },
  },

  Name: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "460px",

    "@media screen and (max-width: 900px)": {
      width: "350px",
    },

    "@media screen and (max-width: 350px)": {
      width: "280px",
    },

    "& input": {
      border: "0",
      height: "27px",
      boxSizing: "border-box",
      padding: "0",
      borderBottom: `2px solid ${theme.palette.primary}`,
      outline: "0",
      fontSize: "20px",
      background: "transparent",
      color: theme.palette.text2,
      width: "250px",

      "@media screen and (max-width: 900px)": {
        width: "180px",
      },
      "@media screen and (max-width: 350px)": {
        fontSize: "15px",
        width: "155px",
      },
    },
  },

  Stickers: {
    "& img": {
      height: "4rem",

      "@media screen and (max-width: 900px)": {
        height: "2rem",
      },
    },
    width: "460px",

    "@media screen and (max-width: 1069px)": {
      marginTop: "10px",
    },
    "@media screen and (max-width: 900px)": {
      width: "350px",
    },
    "@media screen and (max-width: 350px)": {
      width: "280px",
    },
  },

  ReadyButton: {
    background: theme.palette.primary,
    color: theme.palette.secondary,
    textAlign: "center",
    fontWeight: "500",
    borderRadius: "30px",
    alignSelf: "center",
    marginTop: "70px",
    width: "310px",
    height: "50px",
    fontSize: "18px",

    "@media screen and (max-width: 400px)": {
      width: "260px",
    },
  },

  Wrapper: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexFlow: " column wrap",
    gap: "10px",
  },

  Section: {
    paddingTop: "30px",
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",

    "& p": {
      fontSize: "23px",
      fontFamily: "Inter, sans-serif",
      color: theme.palette.text2,
      margin: "0",

      "@media screen and (max-width: 900px)": {
        fontSize: "20px",
      },

      "@media screen and (max-width: 350px)": {
        fontSize: "15px",
      },
    },
  },

  Selected: {
    outline: `5px solid ${theme.palette.primary}`,
  },
}));

export default useStyles;
