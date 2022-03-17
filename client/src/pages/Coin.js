import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";


const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  rules: {
    border: "6px solid black",
    width: 400,
    textAlign: "center",
    height: 420,
  },
  rulesFont: {
    fontSize: 20,
  },
});

export default function Coin() {
  const classes = useStyles();

  const [coin, setCoin] = useState("");
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)

  useEffect(() => {
    console.log(coin)
  }, [coin])

  const flipCoin = () => {
    setCoin("")
    const random = Math.random();
    if (random < 0.5) {
      console.log(random)
      setCoin("heads");
      setHeadsCount(headsCount + 1)
    } else {
      console.log(random)
      setCoin("tails");
      setTailsCount(tailsCount + 1)
    }
  };

  return (
    // <div className={classes.title}>
    //   <h1>Coin Toss</h1>
    //   <h2>Give me a flip!</h2>
    //   <Box className="container">
    //     <div className={classes.rules}>
    //       <h1>Rules:</h1>
    //       <ol className={classes.rulesFont}>
    //         <li>Choose a number from 1 to 20 </li>
    //         <li>
    //           Get in your Car and have your passenger flip the coin every time
    //           you're coming up on a turn up to the number you chose.
    //         </li>
    //         <li>
    //           Once you reach the final number turn into the nearest parking lot.
    //         </li>
    //         <li>
    //           Your date is here! Ended up at a petsmart? Find something fun to
    //           do!
    //         </li>
    //         <li>Heads: Go Right</li>
    //         <li>Tails: Go Left</li>
    //       </ol>
    //     </div>
    //     <div className="coinContainer">
    //       <div id="coin" className={coin} key={+new Date()}>
    //         <div id="tails" className="side-a"></div>
    //         <div id="heads" className="side-b"></div>
    //       </div>
    //       <h1>Flip a coin</h1>
    //       <Button size="large" variant="contained" onClick={FlipCoin}>
    //         Coin Toss
    //       </Button>
    //     </div>
    //   </Box>
    // </div>

    <div className='container'>
      <h2>Confused about your life decision? Just flip this coin!</h2>
      <h2>Btw, don't forget to assign something to both sides.</h2>
      <p>And don't take your life decision based on this stupid coin flip. I was kidding.</p>
      <div id="coin" className={`animate-${coin}`}>
        <div id="heads" className="heads"></div>
        <div id="tails" className="tails"></div>
      </div>
      <button id="flip" onClick={flipCoin}>Flip this thing</button>
      <p>Heads: <span>{headsCount}</span> Tails: <span>{tailsCount}</span></p>
      <p><span id="status"></span></p>
    </div>
  );
}
