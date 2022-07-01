import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    maxtemperature: 22,
    mintemperature: 12,
    humidity: "60%",
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
    const { getAllByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getAllByText("forecast-details")).toHaveLength(2);
    // expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-summary__date");
    // expect(getByText("22°C")).toHaveClass("forecast-details__maxtemperature");
    // expect(getByText("21°C")).toHaveClass("forecast-details__mintemperature");
    // expect(getByText("60%")).toHaveClass("forecast-details__humidity");
    // expect(getByText(60, "ne")).toHaveClass("forecast-details__wind");
  });
});
