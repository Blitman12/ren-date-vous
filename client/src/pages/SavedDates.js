import React from 'react';
import Dates from '../components/Dates';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
      textAlign: "center",
    },
});


export default function SavedDates() {
    const classes = useStyles();
return (
    <div> 
        <h1 className={classes.title}> Saved Dates</h1>
        <Dates></Dates>
    </div>
)
}