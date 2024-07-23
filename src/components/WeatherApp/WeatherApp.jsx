import "./weather.css";
import React from "react";
import Search from "./Search";
import Result from "./Result";
function WeatherApp() {
  const [search, setSearch] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [data, setData] = React.useState(null);
  async function fetchWeather(param) {
    try {
      setLoad(true);
      const APIKEY = "bfe4de2bb039792a314cb7c40087a62f";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=${APIKEY}`
      );
      const result = await response.json();
      console.log(result);
      setData(result);
      setLoad(false);
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
      setLoad(false);
    }
  }
  function handleSearch(param) {
    fetchWeather(param);
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <Result data={data} load={load} err={err} />
    </div>
  );
}

export default WeatherApp;
