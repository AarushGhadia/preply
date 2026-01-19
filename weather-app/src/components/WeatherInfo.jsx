function WeatherInfo({ weather }) {
  const { current } = weather;

  const infoItems = [
    { label: "Wind", value: `${current.wind_kph} km/h` },
    { label: "Pressure", value: `${current.pressure_mb} mb` },
    { label: "Visibility", value: `${current.vis_km} km` },
    { label: "UV Index", value: current.uv },
    { label: "Cloud", value: `${current.cloud}%` },
    { label: "Gust", value: `${current.gust_kph} km/h` },
  ];

  return (
    <div className="bg-gray-100 rounded-3xl p-6">
      <div className="grid grid-cols-3 gap-4">
        {infoItems.map((item, index) => (
          <div key={index} className="text-center py-2">
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="font-semibold text-black">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInfo;
