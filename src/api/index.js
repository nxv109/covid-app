import axios from "axios";

import { url } from "../constants/apiUrl";

export const fetchData = async (country) => {
  let changeCountryUrl = url;

  if (country) {
    changeCountryUrl = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(changeCountryUrl);
    const { confirmed, recovered, deaths, lastUpdate } = response.data;

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries/`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
