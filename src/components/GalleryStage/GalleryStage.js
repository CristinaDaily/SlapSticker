import useStyles from "./GalleryStage.styles.js";
import Picture from "../Picture";

function GalleryStage({ picture, onPictureClick }) {
  const classes = useStyles();
  return (
    <section className={classes.Gallery}>
      <div className={classes.GallaryInstruction}>
        <h2>O4</h2>
        <p>
          Cherish this moment forever! Click on photo to enlarge or save it
          &#128525;
        </p>
      </div>
      <div className={classes.PicContainer}>
        {picture.length > 0 &&
          picture
            .slice(-3)
            .reverse()
            .map((propsData) => (
              <Picture
                key={propsData.id}
                url={propsData.data}
                title={propsData?.title}
                onPictureClick={onPictureClick}
              />
            ))}
      </div>
    </section>
  );
}

export default GalleryStage;
