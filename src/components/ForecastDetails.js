import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details">
      {forecast((item) => (
        <ForecastDetails
          key={item.date}
          date={item.date}
          maxtemperature={item.temperature.max}
          mintemperature={item.temperature.min}
          humidity={item.humidity}
          windspeed={item.wind.speed}
          winddirection={item.wind.direction}
        />
      ))}
    </div>
  );
}

//   const { date, temperature, humidity, wind } = props;
//   const formattedDate = new Date(date).toDateString();

//   return (
//     <div className="forecast-details" data-testid="forecast-details">
//       <div className="forecast-details__date">{formattedDate}</div>
//       <div className="forecast-details-__maxtemperature">
//         {temperature.max}
//         &deg;C
//       </div>
//       <div className="forecast-details__mintemperature">
//         {temperature.min}
//         &deg;C
//       </div>
//       <div className="forecast-details__humidity">{humidity}</div>
//       <div className="forecast-details__wind">
//         {(wind.speed, wind.direction)}
//       </div>
//     </div>
//   );

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.objectOf(
    PropTypes.shape({
      date: PropTypes.object.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.shape.apply({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }).isRequired,
    })
  ),
};
