import React, {FC} from "react";
import {Weather} from "../model/Weather";
import {getIconUrl} from "../services/WeatherService";

export interface WeatherEntryProps {
    weather: Weather;
}

function convertUnixTimeToDate(unixUtc: number): Date {
  return new Date(unixUtc * 1000);
}

export const WeatherEntry: FC<Weather> = ({weather}) =>
  <div>
    <div>---</div>
    <div>
      <strong>{weather}°C</strong>
      <div>({weather}°C / {weather}°C)</div>
    </div>
    <div>Humidity: {weather}%</div>
    {weather.map(condition =>
      <div key={condition.id}>
        <img src={getIconUrl(condition.icon)} alt={condition.main}/> {condition.main} {condition.description}
      </div>)
    }
  </div>;