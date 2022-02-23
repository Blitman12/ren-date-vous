import React from "react";
import SingleDate from "../components/SingleDate";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Stars from "../assets/stars.png";

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
  },
  randomButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
},
imageContainer: {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundImage: `url(${Stars})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  position: "absolute",
}
});

export default function SingleDateRandom() {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <h1 className={classes.title}> Date Name </h1>
      <SingleDate></SingleDate>
      <div className={classes.randomButton}>
        <Button variant="contained" size="large">
          Random
        </Button>
      </div>
    </div>
  );
}
