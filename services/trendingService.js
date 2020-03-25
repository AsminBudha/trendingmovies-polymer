import { TRENDING_URL, API_KEY } from "../constants/api";

export const fetchTrendingByKey = async key => {
  return fetch(`${TRENDING_URL.replace(":key", key)}?api_key=${API_KEY}`);
};
