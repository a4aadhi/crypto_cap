import axios from "axios";
import { create } from "zustand";

const homeStore = create((set, get) => ({
  coins: [],
  market: [],
  lastFetchedCoins: null, // Timestamp for the last coins fetch
  lastFetchedMarket: null, // Timestamp for the last market fetch
  fetchCoins: async () => {
    const { lastFetchedCoins, coins } = get();
    const currentTime = Date.now();

    // Only fetch if the last fetch was more than 5 minutes ago
    if (!lastFetchedCoins || currentTime - lastFetchedCoins > 5 * 60 * 1000) {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=4&page=1&sparkline=false"
        );
        set({ coins: res.data, lastFetchedCoins: currentTime });
      } catch (error) {
        console.error("Error fetching coins", error);
      }
    } else {
      console.log("Using cached coins data", coins);
    }
  },
  fetchMarket: async () => {
    const { lastFetchedMarket, market } = get();
    const currentTime = Date.now();

    // Only fetch if the last fetch was more than 5 minutes ago
    if (!lastFetchedMarket || currentTime - lastFetchedMarket > 5 * 60 * 1000) {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad"
        );
        console.log("Fetched market status:", res.status);
        console.log("Fetched market:", res.data);
        set({ market: res.data, lastFetchedMarket: currentTime });
      } catch (error) {
        console.error("Error fetching market", error);
      }
    } else {
      console.log("Using cached market data", market);
    }
  },
}));

export default homeStore;
