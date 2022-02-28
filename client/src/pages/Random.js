import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Stars from "../assets/stars.png";
import { useQuery } from "@apollo/client";
import { DATES } from "../utils/queries";
import Date from "../components/Date";

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
  const { loading, error, data } = useQuery(DATES);
  if(loading) return null;
  if(error) return `error: ${error}`;
  const {title, description, image, _id} = data.dates[Math.floor(Math.random() * data.dates.length)]

  

  return (
    <div className={classes.imageContainer}>
      <h1 className={classes.title}>{title}</h1>
      <Date title={title} description={description} image={image} key={_id} id={_id}></Date>
      <div className={classes.randomButton}>
        <Button variant="contained" size="large" onClick = {() => window.location.reload()}>
          Random
        </Button>
      </div>
    </div>
  );
}
