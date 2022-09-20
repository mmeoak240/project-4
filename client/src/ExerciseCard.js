const ExerciseCard = ({ exercise }) => {
	const renderCard = (
		<li>
			<img src={exercise.image} alt={exercise.name} />
			<h5>{exercise.name}</h5>
			<p>{exercise.description}</p>
		</li>
	);
};

export default ExerciseCard;
