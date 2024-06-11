import axios from "axios";
import { create } from "zustand";

const homeStore = create((set) => ({
  coins: [],
  market: [],
  fetchCoins: async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=4&page=1&sparkline=false"
      );
      //console.log('Fetched coins:', res.data);
      set({ coins: res.data });
    } catch (error) {
      console.error("Error fetching coins", error);
    }
  },
  fetchMarket: async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad"
      );

      console.log("Fetched market status:", res.status);
      console.log("Fetched market:", res.data);

      set({ market: res.data });
    } catch (error) {
      console.error("Error fetching market", error);
    }
  },
  fetchCoinById: async (coinId) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      console.log("Fetched coin:", res.data);
      return res.data;
    } catch (error) {
      console.error(`Error fetching coin with id ${coinId}`, error);
      throw error;
    }
  },
}));

export default homeStore;
