import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { DATES } from "../utils/queries";
import Date from "../components/Date";
import Auth from '../utils/auth';
import { useHistory } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";


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
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default function SingleDateRandom() {
  const classes = useStyles();
  const history = useHistory()
  if (!Auth.loggedIn()) {
      history.push("/")
  }
  const { loading, error, data, refetch } = useQuery(DATES, {
    fetchPolicy: 'network-only',
  });
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    if (!loading && data) {
      const allDates = data.dates
      const randomDate = allDates[Math.floor(Math.random() * allDates.length)]
      setCurrentDate(randomDate)
    }
  }, [loading, data])


  const randomDate = () => {
    if (currentDate) {
      const {title, description, image, _id, rating} = currentDate
      return <Date title={title} description={description} image={image} key={_id} id={_id} refetch={refetch} review={rating}></Date>
    }
  }

  if (loading) return <div className={classes.loader}><PacmanLoader color="red" /></div>;
  if (error) return `error: ${error}`;
  const aRandomDate = data.dates[Math.floor(Math.random() * data.dates.length)]

  return (
    <div>
      <h1 className={classes.title}>Random Date</h1>
      {randomDate()}
      <div className={classes.randomButton}>
        <Button variant="contained" size="large" onClick={() => setCurrentDate(aRandomDate)}>
          Random
        </Button>
      </div>
    </div>
  );
}
