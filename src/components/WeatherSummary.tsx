import { FC, useState, useEffect } from "react";
import { Weather, WeatherLocation } from "../model/Weather";
import { readForecast } from "../services/WeatherService";
import { WeatherEntry } from "../components/WeatherEntry";

interface WeatherSummaryProps {
    location: WeatherLocation | null;
}

export const WeatherSummary: FC<any> = ({ weather }) => {
    const [forecast, setForecast] = useState<Weather[] | null>(null);
    if (!location || !forecast) return null;



    return (
        <div>
            <h2>Forecast</h2>
            <div>
                <ol>
              
                </ol>
            </div>
        </div>
    );
};