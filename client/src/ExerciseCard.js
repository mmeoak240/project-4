import React, { useState } from "react";

const ExerciseCard = ({ exercise }) => {
	const [reviewFlag, setReviewFlag] = useState(false);

	const handleClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	const renderExercise = (
		<li>
			<img src={exercise.image} alt={exercise.name} />
			<h5 style={{ color: "white" }}>{exercise.name}</h5>
			<p style={{ color: "white" }}>{exercise.description}</p>
		</li>
	);
	return (
		<>
			<p>{renderExercise}</p>
			{reviewFlag ? <TrailDescription trail={trail} /> : null}
			<button onClick={handleClick}>
				{reviewFlag ? "Hide Description" : "Description"}
			</button>
		</>
	);
};

export default ExerciseCard;
