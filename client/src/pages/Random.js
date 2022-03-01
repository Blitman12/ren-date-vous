import React, { useEffect, useState } from "react";
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


  const handleRandomDate = () => {
    if (currentDate) {
      const {title, description, image, _id} = currentDate
      return <Date title={title} description={description} image={image} key={_id} id={_id} refetch={refetch}></Date>
    }
  }

  if (loading) return null;
  if (error) return `error: ${error}`;
  const aRandomDate = data.dates[Math.floor(Math.random() * data.dates.length)]

  return (
    <div className={classes.imageContainer}>
      <h1 className={classes.title}>Random Date</h1>
      {handleRandomDate()}
      <div className={classes.randomButton}>
        <Button variant="contained" size="large" onClick={() => setCurrentDate(aRandomDate)}>
          Random
        </Button>
      </div>
    </div>
  );
}
