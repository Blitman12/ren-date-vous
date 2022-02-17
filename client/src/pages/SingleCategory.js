import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import placeholder from "../assets/placeholder.png";

const useStyles = makeStyles({
  title: {
    color: "#A87901",
    fontSize: "50px",
    textAlign: "center",
    fontWeight: "Bold",
    marginTop: 20
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  cards: {
    marginTop: 50,
    width: 400,
    marginBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text: {
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default function SingleCategory() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}> Outdoors </Typography>

      <div className={classes.cardsContainer}>
        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.cards}>
          <CardMedia component="img" height="250" alt="" image={placeholder} />
          <CardContent>
            <Typography className={classes.cardTitle}>Title</Typography>
            <Typography className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
