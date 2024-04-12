import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
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
  GallaryInstruction: {
    borderTop: `3px solid ${theme.palette.primary}`,
    borderBottom: `3px solid ${theme.palette.primary}`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "25px",

    "& p": {
      fontSize: "25px",
      fontFamily: "Inter, sans-serif",
      color: theme.palette.text2,
      margin: "0",

      "@media screen and (max-width: 900px)": {
        fontSize: "20px",
      },
    },
  },
}));

export default useStyles;
