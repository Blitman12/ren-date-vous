import React from 'react';
import Dates from '../components/Dates';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    title: {
        textAlign: "center",
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
});

const data = [0, 2, 3, 4, 5]


export default function SavedDates() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.title}> Category </h1>
            <div className={classes.dateContainer}>
                {data && data.map(date => {
                    return <Dates />
                })}
            </div>
        </div >
    )
}