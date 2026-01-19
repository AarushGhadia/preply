import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const API_KEY = "b312f71ed8734433b1b81149231202";

function App() {
  const [city, setCity] = useState("Delhi, India");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error("City not found!");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xs">
        <div className="text-center mb-5">
          <span className="text-4xl">🌤️</span>
          <h1 className="text-xl font-semibold text-gray-700 mt-1">Weather</h1>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="text-center mt-8">
            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-600 text-center text-sm rounded-xl">
            {error}
          </div>
        )}

        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
