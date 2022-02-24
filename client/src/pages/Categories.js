import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import date from "../assets/romantic.jpg";
import { Link } from "react-router-dom";

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
          <Link to="/category/Home">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Home
            </Button>
          </Link>
          <Link to="/category/Outdoors">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Outdoors
            </Button>
          </Link>
          <Link to="/category/Indoors">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Indoors
            </Button>
          </Link>
          <Link to="/category/Wild">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Wild
            </Button>
          </Link>
          <Link to="/category/Food">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Food
            </Button>
          </Link>
          <Link to="/category/Romantic">
            <Button
              className={classes.buttons}
              variant="contained"
              size="large"
            >
              Romantic
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
}
