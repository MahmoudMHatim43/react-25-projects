import React from "react";

function Result({ data, load, err }) {
  return load ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Error: {err}</h1>
  ) : data && data.name ? (
    <div className="weather-result-container">
      <div className="first-line">
        <h1>
          🌍 {data.name}, <span>{data.sys.country}</span>
        </h1>
        <h2>
          🌡️ {data.main.temp} <span>💧 {data.main.humidity}%</span>
        </h2>
      </div>
    </div>
  ) : null;
}
export default Result;
