import React, { useEffect, useState } from "react";
import Coin from "./Product";
import axios from "axios";
import Loader from "./Loader";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoder] = useState(true);
  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&per_page=20"
        );
        console.log(data);
        setCoins(data);
        setLoder(false);
      } catch (error) {
        alert(error);
      }
    };
    fetchAllCoins();
  }, []);

  return (
    <div className="home">
      {loader ? (
        <Loader />
      ) : (
        coins.map((item) => (
          <Coin
            name={item.name}
            symbol={item.symbol}
            imgSrc={item.image}
            price={item.current_price}
            key={item.id}
          />
        ))
      )}
    </div>
  );
};

export default Home;
