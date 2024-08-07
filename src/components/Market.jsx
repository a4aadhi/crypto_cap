import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeStore from "../stores/homeStore";

const Market = () => {
  const { market, fetchMarket } = homeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    fetchMarket();
  }, [fetchMarket]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = market.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      name="Market"
      className="bg-gradient-to-t from-secondary-200 to-secondary-100 w-full h-screen"
    >
      <div className="flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full w-full">
          <h1 className="text-md pb-8 sm:text-3xl font-bold text-white text-center">
            Market Update
          </h1>
          <div className="w-full overflow-x-auto">
            <table className="min-w-full text-white text-lg md:text-xl">
              <thead>
                <tr className="bg-secondary-300">
                  <th className="px-4 py-2"></th>
                  <th className="px-4 py-2 text-left">Coin</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">24h Change</th>
                  <th className="px-4 py-2 text-left">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center px-4 py-2 text-white">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  currentItems.map((coin) => (
                    <tr key={coin.id} className="bg-secondary-100 hover:bg-secondary-200">
                      <td className="px-4 py-2">
                        <Link to={`/show/${coin.id}`}>
                          <img className="w-12 md:w-16 mx-auto" src={coin.image} alt={coin.name} />
                        </Link>
                      </td>
                      <td className="px-4 py-2">
                        <Link to={`/show/${coin.id}`}>{coin.name}</Link>
                      </td>
                      <td className="px-4 py-2">
                        <Link to={`/show/${coin.id}`}>${coin.current_price.toFixed(2)}</Link>
                      </td>
                      <td
                        className={`px-4 py-2 ${
                          coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        <Link to={`/show/${coin.id}`}>{coin.price_change_percentage_24h.toFixed(2)}%</Link>
                      </td>
                      <td className="px-4 py-2">
                        <Link to={`/show/${coin.id}`}>${coin.market_cap.toLocaleString()}</Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-secondary-300 hover:bg-secondary-400 text-white font-bold py-2 px-4 rounded-l"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="bg-secondary-300 hover:bg-secondary-400 text-white font-bold py-2 px-4 rounded-r"
              onClick={nextPage}
              disabled={indexOfLastItem >= market.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
