import React from "react";

const Trade = () => {
  return (
    <div
      id="Trade"
      className="bg-gradient-to-t from-secondary-100 to-secondary-200 min-h-screen flex items-center justify-center p-6"
    >
      <div className="max-w-5xl w-full bg-secondary-300 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Trade Cryptocurrency with Confidence
        </h1>
        <p className="text-lg text-white mb-6 text-center">
          Cryptocurrency trading opens up a world of financial opportunities. From buying and selling popular coins to exploring advanced strategies, trading empowers you to make the most of market movements.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {/* Trading Feature Cards */}
          <div className="w-64 bg-secondary-200 rounded-lg p-6 text-center shadow-md hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Real-Time Data</h2>
            <p className="text-white">
              Access live price updates for popular cryptocurrencies.
            </p>
          </div>
          <div className="w-64 bg-secondary-200 rounded-lg p-6 text-center shadow-md hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Low Fees</h2>
            <p className="text-white">
              Enjoy competitive trading fees to maximize your gains.
            </p>
          </div>
          <div className="w-64 bg-secondary-200 rounded-lg p-6 text-center shadow-md hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Secure Platform</h2>
            <p className="text-white">
              Trade with peace of mind on a secure and trusted platform.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-secondary-200 hover:text-primary transition-all duration-300">
            Start Trading Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trade;
