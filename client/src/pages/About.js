import React from 'react'
import { makeStyles } from '@mui/styles'
import Member from '../components/Member'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '100px',
        marginTop: '100px',
        flexWrap: 'wrap'
    },
    title: {
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
        img: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        name: "Jennifer Lucas",
        description: "Lorem Ipsum BAcon Ipsum Lorem Ipsum BAcon Ipsum Lorem Ipsum BAcon Ipsum Lorem Ipsum BAcon Ipsum",
        github: "https://github.com/jenmlucas"
    },
    {
        img: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        name: "Luke Johnsen",
        description: "Lorem Ipsum BAcon Ipsum Lorem Ipsum BAcon Ipsum Lorem Ipsum BAcon Ipsum",
        github: "https://github.com/lukejohnsen"
    },
    {
        img: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        name: "Nicholas Kepers",
        description: "Lorem Ipsum BAcon Lorem Ipsum BAcon Lorem Ipsum BAcon Lorem Ipsum BAcon Lorem Ipsum BAcon Lorem Ipsum BAcon",
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
                    return <Member key={member.name} name={member.name} description={member.description} img={member.img} github={member.github}/>
                })}
            </div>
        </div>
    )
}
