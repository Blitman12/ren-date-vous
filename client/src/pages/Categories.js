import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  title: {
    color: "#A87901",
    fontSize: "50px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 60
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignContent: "center",
    padding: 50,
  },
  buttons: {
    width: "30%",
    marginTop: "80px",
    fontSize: "20px",
    border: "solid",
  },
});

export default function Categories() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}> Select A Category </Typography>
      <Box className={classes.buttonContainer}>
        <Button className={classes.buttons}> Home </Button>
        <Button className={classes.buttons}> Outdoors </Button>
        <Button className={classes.buttons}> Indoors </Button>
        <Button className={classes.buttons}> Wild </Button>
        <Button className={classes.buttons}> Physical </Button>
        <Button className={classes.buttons}> Romantic </Button>
      </Box>
    </div>
  );
}
