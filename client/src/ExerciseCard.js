const ExerciseCard = ({ exercise }) => {
	const renderExercise = (
		<li>
			<img src={exercise.image} alt={exercise.name} />
			<h5 style={{ color: "white" }}>{exercise.name}</h5>
			<p>{exercise.description}</p>
		</li>
	);
	return <ul>{renderExercise}</ul>;
};

export default ExerciseCard;
