import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import date from "../assets/romantic.jpg";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignContent: "center",
  },
  buttons: {
    marginTop: 350,
    fontSize: "20px",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundImage: `url(${date})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    position: "absolute",
  },
});

export default function Categories() {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <div>
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
      </div>
    </div>
  );
}
