import './MainBord.css';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useState } from 'react';

function MainBord() {

    const[temperature,setTemperature] = useState(0)
    const [Humidity, setHumidity] = useState(0)
    const [Wind, setWind] = useState(0)
    const [UvIndex, setUvIndex] = useState(0)


    

  return (
    <div className='container'>
      <div className='weather'>
        
        <h1>{temperature}°C</h1>
        <h2>Partly Cloudy</h2>
        <p>A beautiful day with some clouds</p>
      </div>

      <div className='component-container'>
        <div className='info-box'>
          <ThermostatIcon className="icon" />
          <h3>Feels Like</h3>
          <p>{temperature}°C</p>
        </div>
        <div className='info-box'>
          <WaterDropIcon className="icon" />
          <h3>Humidity</h3>
          <p>{Humidity}%</p>
        </div>
        <div className='info-box'>
          <AirIcon className="icon" />
          <h3>Wind</h3>
          <p>{Wind} km/h</p>
        </div>
        <div className='info-box'>
          <Brightness5Icon className="icon" />
          <h3>UV Index</h3>
          <p>{UvIndex}</p>
        </div>
      </div>
    </div>
  );
}

export default MainBord;
