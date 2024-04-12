import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
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
}));

export default useStyles;
