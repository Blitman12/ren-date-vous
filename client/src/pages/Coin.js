import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    color:"white"
  },
  rules: {
    border: "6px solid black",
    width: 400,
    textAlign: "center",
    height: 460
  },
  rulesFont: {
    fontSize: 20,
    textAlign: "left",
  },
});

export default function Coin() {
  const classes = useStyles();

  const [coin, setCoin] = useState("");
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  const flipCoin = () => {
    setCoin("");
    const random = Math.random();
    if (random < 0.5) {
      console.log(random);
      setCoin("heads");
      setHeadsCount(headsCount + 1);
    } else {
      console.log(random);
      setCoin("tails");
      setTailsCount(tailsCount + 1);
    }
  };

  return (
    <div className={classes.title}>
      <h1>Coin Toss</h1>
      <h2>Give me a flip!</h2>
      <Box className="container">
        <div className={classes.rules}>
          <h1>Rules:</h1>
          <h2> Heads: Turn Right</h2>
          <h2> Tails: Turn Left</h2>
          <ol className={classes.rulesFont}>
            <li>Choose a number from 1 to 20 </li>
            <li>
              Get in your Car and have your passenger flip the coin every time
              you're coming up on a turn up to the number you chose.
            </li>
            <li>
              Once you reach the final number turn into the nearest parking lot.
            </li>
            <li>
              Your date is here! Ended up at a petsmart? Find something fun to
              do!
            </li>
          </ol>
        </div>
        <div className="coinContainer">
          <div id="coin" className={`animate-${coin}`}>
            <div id="heads" className="heads"></div>
            <div id="tails" className="tails"></div>
          </div>
        </div>
      </Box>
          <div className={classes.title}>
          <h1>Flip coin</h1>
          <Button size="large" variant="contained" onClick={flipCoin}>
            Coin Toss
          </Button>
          <p>
            Heads: <span>{headsCount}</span> Tails: <span>{tailsCount}</span>
          </p>
          <p>
            <span id="status"></span>
          </p>
          </div>
    </div>
  );
}
