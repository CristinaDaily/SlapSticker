import { useState, useRef } from "react";
// import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "../../useWebcamCapture.js";
// import logo from './logo.svg'

import { Switch, Route, Redirect } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import About from "../About";
import ChooseStage from "../ChooseStage";
// import Picture from "../Picture.js";
import PicturePopup from "../PicturePopup";
import CameraStage from "../CameraStage";
import GalleryStage from "../GalleryStage";
import Footer from "../Footer";
import Info from "../Info";
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
  const location = useLocation();

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
          <Info />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
      <PicturePopup picture={selectedPicture} onClose={handeCloePopup} />
    </div>
  );
}

export default App;
