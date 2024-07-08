import "../WeatherForecast.css";

const weatherIcons = [
	{
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
		imgAlt: "sun icon",
	},
	{
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
		imgAlt: "moon icon",
	},
	{
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
		imgAlt: "clouds with lightning icon",
	},
	{
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
		imgAlt: "sun overcast by clouds icon",
	},
	{
		img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
		imgAlt: "moon overcast by clouds icon",
	},
];

const WeatherIcons = function ({ index }) {
	return (
		<img src={weatherIcons[index].img} alt={weatherIcons[index].imgAlt} />
	);
};

export default WeatherIcons;
