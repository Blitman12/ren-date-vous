import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heart from "../assets/heart.png";
// import RenDATEvous from "../assets/rendatevous.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #805373",
  borderRadius: "10%",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  formContainer: {
    display: "flex",
    flexDirection: "column",
  },
  homeContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "50px",
    flexWrap: "wrap",
  },
  buttonContainer: {
    backgroundColor: "#FFDCD1",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    height: "500px",
    border: "solid 2px #805373",
    borderRadius: "25%",
    boxShadow: "#A2B3D6 10px 10px 100px 30px",
    // rgb(75, 80, 90)
    // #d299ac
  },
  loginRegister: {
    width: "25%",
    margin: "auto auto",
  },
  buttons: {
    width: "30%",
    marginTop: "10px",
  },
  textField: {
    marginTop: "15px",
  },
  title: {
    textAlign: "center",
  },
  introText: {
    padding: "50px",
    textAlign: "center",
  },
  introTextContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const Landing = () => {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);
  return (
    <div>
      {/* <img src={RenDATEvous} alt="hero" /> */}
      <div className={classes.homeContainer}>
        <Box className={classes.buttonContainer}>
          <Button
            onClick={handleOpenLogin}
            variant="contained"
            className={classes.loginRegister}
          >
            Login
          </Button>
          <Button
            onClick={handleOpenRegister}
            variant="contained"
            className={classes.loginRegister}
          >
            Register
          </Button>
        </Box>
        <Box className={classes.buttonContainer}>
          <div className={classes.introTextContainer}>
            <Typography color="primary" className={classes.introText}>
              Bacon ipsum dolor amet pancetta beef ribs meatloaf, drumstick
              boudin turducken kielbasa flank. Jerky short ribs beef, filet
              mignon flank strip steak chicken ribeye swine chuck. Pork chop
              alcatra ribeye pork belly ham salami cupim, ground round chicken
              porchetta biltong drumstick bacon. Meatloaf pastrami burgdoggen
              shank beef ribs.
              <img src={Heart} alt="heart" style={{ height: "300px" }} />
            </Typography>
          </div>
        </Box>
      </div>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.formContainer}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className={classes.title}
            >
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className={classes.textField}
            />
            <Button variant="contained" className={classes.buttons}>
              Lets go
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.formContainer}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className={classes.title}
            >
              Register
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              className={classes.textField}
            />
            <Button variant="contained" className={classes.buttons}>
              Signup
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Landing;
