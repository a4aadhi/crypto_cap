import Home from "./components/Home";
import NavBar from "./components/NavBar";
import homeStore from "./stores/homeStore";
import React from 'react';

function App() {
  const store = homeStore()
  React.useEffect(()=>{
    store.fetchCoins()
    

  },[])
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
