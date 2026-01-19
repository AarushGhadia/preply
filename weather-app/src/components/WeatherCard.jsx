function WeatherCard({ weather }) {
  const { location, current } = weather;

  return (
    <div className="mt-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg">
      <p className="text-xs text-gray-400">{location.country}</p>
      <h2 className="text-lg font-semibold text-gray-700">{location.name}</h2>

      <div className="flex items-center justify-center gap-2 my-3">
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
          className="w-16 h-16"
        />
        <span className="text-5xl font-light text-gray-700">{Math.round(current.temp_c)}°</span>
      </div>

      <p className="text-gray-500 text-sm mb-4">{current.condition.text}</p>

      <div className="grid grid-cols-4 gap-2 text-xs bg-blue-50 rounded-xl p-3">
        <div>
          <p className="text-gray-400">Feels</p>
          <p className="font-semibold text-gray-600">{Math.round(current.feelslike_c)}°</p>
        </div>
        <div>
          <p className="text-gray-400">Humidity</p>
          <p className="font-semibold text-gray-600">{current.humidity}%</p>
        </div>
        <div>
          <p className="text-gray-400">Wind</p>
          <p className="font-semibold text-gray-600">{current.wind_kph}</p>
        </div>
        <div>
          <p className="text-gray-400">UV</p>
          <p className="font-semibold text-gray-600">{current.uv}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
