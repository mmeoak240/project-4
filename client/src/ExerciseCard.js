import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, setReviews }) => {
	const renderExercise = (
		<li>
			<img src={exercise.image} alt={exercise.name} />
			<h2 style={{ color: "white" }}>{exercise.name}</h2>
		</li>
	);

	return (
		<>
			<p>{renderExercise}</p>

			<Link to={`/exercises/${exercise.id}`}>More Info</Link>
		</>
	);
};

export default ExerciseCard;
