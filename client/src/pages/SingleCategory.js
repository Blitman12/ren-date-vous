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
      <h1 className={classes.title}> Category </h1>
      <div className={classes.dateContainer}>
        {data.categorizedDates &&
          data.categorizedDates.map((date) => {
            const {title, description, image, _id} = date
            return <Date key={_id} title={title} description={description} image={image} id={_id} />
          })}
      </div>
    </div>
  );
}
