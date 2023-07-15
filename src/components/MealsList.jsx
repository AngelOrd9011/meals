const MealsList = ({ meals }) => {
	const showIngredients = (meal) => {
		let ingredients = '';
		meal.ingredients.forEach((item) => {
			ingredients += item;
		});
		return ingredients;
	};

	return (
		<section className="meals-list">
			<ul>
				{meals.map((meal, index) => {
					return <li key={'meal-' + index}>{meal.name + ' - ' + showIngredients(meal)}</li>;
				})}
			</ul>
		</section>
	);
};

export default MealsList;
