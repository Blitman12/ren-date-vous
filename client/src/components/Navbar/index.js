import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Ren from "../../assets/ren.png";
import { Link, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import RenDATEvous from "../../assets/rendatevous.png";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
  }, [location]) 
 

  const landingLocation = useLocation();

  useEffect(() => {
  }, [landingLocation])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          {location.pathname.length > 1 ? "" : <img src={RenDATEvous} alt="hero" />  }
          <Toolbar>
            {landingLocation.pathname === "/" ? "" : <img src={Ren} alt="hero" /> }
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Home"
              >
                <Button color="inherit">Home</Button>
              </Link>
            </Typography>
            <Grid xs={4}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/SavedDates"
              >
                <Button color="inherit">My Dates</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Random"
              >
                <Button color="inherit">Random</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/SingleDate"
              >
                <Button color="inherit">SingleDate</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Categories"
              >
                <Button color="inherit">Categories</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/SingleCategory"
              >
                <Button color="inherit">SingleCategory</Button>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/About"
              >
                <Button color="inherit">About</Button>
              </Link>
              <Button color="inherit">Logout</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
