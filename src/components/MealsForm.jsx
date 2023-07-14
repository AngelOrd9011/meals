import classNames from 'classnames';
import { MEALS } from '../constants';

const MealsForm = ({ setSelected, setMeals, count, setCount, season, setSeason, meals }) => {
	const onExecution = () => {
		let _selected = [];
		for (let i = 1; i <= count; i++) {
			let randomItem = Math.floor(Math.random() * meals.length);
			_selected.push(meals[randomItem]);
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
					<input type="number" id="count" name="count" value={count} min="1" max="10" onChange={(e) => setCount(e.target.value)} />
				</div>
			</section>
			<section className="play-button">
				<button onClick={onExecution}>Ejecutar</button>
			</section>
		</>
	);
};

export default MealsForm;
