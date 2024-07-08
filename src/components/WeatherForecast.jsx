import "../WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";
import WeatherData from "./WeatherData";
const WeatherForecast = function ({ index, forecast }) {
	return (
		<div className="weather">
      <WeatherIcons key={index} index={index} />
			<WeatherData key={index} index={index} />
		</div>
	);
};

export default WeatherForecast;
