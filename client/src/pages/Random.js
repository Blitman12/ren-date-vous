import React from "react";
import Date from "../components/Date";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  randomButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
}
});

export default function SingleDate() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}> Date Name </h1>
      <Date></Date>
      <div className={classes.randomButton}>
        <Button variant="contained" size="large">
          Random
        </Button>
      </div>
    </div>
  );
}
