import React from "react";
import Date from "../components/Date";
import { makeStyles } from "@mui/styles";
import { useQuery } from "@apollo/client";
import { GET_CATDATES } from "../utils/queries";
import { useHistory, useParams } from "react-router-dom";
import Auth from '../utils/auth';
import PacmanLoader from "react-spinners/PacmanLoader";

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center"
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    textAlign: "center",
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default function SingleCategory() {
  const classes = useStyles();
  const history = useHistory()
  const { category } = useParams();
  if (!Auth.loggedIn()) {
    history.push("/")
  }

  const { loading, error, data, refetch } = useQuery(GET_CATDATES, {
    variables: {
      category: category,
    },
    fetchPolicy: 'network-only'
  });

  if (loading) return <div className={classes.loader}><PacmanLoader color="red" /></div>;
  if (error) return `Error: ${error}`;
  return (
    <div>
      <h1 className={classes.title} style={{ textTransform: "capitalize" }}> {category} </h1>
      <div className={classes.dateContainer}>
        {data.categorizedDates &&
          data.categorizedDates.map((date) => {
            const { title, description, image, _id, rating } = date;
            return (
              <Date
                key={_id}
                title={title}
                description={description}
                image={image}
                review={rating}
                id={_id}
                refetch={refetch}
              />
            );
          })}
      </div>
    </div>
  );
}
