import React from "react";
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Date from '../components/Date'
import { useQuery } from '@apollo/client';
import { GET_SAVEDATES } from '../utils/queries';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
  },
  subTitle: {
    color: "white",
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

  const { loading, data } = useQuery(GET_SAVEDATES)

  if (loading) {
    return <div>loading...</div>
  }


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
          <h2>Memories <FavoriteIcon color="primary"/></h2>
        </div>
        <div className={classes.dateContainer}>
          {data && data.savedDates.slice(0, 3).map(date => {
            return <Date key={date._id} title={date.title} description={date.description} image={date.image} id={date._id} />
          })}
        </div>
      </div>
    </div>
  );
}
