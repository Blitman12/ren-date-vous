import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Member from "../components/Member";
import Jen from "../assets/jen.png";
import Nick from "../assets/nick.jpg";
import Luke from "../assets/Luke.jpeg";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "100px",
    marginTop: "0px",
    flexWrap: "wrap",
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  avatar: {
    margin: "30px",
    width: "100%",
  },
  directions: {
    textAlign: "center",
    color: "white",
    marginTop: 60
  },
  text: {
    marginLeft: 60,
    marginRight: 60,
    fontSize: 20,
    textAlign: "center"
  },
});

const team = [
  {
    img: "https://scontent.fphx1-2.fna.fbcdn.net/v/t1.6435-9/49612804_10215930290924230_4355613411040559104_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0debeb&_nc_ohc=8g1cJWqAUBwAX8Wh6QJ&_nc_ht=scontent.fphx1-2.fna&oh=00_AT_jhvOc-8tOC02_eHlbAzJn3sUVQaQ8_Vmm-nwFblpY1A&oe=6236E163",
    name: "Brad Litman",
    description:
      "Recent graduate from a Full Stack Boot Camp from UofA along with a Bachelors in Nursing. Happily married with two 'skin' children (hairless cats)",
    github: "https://github.com/Blitman12",
    linkedin: "https://www.linkedin.com/in/bradleylitman/"
  },
  {
    img: `${Jen}`,
    name: "Jennifer Lucas",
    description:
      "Happily married with a little boy, a dog, 3 african spurred tortoises and of course fish. Also a recent graduate from a Full Stack Boot Camp from UofA. ",
    github: "https://github.com/jenmlucas",
    linkedin: "https://www.linkedin.com/in/jennifer-m-lucas/"
  },
  {
    img: `${Luke}`,
    name: "Luke Johnsen",
    description:
      "Luke is a recent graduate of the University of Arizona Full-Stack Coding Boot Camp and holds a BA in English. When he is not coding he can be found exploring the latest trail systems in Arizona's gorgeous state parks.",
    github: "https://github.com/lukejohnsen",
    linkedin: "https://www.linkedin.com/in/lukejohnsen/"
  },
  {
    img: `${Nick}`,
    name: "Nicholas Kepers",
    description:
      "I enjoy anything regarding travel and space! Arizona native, recently graduated University of Arizona's coding Boot Camp.",
    github: "https://github.com/Nkepers",
    linkedin: "https://www.linkedin.com/in/nicholas-kepers/"
  },
];

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}> Meet the RenDATEvous Team </h1>
      <Typography className={classes.text}>
        Welcome to RenDATEvous! Have you and your significant other ever been
        sitting on the couch bored out of your minds? You finally get some alone
        time together and you want to go out but have no idea what to do...
        Before you know it, you've wasted your entire date night arguing over
        where to go, what to eat, and googling ideas until your thumbs turn
        blue. Well fear not! We created RenDATEvous to solve all those problems!
        You're no longer going to waste that precious time with indecision! (Nor
        will your friends have to text you to see where they should take their
        new date.) Our site is not only for those older more established couples
        who know everything about one another and the types of dates they enjoy,
        but also those awkward first dates in which you have no idea if they
        will lead to a second, or even worse, having to crawl out of a bathroom
        window to escape from a date gone wrong! That is the heart and purpose
        of our company and website. What started out as nothing more than a way
        for our team to be able to share different date ideas with one another,
        as well as a cure for our own personal boredom, has grown into an
        unceasing desire to offer our help to others! Our efforts don't stop
        here either! We have plans for future developments that will involve
        some exciting new features for those who have accounts on our website.
        So keep your eyes peeled! At RenDATEvous, we will take your next date
        night to places you have never been before!
      </Typography>
      <h3 className={classes.directions}>
        Click our Images!
        <div className={classes.container}>
          {team &&
            team.map((member) => {
              return (
                <Member
                  key={member.name}
                  name={member.name}
                  description={member.description}
                  img={member.img}
                  github={member.github}
                  linkedin={member.linkedin}
                />
              );
            })}
        </div>
      </h3>
    </div>
  );
}
