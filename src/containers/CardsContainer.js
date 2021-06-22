import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { fetchGlobalData } from "../api";
import { useState } from "react";

export default function CardsContainer() {
  const [globalData, setGlobalData] = useState(Object);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGlobalData();

      setGlobalData(response);
    };

    fetchData();
  }, []);
  return <Cards data={globalData} />;
}
