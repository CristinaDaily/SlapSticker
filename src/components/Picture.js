import { downloadURI } from "../utils";
import useStyles from "./Styles";

function Picture({ url, title, onPictureClick }) {
  const classes = useStyles();

  function handlePictureClik() {
    console.log({ url, title });
    onPictureClick({ url, title });
  }

  function handleDownload() {
    downloadURI(url, title);
  }

  return (
    <article>
      <div className={classes.Picture}>
        <img src={url} onClick={handlePictureClik} alt={`Slap  ${title}`} />
        <h3>{title}</h3>
        <button onClick={handleDownload}>Download</button>
      </div>
    </article>
  );
}

export default Picture;
