import { useState } from 'react';
import './App.css';
import { MEALS } from './constants';
import MealsList from './components/MealsList';
import MealsForm from './components/MealsForm';
import MealsResults from './components/MealsResults';

function App() {
	const [season, setSeason] = useState('HOT');
	const [meals, setMeals] = useState(() => {
		return MEALS.filter((item) => item.season === season || item.season === 'ANY');
	});
	const [selected, setSelected] = useState([]);
	const [count, setCount] = useState(1);

	return (
		<>
			<header>
				<h1>¿Que comeremos esta semana?</h1>
			</header>
			<main>
				<div className="col">
					<MealsList meals={meals} />
				</div>
				<div className="col">
					<MealsForm
						setSelected={setSelected}
						setMeals={setMeals}
						season={season}
						setSeason={setSeason}
						count={count}
						setCount={setCount}
						meals={meals}
					/>
					<MealsResults selected={selected} />
				</div>
			</main>
		</>
	);
}

export default App;
