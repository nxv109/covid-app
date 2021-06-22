import React, { useState, useEffect, useMemo } from "react";
import Cards from "../../Cards";
import { fetchData } from "../../../api";
import CountryPicker from "../../CountryPicker";
import Chart from "../../Chart";

export default function Home() {
  const [data, setData] = useState(Object);
  const [country, setCountry] = useState(String);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetchData();

      setData(response);
    };

    fetchApi();
  }, []);

  const handleChangeCountry = async (country) => {
    const response = await fetchData(country);

    setData(response);
    setCountry(country);
  };

  const CardsMemo = useMemo(() => <Cards data={data} />, [data]);
  const ChartMemo = useMemo(() => <Chart data={data} country={country} />, [
    data,
    country,
  ]);

  return (
    <>
      {CardsMemo}
      <CountryPicker handleChangeCountry={handleChangeCountry} />
      {ChartMemo}
    </>
  );
}
