import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import placeholder from "../assets/placeholder.png";
import StarIcon from "@mui/icons-material/Star";
import SaveIcon from "@mui/icons-material/Save";
import { Box, CardActions, IconButton, Rating } from "@mui/material";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  cards: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFDCD1",
    border: "2px solid #805373",
    borderRadius: "10%",
    boxShadow: "#A2B3D6 3px 3px 20px 5px",
    color: "#a41a1d",
  },
  text: {
    textAlign: "center",
  },
  icon: {
    marginLeft: "auto",
  },
});

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function SingleCategory() {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <div>
      <h1 className={classes.title}> Outdoors </h1>
      <Box>
      <div className={classes.cardsContainer}>
        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                // width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>

        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                // width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Card  sx={{ maxWidth: 345 }}  className={classes.cards}>
          <CardMedia component="img" height="140" alt="" image={placeholder} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.text}>Title</Typography>
            <Typography variant="body2" color="text.secondary" className={classes.text}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={classes.icon}
            >
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
      </Box>
    </div>
  );
}
