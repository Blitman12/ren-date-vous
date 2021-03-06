import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: 'column',
    minHeight: "9vh"
  },
  footer: {
    backgroundColor: "#a41a1d",
    textAlign: "center",
    width: "100%",
    position: "fixed",
    bottom: 0,
    color: "white"
  },
});

export default function Footer() {
  const classes = useStyles();

  let newDate = new Date()
  let year = newDate.getFullYear();

  return (
    <footer className={classes.container}>
      <BottomNavigation
        sx={{ width: "auto", height: "auto" }}
        className={classes.footer}
      >
        <Typography variant="h7" component="div">
          <FavoriteBorderIcon fontSize="small" />
          RenDATEvous Team. All Rights Reserved. Copyright &copy; 2022-{year}
        </Typography>
      </BottomNavigation>
    </footer>
  );
}
