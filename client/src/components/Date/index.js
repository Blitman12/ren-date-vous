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
import { ADD_REVIEW, REMOVE_DATE, SAVE_DATE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: "15px",
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
  },
  "& .MuiRating-iconHover": {
    color: "#A87901",
  },
});

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

export default function SingleCard(props) {
  const classes = useStyles();
  const { image, title, description, id, refetch, review } = props
  const [value, setValue] = useState(review);
  const [hover, setHover] = useState(-1);
  const [savedError, setSavedError] = useState();
  const [saveDate] = useMutation(SAVE_DATE)
  const [addReview] = useMutation(ADD_REVIEW)
  const [removeDate] = useMutation(REMOVE_DATE)

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      await saveDate({
        variables: {
          dateId: id,
        },
      });
    } catch (error) {

      console.log(error)
      let whatError = error.message
      if (whatError === "Date is already saved") {
        setSavedError("This date is already saved")
      } else {
        setSavedError("An error occurred")
      }
    }
    refetch();
  };
  const handleDel = async (event) => {
    event.preventDefault();
    try {
      await removeDate({
        variables: {
          dateId: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
    refetch();
  };
  const handleReview = async (newValue) => {
    try {
      await addReview({
        variables: {
          dateId: id,
          rating: newValue,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();

  return (
    <div onBlur={() => setSavedError("")}>
      <Box>
        <div className={classes.cardsContainer}>
          <Card sx={{ maxWidth: 345 }} className={classes.cards}>
            <CardMedia component="img" height="140" alt="" image={image} />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.text}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={classes.text}
              >
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box
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
                  precision={1}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    handleReview(newValue);
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
              {(() => {
                if (location.pathname === "/saved") {
                  return (
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      className={classes.icon}
                      onClick={handleDel}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )
                } else if (location.pathname === "/home") {
                  return (
                    null
                  )
                } else {
                  return (
                    <>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={classes.icon}
                        onClick={handleSave}
                      >
                        <SaveIcon />
                      </IconButton>
                      <p>{savedError}</p>
                    </>
                  )
                }
              })
                ()}
            </CardActions>
          </Card>
        </div>
      </Box>
    </div>
  );
}
