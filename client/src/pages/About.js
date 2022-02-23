import React from 'react'
import { makeStyles } from '@mui/styles'
import Member from '../components/Member'
import Jen from '../assets/jen.png';
import Nick from '../assets/nick.jpg';
import Luke from '../assets/Luke.jpeg'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '100px',
        marginTop: '100px',
        flexWrap: 'wrap'
    },
    title: {
        color: "white",
        textAlign: "center",
    },
    avatar: {
        margin: '30px',
        width: '100%'
    }
})


const team = [
    {
        img: "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.6435-9/49612804_10215930290924230_4355613411040559104_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=8g1cJWqAUBwAX8Wh6QJ&_nc_ht=scontent.fphx1-2.fna&oh=00_AT_jhvOc-8tOC02_eHlbAzJn3sUVQaQ8_Vmm-nwFblpY1A&oe=6236E163",
        name: "Brad Litman",
        description: "Recent graduate from a Full Stack Boot Camp from UofA along with a Bachelors in Nursing. Happily married with two 'skin' children (hairless cats)",
        github: "https://github.com/Blitman12"
    },
    {
        img: `${Jen}` ,
        name: "Jennifer Lucas",
        description: "Happily married with a little boy, a dog, 3 african spurred tortoises and of course fish. Also a recent graduate from a Full Stack Boot Camp from UofA. ",
        github: "https://github.com/jenmlucas"
    },
    {
        img: `${Luke}`,
        name: "Luke Johnsen",
        description: "Luke is a recent graduate of the University of Arizona Full-Stack Coding Boot Camp and holds a BA in English. When he is not coding he can be found exploring the latest trail systems in Arizona's gorgeous state parks.",
        github: "https://github.com/lukejohnsen"
    },
    {
        img: `${Nick}`,
        name: "Nicholas Kepers",
        description: "I enjoy anything regarding travel and space! Arizona native, recently graduated University of Arizona's coding Boot Camp.",
        github: "https://github.com/Nkepers"
    }
]

export default function About() {
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes.title}>About the renDATEvous Team</h1>
            <div className={classes.container}>
                {team && team.map(member => {
                    return <Member key={member.name} name={member.name} description={member.description} img={member.img} github={member.github} />
                })}
            </div>
        </div>
    )
}

