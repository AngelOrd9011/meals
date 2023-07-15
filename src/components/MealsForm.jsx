import classNames from 'classnames';
import { MEALS } from '../constants';

const MealsForm = ({ setSelected, setMeals, count, setCount, season, setSeason, meals }) => {
	const onExecution = () => {
		let _meals = [...meals];
		let _selected = [];
		for (let i = 1; i <= count; i++) {
			let randomItem = Math.floor(Math.random() * _meals.length);
			_selected.push(_meals[randomItem]);
			_meals.splice(randomItem, 1);
		}
		setSelected(_selected);
	};

	const onChangeSeason = () => {
		let _season = season === 'HOT' ? 'COLD' : 'HOT';
		setSeason(_season);
		setMeals(() => {
			return MEALS.filter((item) => item.season === _season || item.season === 'ANY');
		});
	};

	const onCountChange = (value) => {
		let _value = Number(value);
		if (_value > 10) _value = 10;
		if (_value < 0) _value = 1;
		setCount(_value);
	};

	return (
		<>
			<section className="options">
				<div className="season-button">
					<span className={classNames('season-emoji', { opacity: season === 'COLD' })}>🥵</span>
					<label className="switch">
						<input type="checkbox" onChange={onChangeSeason} />
						<span className="slider"></span>
					</label>
					<span className={classNames('season-emoji', { opacity: season === 'HOT' })}>🥶</span>
				</div>
				<div className="count-button">
					<label htmlFor="count" className="small-text">
						No. de resultados{' '}
					</label>
					<input type="number" id="count" name="count" value={count} min="1" max="10" onChange={(e) => onCountChange(e.target.value)} />
				</div>
			</section>
			<section className="play-button">
				<button onClick={onExecution}>Ejecutar</button>
			</section>
		</>
	);
};

export default MealsForm;
