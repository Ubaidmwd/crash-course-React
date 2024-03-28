import React from "react";
const Coin = ({ name, symbol, imgSrc, price }) => {
  return (
    <div className="coin">
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{symbol}</p>
      <p>{price}</p>
    </div>
  );
};

export default Coin;
