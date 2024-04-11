import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  ChooseBox: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
  },

  Name: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "490px",

    "& input": {
      border: "0",
      height: "27px",
      boxSizing: "border-box",
      padding: "0",
      borderBottom: `2px solid ${theme.palette.primary}`,
      outline: "0",
      fontSize: "1.3rem",
      background: "transparent",
      color: theme.palette.text2,
    },
  },

  Stickers: {
    "& img": {
      height: "4rem",
    },
    maxWidth: "490px",
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
  },

  Wrapper: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexFlow: " column wrap",
    gap: "30px",
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

  Selected: {
    outline: `5px solid ${theme.palette.primary}`,
  },
}));

export default useStyles;
