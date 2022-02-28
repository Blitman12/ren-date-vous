import React from 'react';
import Date from '../components/Date';
import { makeStyles } from '@mui/styles'
import { useQuery } from '@apollo/client';
import { GET_SAVEDATES } from '../utils/queries';

const useStyles = makeStyles({
    title: {
        color: "white",
        textAlign: "center",
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
});


export default function SavedDates() {
    const classes = useStyles();
    const {loading, error, data, refetch} = useQuery(GET_SAVEDATES, {
        fetchPolicy: 'network-only',

    })

    if (loading) {
        return <div>loading...</div>
    }


    return (
        <div>
            <h1 className={classes.title}> Saved Dates</h1>
            <div className={classes.dateContainer}>
                {data && data.savedDates.map(date => {
                    return <Date key={date._id} title={date.title} description={date.description} image={date.image} id={date._id} refetch={refetch}/>
                })}
            </div>
        </div>
    )
}