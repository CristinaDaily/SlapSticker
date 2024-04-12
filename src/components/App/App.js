import { useState, useRef } from "react";
// import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "../../useWebcamCapture.js";
// import logo from './logo.svg'

import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import About from "../About";
import ChooseStage from "../ChooseStage";
// import Picture from "../Picture.js";
import PicturePopup from "../PicturePopup";
import CameraStage from "../CameraStage";
import GalleryStage from "../GalleryStage";
import useStyles from "./App.styles.js";

function App() {
  // css classes from JSS hook
  const classes = useStyles();
  // currently active sticker

  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("");
  const [ready, setReady] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const section3Ref = useRef(null);
  const sectionGalleryRef = useRef(null);

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture array
  ] = useWebcamCapture(sticker?.img, title);

  function handleCapture2() {
    handleCapture();
    setTimeout(() => {
      if (sectionGalleryRef.current) {
        sectionGalleryRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }

  function handleRedyBtnClick() {
    setReady(true);

    setTimeout(() => {
      if (section3Ref.current) {
        section3Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  }

  function onPictureClick(pictureData) {
    console.log(pictureData);
    setSelectedPicture(pictureData);
  }

  function handeCloePopup() {
    setSelectedPicture(null);
  }

  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <main className={classes.Main}>
            <About />
            <ChooseStage
              title={title}
              setTitle={setTitle}
              setSticker={setSticker}
              sticker={sticker}
              onReadyBtnClick={handleRedyBtnClick}
            />
            {ready && (
              <>
                <CameraStage
                  section3Ref={section3Ref}
                  handleVideoRef={handleVideoRef}
                  handleCanvasRef={handleCanvasRef}
                  handleCapture={handleCapture2}
                />

                <div ref={sectionGalleryRef}>
                  <GalleryStage
                    picture={picture}
                    onPictureClick={onPictureClick}
                  />
                </div>
              </>
            )}
          </main>
        </Route>

        <Route path="/readme">
          <main>
            <h2>Devtest Readme</h2>
            <p>
              Hello candidate, Welcome to our little dev test. The goal of this
              exercise, is to asses your general skill level, and give us
              something to talk about at our next appointment.
            </p>
            <section>
              <h3>What this app should do</h3>
              <p>
                SlapSticker is an app that lets users to slap stickers on their
                face, using their webcam. Functionality wise the app works, but
                the ui needs some love. We'd like for you to extend this
                prototype to make it look and feel it bit better.
              </p>
              <p>These are the basic requirements:</p>
              <ul>
                <li>User can pick a sticker</li>
                <li>User can give the captured image a title</li>
                <li>User can place the sticker over the webcam image</li>
                <li>User can capture the webcam image with sticker</li>
              </ul>
            </section>
            <section>
              <h3>What we want you to do</h3>
              <p>
                Off course we didn't expect you to build a full fledged app in
                such a short time frame. That's why the basic requirements are
                already implemented.
              </p>
              <p>
                However, we would like for you to show off your strengths as a
                developer by improving the app.
              </p>
              <p>Some ideas (no need to do all):</p>
              <ul>
                <li>Make it look really nice</li>
                <li>Let users pick from multiple (custom) stickers</li>
                <li>Improve the workflow and ux</li>
                <li>Show multiple captured images in a gallery</li>
                <li>Let users download or share the captured pics</li>
                <li>Add super cool effects to webcam feed</li>
                <li>Organize, document and test the code</li>
                <li>Integrate with zoom, teams, meet...</li>
              </ul>
            </section>
            <section>
              <h3> quickstart</h3>
              <ul>
                <li>You can clone this repo to get started </li>
                <li>run `$ npm install` to install deps</li>
                <li>run `$ npm run start` to start dev environment</li>
                <li>push it to github or gitlab to share it with us. </li>
              </ul>
            </section>
            <section>
              <p>
                P.s. We've already added some libraries to make your life easier
                (Create React App, Jss, React Router), but feel free to add
                more.
              </p>
            </section>
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
      <PicturePopup picture={selectedPicture} onClose={handeCloePopup} />
    </div>
  );
}

export default App;
