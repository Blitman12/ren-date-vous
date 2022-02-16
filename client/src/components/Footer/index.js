import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#a41a1d",
    textAlign: "center",
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <BottomNavigation
        sx={{ width: "auto", height: "auto" }}
        className={classes.footer}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FavoriteBorderIcon />
          RenDATEvous Team. All Rights Reserved. Copyright &copy; 2022-
         <script>document.write(new Date().getFullYear())</script>
        </Typography>
      </BottomNavigation>
    </footer>
  );
}