import { Weather, WeatherLocation } from "../model/Weather";
import keys from "../keys";

const api = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
};

export async function readWeather(locationId: number): Promise<Weather> {
    const current = await fetch(`${api.base}/weather?id=${locationId}&APPID=${api.key}&units=metric`);
  
    if (current.status !== 200) throw new Error('Failed to read location data');
  
    return await current.json();
  }

  export async function readForecast(id: number): Promise<Weather[]> {
      const result =  await fetch(`${api.base}/forecast?id=${id}&APPID=${api.key}&units=metric&cnt=8`);

      if (result.status !== 200) throw new Error('Failed to read location data');

      return await result.json();
  }

  export function getIconUrl(code: string): string {
    return `http://openweathermap.org/img/wn/${code}.png`;
  }