import React from "react";
import Product from "./Product";

const Home = () => {
  const arr = [2, 4, 6, 8];
  return (
    <div>
      {arr.map((item) => (
        <Product value={item} />
      ))}
    </div>
  );
};

export default Home;
