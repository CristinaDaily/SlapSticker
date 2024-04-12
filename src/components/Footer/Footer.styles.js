import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  Footer: {
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
    "& p": {
      color: theme.palette.text2,
      textAlign: "end",
    },
  },
}));

export default useStyles;
