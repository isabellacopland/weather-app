import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      max: 22,
      min: 12,
    },
    humidity: 60,
    wind: {
      speed: 60,
      direction: "ne",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render correct value for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("Max: 22°C")).toHaveClass("forecast-details__maxTemperature");
    expect(getByText("Min: 12°C")).toHaveClass("forecast-details__minTemperature");
    expect(getByText("Humidity: 60%")).toHaveClass("forecast-details__humidity");
    expect(getByText("Speed: 60mph")).toHaveClass("forecast-details__wind_speed");
    expect(getByText("Direction: ne")).toHaveClass("forecast-details__wind_direction");
  });
});
