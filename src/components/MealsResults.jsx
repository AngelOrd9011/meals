const MealsResults = ({ selected }) => {
	return (
		<section className="results">
			<ul className="results-list">
				{selected.map((item) => (
					<li>{item.name}</li>
				))}
			</ul>
		</section>
	);
};

export default MealsResults;
