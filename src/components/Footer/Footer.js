import useStyles from "./Footer.styles.js";

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.Footer}>
      <p>© Kristina 2023</p>
    </footer>
  );
}

export default Footer;
