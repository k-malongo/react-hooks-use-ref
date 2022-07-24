import React, { useEffect, useState, useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const previousPrice = useRef(price)
  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []); 
  useEffect(()=>{
    if (price > previousPrice) {
      setColor("green");
    } else if (price < previousPrice) {
      setColor("red");
    } else {
      setColor("black");
    }
    previousPrice.current=price

  },[price])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
