import { useState, useRef } from 'react';
import './App.css';
import axios from "axios";
import WeatherInfo from './components/informations/WeatherInfo';
import Weatherfivedays from './components/Weatherfivedays/Weatherfivedays';

function App() {
  const [weather, setWeather] = useState({});
  const [weatherfiver, setWeatherfive] = useState({});
  
  const inputRef = useRef(null);

  async function searchCity() {
    const city = inputRef.current.value;
    const key = 'd4d0ff0d12f9a3d0480d088cfd969ffc';
    
    // URLs para as APIs de clima atual e previsão de 5 dias
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;  
    const urlfive = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      // Requisição para clima atual
      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);

      // Requisição para previsão de 5 dias
      const apiInfoFive = await axios.get(urlfive);
      setWeatherfive(apiInfoFive.data); // Atualizando o estado para previsão de 5 dias
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {/* Renderização condicional dos componentes */}
      {weather && Object.keys(weather).length > 0 && <WeatherInfo weather={weather} />}
      {weatherfiver && Object.keys(weatherfiver).length > 0 && <Weatherfivedays weatherfiver={weatherfiver} />}
    </div>
  );
}

export default App;
