import useStyles from "./Styles";
import Picture from "./Picture";

function GalleryStage({ picture, onPictureClick }) {
  const classes = useStyles();
  return (
    <section className={classes.Gallery}>
      Step 4: Cherish this moment forever
      <div className={classes.PicContainer}>
        {picture.length > 0 &&
          picture
            .slice(-3)
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
