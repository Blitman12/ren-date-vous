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
import Auth from '../../utils/auth'

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
          {location.pathname.length > 1 ? "" : <img src={RenDATEvous} alt="hero" />}
          <Toolbar>
            {landingLocation.pathname === "/" ? "" : <img src={Ren} alt="hero" />}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                <Button color="inherit">Home</Button>
              </Link>
            </Typography>
            <Grid xs={2}>
              {Auth.loggedIn() ?
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/saved"
                >
                  <Button color="inherit">My Dates</Button>
                </Link>
                : null}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                <Button color="inherit">About</Button>
              </Link>
              {Auth.loggedIn() ? <Button color="inherit" onClick={Auth.logout}>Logout</Button> : null}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
