import React, { useEffect } from "react";
import homeStore from "../stores/homeStore";

const Home = () => {
  const { coins, fetchCoins } = homeStore();

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  return (
    <div
      name="home"
      className="bg-gradient-to-t from-secondary-100 to-secondary-200 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-3xl font-bold text-white text-center">
            Start and Build Your Crypto Portfolio Here
          </h1>

          <p className="text-gray-500 py-4 max-w-md sm:text-2xl text-center">
            Only at cryptoCap, you can build a good portfolio and learn best
            practices about cryptocurrency.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-8 text-center py-8 px-4 sm:px-0">
            {coins.length === 0 ? (
              <p className="text-white">Loading...</p>
            ) : (
              coins.map((coin) => (
                <div
                  key={coin.id}
                  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-secondary-300 cursor-pointer shadow-black hover:shadow-xl transition-all"
                >
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-20 mx-auto"
                  />
                  <p className="mt-4 text-white">{coin.name}</p>
                  <p className="mt-2 text-gray-300">${coin.current_price}</p>
                  <p
                    className={`mt-2 ${
                      coin.price_change_percentage_24h >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)} %
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
