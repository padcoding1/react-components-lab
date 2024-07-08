// src/App.jsx
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
	const counter = Array.from("01234");

	return (
		<>
			<h1>Local Weather</h1>
			<section>
				{counter.map((index) => (
					<WeatherForecast key={index} index={index} />
				))}
			</section>
		</>
	);
};

export default App;
