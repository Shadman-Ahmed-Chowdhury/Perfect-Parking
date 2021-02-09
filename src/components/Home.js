import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 63px)",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/1635.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: "62px",
    left: "0",
    width: "100%",
    height: "calc(100vh - 63px)",
  },
  center: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    textShadow: "1px 1px 2px blue, 0 0 1em yellow, 0 0 0.2em yellow",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <div className={classes.center}>
          <h1 style={{ fontSize: "6rem" }}>Perfect Parker</h1>
          <h2 style={{ fontSize: "3rem" }}>Track Your Parking Lot</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
