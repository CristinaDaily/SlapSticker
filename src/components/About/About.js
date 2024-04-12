import React from "react";
import useStyles from "./About.styles.js";

function About() {
  const classes = useStyles();

  return (
    <section className={classes.About}>
      <div>
        <h1>SlapSticker</h1>
        <p>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
      </div>
    </section>
  );
}

export default About;
