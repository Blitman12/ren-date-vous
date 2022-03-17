import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles({
  rules: {
    border: "6px solid black",
     width: 400,
    textAlign: "center",
    height: 420,
  },
  rulesFont: {
    fontSize: 20,
  }
});

export default function Coin() {
  const classes = useStyles();

  const coin = document.querySelector("#coin");
  const status = document.querySelector("#status");
  const heads = document.querySelector("#headsCount");
  const tails = document.querySelector("#tailsCount");

  let headsCount = 0;
  let tailsCount = 0;

  function deferFn(callback, ms) {
    setTimeout(callback, ms);
  }

  function processResult(result) {
    if (result === "heads") {
      headsCount++;
      heads.innerText = headsCount;
    } else {
      tailsCount++;
      tails.innerText = tailsCount;
    }
    status.innerText = result.toUpperCase();
  }

  function flipCoin() {
    coin.setAttribute("className", "");
    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";
    deferFn(function () {
      coin.setAttribute("className", "animate-" + result);
      deferFn(processResult.bind(null, result), 2900);
    }, 100);
  }

  // const FlipCoin = () => {
  //     const [flip, setFlipCoin] = useState();
  //     const tails = useRef(tails);
  //     const heads = useRef(heads);

  //     const handleClick = () => {
  //         const random = Math.random();
  //         const result = random < 0.5 ? 'heads' : 'tails';
  //           setFlipCoin('className', 'animate-' + result);

  //     };
  // }

  return (
    <Box className="container">
      <div className={classes.rules}>
        <h1>Rules:</h1>
        <ol className={classes.rulesFont}>
        <li>Choose a number from 1 to 20 </li>
        <li>Get in your Car and have your passenger flip the coin every time you're coming up on a turn up to the number you chose. </li>
        <li> Once you reach the final number turn into the nearest parking lot. </li>
        <li> Your date is here! Ended up at a petsmart? Find something fun to do! </li>
        <li>Heads: Go Right</li>
        <li>Tails: Go Left</li>
        </ol>
    </div>
        <div className="coinContainer">
          <h1>Coin Toss</h1>
          <h2>Give me a flip!</h2>
          <div id="coin">
            <div id="heads" className="heads"></div>
            <div id="tails" className="tails"></div>
          </div>
          <Button size="large" variant="contained" id="flip" onClick={flipCoin}>
            Flip Me
          </Button>
          <p>
            Heads: <span id="headsCount">0</span> Tails: {" "}
            <span id="tailsCount">0</span>
          </p>
          <p>
            <span id="status"></span>
          </p>
        </div>
      </Box>
  );
}
