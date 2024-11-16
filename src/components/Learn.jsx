import React from "react";

const Learn = () => {
  return (
    <div id="Learn" className="bg-gradient-to-t from-secondary-200 to-secondary-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-secondary-300 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Explore the World of Cryptocurrency
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src="https://rankfi.com/wp-content/uploads/2022/07/Learn-and-Earn-Crypto-Programs.png"
            alt="Crypto Illustration"
            className="w-40 h-40 rounded-full border-4 border-secondary-100 shadow-lg"
          />
        </div>
        <div className="text-center text-white space-y-4">
          <p className="text-2xl mb-2">
            Cryptocurrencies are reshaping the future of finance. From Bitcoin's
            pioneering path to the rise of altcoins, the blockchain revolution
            offers endless opportunities to explore.
          </p>
          <p className="text-lg">
            📈 <span className="font-semibold">Invest Smartly:</span> Understand market
            trends and price changes before making decisions.
          </p>
          <p className="text-lg">
            🌍 <span className="font-semibold">Global Impact:</span> Cryptos are creating
            decentralized solutions that transcend borders.
          </p>
          <p className="text-lg">
            💡 <span className="font-semibold">Did You Know?</span> Over 20,000
            cryptocurrencies exist today, each solving unique challenges!
          </p>
        </div>
        
        <div className="mt-8 border-t border-secondary-200 pt-6 text-center text-white">
          <h2 className="text-3xl font-bold">Join the Movement</h2>
          <p className="mt-2">
            Start your journey into crypto with confidence. Check out detailed
            guides, market trends, and real-time data!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
