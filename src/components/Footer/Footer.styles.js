import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  Footer: {
    height: " 10px",
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
  },
}));

export default useStyles;
