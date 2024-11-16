import axios from "axios";
import { create } from "zustand";

const CACHE_DURATION = 5 * 60 * 1000; // Cache data for 5 minutes

const homeStore = create((set, get) => ({
  coins: [],
  market: [],
  lastFetchedCoins: null,
  lastFetchedMarket: null,

  fetchCoins: async () => {
    const { lastFetchedCoins, coins } = get();
    const now = Date.now();

    // Check if data is fresh and return cached data if so
    if (lastFetchedCoins && now - lastFetchedCoins < CACHE_DURATION) {
      console.log("Using cached coins data");
      return coins;
    }

    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      );
      set({ coins: res.data, lastFetchedCoins: now });
      console.log("Fetched fresh coins data");
    } catch (error) {
      console.error("Error fetching coins", error);
    }
  },

  fetchMarket: async () => {
    const { lastFetchedMarket, market } = get();
    const now = Date.now();

    // Check if data is fresh and return cached data if so
    if (lastFetchedMarket && now - lastFetchedMarket < CACHE_DURATION) {
      console.log("Using cached market data");
      return market;
    }

    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad"
      );
      set({ market: res.data, lastFetchedMarket: now });
      console.log("Fetched fresh market data");
    } catch (error) {
      console.error("Error fetching market", error);
    }
  },
}));

export default homeStore;
