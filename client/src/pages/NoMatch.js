import { makeStyles } from '@mui/styles'
import React from 'react'
import notfound from '../assets/404.png'

const useStyles = makeStyles({
    title: {
        color: "white",
        textAlign: "center",
        marginBottom: "50px"
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: "0 auto",
        width: "50%"
    },
    image: {
        width: '100vw'
    },
    text: {
        color: "white",
        textAlign: "center"
    }
})

export default function NoMatch() {
    const classes = useStyles()
    return (
        <>
            <h1 className={classes.title}>This page was not found</h1>
            <div className={classes.imageContainer}>
                <img src={notfound} alt="page not found" className={classes.image} />
            </div>
            <p className={classes.text}>**Come back later, our hard at work developers might have made this a page!**</p>
        </>
    )
}
