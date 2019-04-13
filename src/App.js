class Weather extends React.Component {
  render() {
    return (
      <div className="header-bar">
        <h2>Weather Service</h2>
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById("root"));
