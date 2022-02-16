import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActions, IconButton, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@mui/styles'
import SaveIcon from '@mui/icons-material/Save';


const useStyles = makeStyles({
    title: {
        textAlign: 'center'
    },
    card: {
        margin: '0 auto',
        backgroundColor: '#FFDCD1',
        marginTop: '50px',
        border: '2px solid #805373',
        borderRadius: '10%',
        boxShadow: "#d299ac 20px 20px 80px 60px",
        color: '#a41a1d'
    },
    icon: {
        marginLeft: 'auto'
    },
    randomButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
})

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


const SingleDate = () => {
    const classes = useStyles()
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);
    return (
        <div>
            <h1 className={classes.title}>Date Name</h1>
            <Card sx={{ maxWidth: 345 }} className={classes.card}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Date Category: Outdoors
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Bacon ipsum dolor amet strip steak turkey pork ball tip turducken flank jowl bacon landjaeger tongue porchetta drumstick tri-tip. Alcatra andouille tenderloin salami strip steak sausage drumstick picanha swine capicola spare ribs rump shank jowl pork loin. Tenderloin ground round turducken burgdoggen, jowl kielbasa short loin pancetta shoulder porchetta andouille swine ribeye salami.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
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
            </Card>
        </div>
    )
}

export default SingleDate;