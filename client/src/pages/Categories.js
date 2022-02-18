import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import date from "../assets/romantic.jpg";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignContent: "center",
    padding: 50,
  },
  buttons: {
    marginTop: "50px",
    fontSize: "20px",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: "5%",
    marginTop: 30n,
  },
});

export default function Categories() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}> Select A Category </h1>
      <Box className={classes.buttonContainer}>
        <Button className={classes.buttons} variant="contained" size="large">
          Home
        </Button>
        <Button className={classes.buttons} variant="contained" size="large">
          Outdoors
        </Button>
        <Button className={classes.buttons} variant="contained" size="large">
          Indoors
        </Button>
        <Button className={classes.buttons} variant="contained" size="large">
          Wild
        </Button>
        <Button className={classes.buttons} variant="contained" size="large">
          Food
        </Button>
        <Button className={classes.buttons} variant="contained" size="large">
          Romantic
        </Button>
      </Box>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={date}
          alt="wine"
          style={{ height: "300px" }}
        />
      </div>
    </div>
  );
}
