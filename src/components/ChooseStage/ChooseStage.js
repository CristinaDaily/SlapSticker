import { getRnadomId } from "../../utils";
import useStyles from "./ChooseStage.styles";
import sticker1 from "./stickers/slap.png";
import sticker2 from "./stickers/hand-print.png";
import sticker3 from "./stickers/duck.png";

const stickers = [sticker1, sticker2, sticker3].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url, id: getRnadomId() };
});

function ChooseStage({
  title,
  setTitle,
  setSticker,
  sticker,
  onReadyBtnClick,
}) {
  const classes = useStyles();

  const getStickerButtonClassName = (stick) => {
    return sticker && sticker.id === stick.id ? classes.Selected : "";
  };

  return (
    <section className={classes.Section}>
      <div className={classes.Wrapper}>
        <div className={classes.Name}>
          <h2>01</h2>
          <div className={classes.ChooseBox}>
            <p>Give it a name:</p>
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="Name it"
              id="name-input"
              name="name"
              minLength="2"
              maxLength="40"
            />
          </div>
        </div>
        <div className={classes.Stickers}>
          <h2>02</h2>
          <div className={classes.ChooseBox}>
            <p>Select your sticker:</p>
            {stickers.map((stick) => (
              <button
                key={stick.id}
                onClick={() => setSticker(stick)}
                className={getStickerButtonClassName(stick)}
              >
                <img src={stick.url} alt={`Sticker ${stick.id + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <button className={classes.ReadyButton} onClick={onReadyBtnClick}>
        Ready
      </button>
    </section>
  );
}

export default ChooseStage;
