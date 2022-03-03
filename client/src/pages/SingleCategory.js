import React from "react";
import Date from "../components/Date";
import { makeStyles } from "@mui/styles";
import { useQuery } from "@apollo/client";
import { GET_CATDATES } from "../utils/queries";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
  },
  dateContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    textAlign: "center",
  },
});

export default function SingleCategory() {
  const classes = useStyles();
  const { category } = useParams();

  const { loading, error, data } = useQuery(GET_CATDATES, {
    variables: {
      category: category,
    },
  });

  if (loading) return null;
  if (error) return `Error: ${error}`;
  return (
    <div>
      <h1 className={classes.title}> {category} </h1>
      <div className={classes.dateContainer}>
        {data.categorizedDates &&
          data.categorizedDates.map((date) => {
            const { title, description, image, _id, rating } = date;
            console.log(rating)
            return (
              <Date
                key={_id}
                title={title}
                description={description}
                image={image}
                review={rating}
                id={_id}
              />
            );
          })}
      </div>
    </div>
  );
}
