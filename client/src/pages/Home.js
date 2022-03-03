import React, {useState} from "react";
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Date from '../components/Date'
import { useQuery } from '@apollo/client';
import { GET_SAVEDATES } from '../utils/queries';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles({
  title: {
    color: "white",
    textAlign: "center",
  },
  subTitle: {
    color: "white",
    display: 'flex',
    justifyContent: 'center'
  },
  buttons: {
    margin: '10px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  link: {
    textDecoration: 'none'
  },
  cardContainer: {
    display: 'flex',
    marginTop: '60px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
});

export default function Home() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loading, data, refetch } = useQuery(GET_SAVEDATES, {
    fetchPolicy: 'network-only'
})

  if (loading) {
    return <div>loading...</div>
  }


  return (
    <div>
      <h1 className={classes.title}>
        Find Your Adventure
      </h1>
      <div className={classes.buttonContainer}>
        <Link to="/Random" className={classes.link}>
          <Button className={classes.buttons} size='large' variant="contained">
            Random
          </Button>
        </Link>
        <Button className={classes.buttons} size='large' variant="contained"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categories
            </Button>
            <Menu 
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose} 
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              >
              <Button component={Link} to="/category/Home"  style={{ color: "white"}}> 
              <MenuItem onClick={handleClose}>Home</MenuItem>
              </Button>
              <Button component={Link} to="/category/Outdoors" style={{ color: "white"}}>
              <MenuItem onClick={handleClose}>Outdoors</MenuItem>
              </Button>
              <Button component={Link} to="/category/Indoors" style={{ color: "white"}} >
              <MenuItem onClick={handleClose}>Indoors</MenuItem>
              </Button>
              <Button component={Link} to="/category/Wild" style={{ color: "white"}}>
              <MenuItem onClick={handleClose}>Wild</MenuItem>
              </Button>
              <Button component={Link} to="/category/Food" style={{ color: "white"}}>
              <MenuItem onClick={handleClose}>Food</MenuItem>
              </Button>
              <Button component={Link} to="/category/Romantic" style={{ color: "white"}}>
              <MenuItem onClick={handleClose}>Romantic</MenuItem>
              </Button>
            </Menu>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.subTitle}>
          <h2>Memories <FavoriteIcon color="primary"/></h2>
        </div>
        <div className={classes.dateContainer}>
          {data && data.savedDates.slice(0, 3).map(date => {
            const review = date.reviews[0]?.rating || 0
            return <Date key={date._id} title={date.title} description={date.description} image={date.image} id={date._id} refetch={refetch} review={review}/>
          })}
        </div>
      </div>
    </div>
  );
}
