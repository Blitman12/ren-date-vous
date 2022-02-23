import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";
import { Box, CardActions, IconButton, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: '15px'
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

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#CBAB5B",
    // #ff6d75
  },
  "& .MuiRating-iconHover": {
    color: "#A87901",
    

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

export default function SingleCard(props) {
    console.log(props.image)
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <div>
      <Box>
        <div className={classes.cardsContainer}>
          <Card sx={{ maxWidth: 345 }} className={classes.cards} >
            <CardMedia
              component="img"
              height="140"
              alt=""
              image={props.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.text}
              >
                {props.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.text}
              >
                {props.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <StyledRating
                  name="customized-color"
                  value={value}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={0.5}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
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
