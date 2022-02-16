import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RenDateVous from '../../assets/rendatevous.png'



const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <img src={RenDateVous} alt="hero" />
                    <Toolbar>
                        <FavoriteBorderIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            RenDATEvous
                        </Typography>
                        <Button color="inherit">Dates</Button>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>

            </Box>

        </>
    )
}

export default Navbar;