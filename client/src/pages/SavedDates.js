import React from 'react';
import Date from '../components/Date';
import { makeStyles } from '@mui/styles'
import { useQuery } from '@apollo/client';
import { GET_SAVEDATES } from '../utils/queries';
import Auth from '../utils/auth';
import { useHistory } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import NoDates from '../assets/Nodates.png'

const useStyles = makeStyles({
    title: {
        color: "white",
        textAlign: "center",
    },
    dateContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    loader: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
});


export default function SavedDates() {
    const classes = useStyles();
    const history = useHistory()
    if (!Auth.loggedIn()) {
        history.push("/")
    }
    const { loading, data, refetch } = useQuery(GET_SAVEDATES, {
        fetchPolicy: 'network-only'
    })

    if (loading) {
        return <div className={classes.loader}><PacmanLoader color="red" /></div>
    }

    return (
        <div>
            <h1 className={classes.title}> Saved Dates</h1>
            <div className={classes.dateContainer}>
                {data.savedDates.length === 0 ? <div><img src={NoDates} alt="No Dates"   style={{width: "300px"}}/></div> : data && data.savedDates.map(date => {
                    //* ? = optional chaining: checks if rating exists in the chain, otherwise will be 0
                    const review = date.reviews[0]?.rating || 0
                    return <Date key={date._id} title={date.title} description={date.description} image={date.image} id={date._id} review={review} refetch={refetch} />
                })}
            </div>
        </div>
    )
}