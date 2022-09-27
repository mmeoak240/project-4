import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
	const renderExercise = (
		<li>
			<img src={exercise.image} alt={exercise.name} />
			<h2 style={{ color: "white" }}>{exercise.name}</h2>
		</li>
	);

	return (
		<>
			<p>{renderExercise}</p>

			<Link to={`/exercises/${exercise.name}`}>More Info</Link>
		</>
	);
};

export default ExerciseCard;
