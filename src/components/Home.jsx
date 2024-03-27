import React, { useEffect, useState } from "react";
import Coin from "./Product";

const Home = () => {
  const [temp, setTemp] = useState(0);
  const arr = [2, 4, 6, 8];

  useEffect(() => {
    console.log("hello");
  }, [temp]);

  return (
    <div>
      <button onClick={(e) => setTemp(temp + 1)}>press</button>
      {arr.map((item) => (
        <Coin name={"bitcoin"} symbol={"btc"} />
      ))}
      <h1>{temp}</h1>
    </div>
  );
};

export default Home;
