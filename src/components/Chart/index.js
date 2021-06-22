import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.css";
import { fetchDailyData } from "../../api";

export default function Chart({
  data: { confirmed, recovered, deaths },
  country,
}) {
  const [dailyData, setDailyData] = useState(Array);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDailyData();

      setDailyData(response);
    };

    fetchData();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "olive",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["rgb(251, 176, 64)", "green", "red"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <section className="mt-2 mb-2">
      <h1 className="text-center">Chart</h1>
      {country ? barChart : lineChart}
    </section>
  );
}
