import React from "react";
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Dates from '../components/Dates'

const data = [0, 1, 2]

const useStyles = makeStyles({
  title: {
    color: "black",
    textAlign: "center",
  },
  subTitle: {
    display: 'flex',
    justifyContent: 'center'
  },
  buttons: {
    margin: '10px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  link: {
    textDecoration: 'none'
  },
  cardContainer: {
    display: 'flex',
    marginTop: '60px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>
        Find Your Adventure
      </h1>
      <div className={classes.buttonContainer}>
        <Link to="/Random" className={classes.link}>
          <Button className={classes.buttons} size='large' variant="contained">
            Random
          </Button>
        </Link>
        <Link to="Categories" className={classes.link}>
          <Button className={classes.buttons} size='large' variant="contained">
            Categories
          </Button>
        </Link>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.subTitle}>
          <h2>Top Three Dates</h2>
        </div>
        <div className={classes.dateContainer}>
          {data && data.map(date => {
            return <Dates key={date} />
          })}
        </div>
      </div>
    </div>
    // </div>
  );
}
