import useStyles from "./Info.styles.js";

function Info() {
  const classes = useStyles();
  return (
    <main className={classes.Info}>
      <h2>Project Description</h2>
      <section>
        <h3>What this app do</h3>
        <p>
          SlapSticker is an app that lets users to slap stickers on their face,
          using their webcam.
        </p>
      </section>
      <section>
        <h3>Main functionality</h3>
        <ul>
          <li>User can select from multiple stickers</li>
          <li>User can give the captured image a title</li>
          <li>
            User can click on "Ready" button which starts the camera process and
            scrolls the screen to center it
          </li>
          <li>User can place the sticker over the webcam image</li>
          <li>
            User can capture multple the webcam image with sticker and the app
            show 3 last made
          </li>
          <li>
            User can click on photo to open a popup with a magnified view of the
            photo
          </li>
          <li>User can download photo by clicking "download" button </li>
        </ul>
      </section>
    </main>
  );
}

export default Info;
