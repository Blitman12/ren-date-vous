import React from 'react';
import SingleDate from '../components/SingleDate';
import { makeStyles } from '@mui/styles';
import Stars from "../assets/stars.png";

const useStyles = makeStyles({
    title: {
      color: "white",
      textAlign: "center",
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


export default function SingleDateCard() {
    const classes = useStyles();
return (
    <div className={classes.imageContainer}> 
        <h1 className={classes.title}>  Single Date </h1>
        <SingleDate></SingleDate>
    </div>
)
}