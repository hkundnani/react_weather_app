import React from "react";
import { render } from "react-dom";
import SearchBar from "./SearchBar";
import Display from "./Display";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      weatherData: mockData,
      cityData: [],
      error: null,
      city: "Tallahassee",
      country: ""
    };
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  };

  fetchCityId = () => {
    fetch("http://localhost:3000/data", {
      method: "POST",
      body: JSON.stringify({ city: this.state.city }),
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cityData: data.data
        });
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${
          this.state.cityData[0].id
        }&units=metric&appid=881cfd5c3c9f39939f9def98c0486eeb`;
        // return fetch(weatherURL);
        console.log(weatherURL);
      });
    //   .then(response => response.json())
    //   .then(
    //     result => {
    //       this.setState({
    //         isLoaded: true,
    //         weatherData: result
    //       });
    //     },
    //     error => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   );
  };

  componentDidMount() {
    this.fetchCityId();
  }
  render() {
    return (
      <div>
        <div className="header-bar">
          <h2>Weather Service</h2>
        </div>
        <div>
          <SearchBar
            city={this.state.city}
            country={this.state.country}
            handleCityChange={this.handleCityChange}
            submitAction={this.fetchCityId}
          />
          <p>{this.state.city}</p>
          <Display weatherData={this.state.weatherData} />
        </div>
      </div>
    );
  }
}

const mockData = {
  coord: {
    lon: -0.13,
    lat: 51.51
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d"
    }
  ],
  base: "stations",
  main: {
    temp: 8.53,
    pressure: 1026,
    humidity: 52,
    temp_min: 6.11,
    temp_max: 10
  },
  visibility: 10000,
  wind: {
    speed: 5.7,
    deg: 90
  },
  clouds: {
    all: 40
  },
  dt: 1555168343,
  sys: {
    type: 1,
    id: 1502,
    message: 0.0076,
    country: "GB",
    sunrise: 1555132184,
    sunset: 1555181526
  },
  id: 2643743,
  name: "London",
  cod: 200
};

render(<Weather />, document.getElementById("root"));
