import "./Weatherfivedays.css";

function Weatherfivedays({ weatherfiver }) {
  let dailyforcast = {};

 
  for (let forecast of weatherfiver.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    
    if (!dailyforcast[date]) {
      dailyforcast[date] = forecast; 
    }
  }

  
  const nextFiveDays = Object.values(dailyforcast).slice(0, 5);

  return (
    <div className="tudo">
      <p className="pe">Próximos 5 dias</p>
      {nextFiveDays.map((forecast, index) => {
    
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temperature = Math.round(forecast.main.temp);
        const description = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;

        return (
          <div key={index} className="forecast">
            <p>{date}</p>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt={description}
            />
            <p>{description}</p>
            <p>{temperature}°C</p>
          </div>
        );
      })}
    </div>
  );
}

export default Weatherfivedays;
