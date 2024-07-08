import "../WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";

const forecast = [
	{
		day: "Mon",
		conditions: "Sunny",
		time: "Morning",
	},
	{
		day: "Tue",
		conditions: "Clear",
		time: "Night",
	},
	{
		day: "Wed",
		conditions: "Stormy",
		time: "All Day",
	},
	{
		day: "Thu",
		conditions: "Overcast",
		time: "Evening",
	},
	{
		day: "Fri",
		conditions: "Cloudy",
		time: "Night",
	},
];

const WeatherData = function ({ index }) {
	return (
		<>
			<h2>{forecast[index].day}</h2>
			<p>
				<span>Time: {forecast[index].time} </span>
			</p>
			<p>
				<span>Conditions: {forecast[index].conditions} </span>
			</p>
		</>
	);
};

export default WeatherData;
