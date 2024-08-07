import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        console.error('Error fetching coin details:', error);
      }
    };

    fetchCoin();
  }, [coinId]);

  if (!coin) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-t from-secondary-100 to-secondary-200 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-t from-secondary-200 to-secondary-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-secondary-300 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">{coin.name}</h1>
        <div className="flex justify-center mb-6">
          <img src={coin.image.large} alt={coin.name} className="w-32 h-32" />
        </div>
        <div className="text-center text-white">
        <p className="text-2xl mb-2">
            <span className="font-semibold">Name : </span> {coin.name.toUpperCase()}
          </p>
          <p className="text-2xl mb-2">
            <span className="font-semibold">Symbol:</span> {coin.symbol.toUpperCase()}
          </p>
          <p className="text-2xl mb-2">
            <span className="font-semibold">Current Price:</span> ${coin.market_data.current_price.usd.toLocaleString()}
          </p>
          <p className="text-2xl mb-2">
            <span className="font-semibold">Market Cap:</span> ${coin.market_data.market_cap.usd.toLocaleString()}
          </p>
          <p
            className={`text-2xl mb-2 ${
              coin.market_data.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            <span className="font-semibold">24h Change:</span> {coin.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="text-2xl mb-2">
            <span className="font-semibold">Description:</span> {coin.description.en}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Show;
