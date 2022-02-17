import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import placeholder from "../assets/placeholder.png";

const useStyles = makeStyles({
  title: {
    color: "#A87901",
    fontSize: "30px",
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
    width: "500px",
    height: "500px",
  },
  buttons: {
    width: "50%",
    marginTop: "80px",
    fontSize: "20px",
    border: "solid"
  },
  dates: {
    border: "solid",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto"
  },
  card: {
    marginTop: 40
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <h1>
        <FavoriteIcon sx={{ fontSize: 50, color: "white" }} /> Find Your
        Adventure <FavoriteIcon sx={{ fontSize: 50, color: "white" }} />
      </h1>
      <div className={classes.homeContainer}>
        <div className={classes.container}></div>
        <Box className={classes.buttonContainer}>
          <Button className={classes.buttons}>Random</Button>
          <Button className={classes.buttons}>Categories</Button>
        </Box>

        <Box className={classes.buttonContainer}>
          <div className={classes.dates}>
            <Typography
              sx={{ fontSize: 40, fontWeight: "Bold" }}
              className={classes.introText}
            >
              Your Top Dates
            </Typography>

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
