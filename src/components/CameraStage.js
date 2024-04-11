import useStyles from "./Styles";

function CameraStage({
  section3Ref,
  handleVideoRef,
  handleCanvasRef,
  handleCapture,
}) {
  const classes = useStyles();

  return (
    <section
      className={`${classes.Camera} ${classes.Section}`}
      ref={section3Ref}
    >
      <h2>03</h2>
      <p>Slap your self!</p>

      <video ref={handleVideoRef} />
      <canvas
        ref={handleCanvasRef}
        width={2}
        height={2}
        onClick={handleCapture}
      />
    </section>
  );
}

export default CameraStage;
