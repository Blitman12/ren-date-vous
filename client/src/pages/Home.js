import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../assets/placeholder.png";

const useStyles = makeStyles({
  title: {
    color: "black",
    textAlign: "center",
  },
  homeContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 40,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "400px",
    height: "500px",
    marginTop: 40,
  },
  buttons: {
    marginTop: "80px",
  },
  dates: {
    border: "solid",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
  },
  card: {
    marginTop: 15,
    backgroundColor: "#FFDCD1",
    border: "2px solid #805373",
    borderRadius: "10%",
    boxShadow: "#A2B3D6 5px 5px 80px 10px",
    color: "#a41a1d",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h1>
      Find Your Adventure
      </h1>
      <div className={classes.homeContainer}>
        <Box className={classes.buttonContainer}>
          <Button className={classes.buttons} size='large' variant="contained">
            Random
          </Button>
          <Button className={classes.buttons} size='large' variant="contained">
            Categories
          </Button>
        </Box>

        <Box className={classes.container}>
          <div className={classes.dates}>
            <h2 className={classes.dateTitle}>Your Top Dates</h2>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                height="300"
                image={placeholder}
                alt="Date image here"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Date Name Here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date Description here
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                height="300"
                image={placeholder}
                alt="Date image here"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Date Name Here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date Description here
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                height="300"
                image={placeholder}
                alt="Date image here"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Date Name Here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date Description here
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Box>
      </div>
    </div>
  );
}
