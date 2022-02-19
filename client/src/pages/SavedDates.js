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

const data = [0, 1, 2, 4, 5, 6, 7]


export default function SavedDates() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.title}> Saved Dates</h1>
            <div className={classes.dateContainer}>
                {data && data.map(date => {
                    return <Dates key={date} />
                })}
            </div>
        </div>
    )
}