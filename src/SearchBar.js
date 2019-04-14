import React from "react";

class SearchBar extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.submitAction();
  };
  render() {
    return (
      <form>
        {/* <label>
          Country
          <input
            value={this.props.country}
            onChange={this.handleOnCountryChange}
          />
        </label> */}
        <label>
          City
          <input
            id="city"
            value={this.props.city}
            onChange={this.props.handleCityChange}
            placeholder="City"
          />
        </label>
        <button onClick={this.handleFormSubmit}>Search</button>
      </form>
    );
  }
}

export default SearchBar;
