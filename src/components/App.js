import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/GetForecast";
import SearchForm from "./SearchForm";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  useEffect(() => {
    setErrorMessage("");
    getForecast(setSelectedDate, setForecasts, setLocation, setErrorMessage);
  }, [location]);

  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        onSubmit={handleCitySearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            // eslint-disable-next-line react/jsx-no-bind
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
