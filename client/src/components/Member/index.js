import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: "white",
    border: "2px solid #805373",
    boxShadow: 24,
    p: 4,
};

const styleBox = {
    bgcolor: '#FFDCD1',
    border: '2px solid #805373',
    p: 4,
    marginTop: '50px',
    borderRadius: "10%",
    boxShadow: "#A2B3D6 10px 10px 100px 20px",
    color: "#a41a1d",
}

const useStyles = makeStyles({
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
})

function About(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles()
    const { name, img, description, github } = props

    return (
        <Box sx={styleBox}>
            <h1>{name}</h1>
            <div className={classes.avatarContainer}>
                <Avatar
                    alt={name}
                    src={img}
                    sx={{ width: 150, height: 150 }}
                    onClick={handleOpen}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Visit my <a href={github} target="__blank">GitHub</a>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Box>
    )
}



export default About
