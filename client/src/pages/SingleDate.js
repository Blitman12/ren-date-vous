import React from 'react';
import Date from '../components/Date';
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


export default function SingleDate() {
    const classes = useStyles();
return (
    <div className={classes.imageContainer}> 
        <h1 className={classes.title}>  Single Date </h1>
        <Date></Date>
    </div>
)
}