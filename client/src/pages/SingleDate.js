import React from 'react';
import Date from '../components/Date';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
      textAlign: "center",
    },
});


export default function SingleDate() {
    const classes = useStyles();
return (
    <div> 
        <h1 className={classes.title}>  Single Date </h1>
        <Date></Date>
    </div>
)
}