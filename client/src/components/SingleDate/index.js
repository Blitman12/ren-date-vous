import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActions, IconButton, Rating } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFDCD1",
    border: "2px solid #805373",
    borderRadius: "10%",
    boxShadow: "#A2B3D6 10px 10px 100px 20px",
    color: "#a41a1d",
  },
  icon: {
    marginLeft: "auto",
    marginTop: "180px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "70px"
  },
  button: {
    display: "flex",
    marginTop: "180px"
  }
});

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#CBAB5B",
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

const SingleDate = () => {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <div className={classes.container}>
      <Card  sx={{ maxWidth: "80%" }} className={classes.card}>
        <Stack direction={{ xs: "column", sm: "row"}}
        spacing={{ xs: 1, sm: 4, md: 1 }}
        height={{sm: "400px"}}
      >
          <CardMedia
            component="img"
            image="https://www.sampleposts.com/wp-content/uploads/2020/12/Romantic-Date-Ideas.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Date Category: Outdoors
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Bacon ipsum dolor amet strip steak turkey pork ball tip turducken
              flank jowl bacon landjaeger tongue porchetta drumstick tri-tip.
              Alcatra andouille tenderloin salami strip steak sausage drumstick
              picanha swine capicola spare ribs rump shank jowl pork loin.
              Tenderloin ground round turducken burgdoggen, jowl kielbasa short
              loin pancetta shoulder porchetta andouille swine ribeye salami.
              {/* note to renDATEvous Team max character for description on these cards are 456, otherwise it will knock the rating and save button off. Thank you */}
            </Typography>
            <CardActions>
              <Box className={classes.button}
                sx={{
                  "& > legend": { mt: 2 },
                  width: 200,
                  display: "flex",
                  alignItems: "center",
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
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
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
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
};

export default SingleDate;
