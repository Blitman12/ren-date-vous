import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Heart from "../assets/heart.png";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';


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
    const [loginForm, setLoginForm] = useState({ email: "", password: "" })
    const [registerForm, setRegisterForm] = useState({ email: "", password: "", username: "" })
    const [login, { error: loginError }] = useMutation(LOGIN_USER)
    const [addUser, { error: registerError }] = useMutation(ADD_USER)


    const handleLogin = event => {
        const { name, value } = event.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    const handleRegister = event => {
        const { name, value } = event.target
        setRegisterForm({
            ...registerForm,
            [name]: value
        })
    }

    const handleLoginSubmit = async event => {
        event.preventDefault()
        try {
            const { data } = await login({
                variables: { ...loginForm }
            })
            console.log(data)
            Auth.login(data.loginUser.token)
        } catch (error) {
            console.error(error)
        }
    }

    const handleRegisterSubmit = async event => {
        event.preventDefault()
        try {
            const { data } = await addUser({
                variables: { ...registerForm }
            })
            console.log(data)
            Auth.login(data.addUser.token)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
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
                            type="email"
                            name="email"
                            value={loginForm.email}
                            variant="outlined"
                            className={classes.textField}
                            onChange={handleLogin}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            name="password"
                            value={loginForm.password}
                            variant="outlined"
                            className={classes.textField}
                            onChange={handleLogin}
                        />
                        <Button variant="contained" className={classes.buttons} onClick={handleLoginSubmit}>
                            Lets go
                        </Button>
                        {loginError && <p>Login Error: double check your credentials and try again</p>}
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
                            type="username" 
                            name="username"
                            onChange={handleRegister}
                            value={registerForm.username}
                            variant="outlined"
                            className={classes.textField}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            type="email" 
                            name="email"
                            onChange={handleRegister}
                            value={registerForm.email}
                            variant="outlined"
                            className={classes.textField}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            type="password" 
                            name="password"
                            onChange={handleRegister}
                            value={registerForm.password}
                            variant="outlined"
                            className={classes.textField}
                        />
                        <Button variant="contained" className={classes.buttons} onClick={handleRegisterSubmit}>
                            Signup
                        </Button>
                        {registerError && <p>An error occurred: please try again</p>}
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Landing;
