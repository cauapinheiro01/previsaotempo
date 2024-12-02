import "./estilos.css"


function WeatherInfo({ weather }) {
    
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="tudo">
            <h2>{weather.name}</h2>
            {/* Exibindo o ícone do clima com base nos dados da API */}
            <div className="info">
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} // Versão @2x
                alt={weather.weather[0].description}
/>

                <p className="temperature">{Math.round(weather.main.temp)}°C</p>
            </div >
            <p className="description">{weather.weather[0].description}</p>
            <div className="details">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                <p>Umidade:{weather.main.humidity}%</p>
                <p>Pressão:{weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInfo;
