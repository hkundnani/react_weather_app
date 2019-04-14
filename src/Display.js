import React from "react";

class Display extends React.Component {
  render() {
    const weatherData = this.props.weatherData;
    // const weather = weatherData.weather
    return (
      <div className="">
        <h2>Weather in {weatherData.name}</h2>
        <h2>
          <img
            src={`http://openweathermap.org/img/w/${
              weatherData.weather[0].icon
            }.png`}
          />
          {weatherData.main.temp}&#176;C
        </h2>
        <p>{weatherData.weather[0].description}</p>
        <table>
          <tbody>
            <tr>
              <td>Pressure</td>
              <td>{weatherData.main.pressure}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{`${weatherData.main.humidity}%`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;
