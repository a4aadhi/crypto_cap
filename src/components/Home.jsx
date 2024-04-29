import React from "react";

const Home = () => {
    const techs = [
        {
          id: 1,
          src: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
          title: "Bitcoin",
          style: "shadow-orange-500",
        },
        {
            id: 2,
            src: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
            title: "Ethereum",
            style: "shadow-blue-500",
            },
            {
            id: 3,
            src: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
            title: "Tether",
            style: "shadow-yellow-500",
            },
            {
            id: 4,
            src: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
            title: "BNB",
            style: "shadow-green-500",
        }
        
      ];
  return (
    <div
      name="home"
      className=" bg-gradient-to-t from-secondary-100 to-secondary-200 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-3xl font-bold text-white text-center">
            Start and Bulid Your Crypto Portolifo Here
          </h1>

          <p className="text-gray-500 py-4 max-w-md sm:text-2xl text-center">
            Only at cryptoCap, You can build a good portfolio and learn best
            practices about cryptocurrency.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-8 text-center py-8 px-4 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
        

          
s
      
    </div>
  );
};

export default Home;
