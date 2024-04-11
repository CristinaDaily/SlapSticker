import useStyles from "./Styles";

function PicturePopup({ picture, onClose }) {
  const classes = useStyles();
  return (
    <div className={`${classes.Popup} ${picture ? classes.OpenedPopup : ""}`}>
      <div className={classes.PopupContainer}>
        <button type="button" aria-label="close" onClick={onClose}></button>
        <img alt={picture?.title} src={picture?.url} />
        <h3>{picture?.title}</h3>
      </div>
    </div>
  );
}

export default PicturePopup;
