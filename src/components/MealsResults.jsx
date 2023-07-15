const MealsResults = ({ selected }) => {
	return (
		<section className="results">
			<ul className="results-list">
				{selected.map((item, index) => (
					<li key={'selected-meal-' + index}>
						{/* <button className="meal-button" onClick={() => alert(item.name)}> */}
						{item.name}
						{/* </button> */}
					</li>
				))}
			</ul>
		</section>
	);
};

export default MealsResults;
