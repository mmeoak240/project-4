import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
	const renderExercise = (
		<div>
			<img src={exercise.image} alt={exercise.name} />
			<h2 style={{ color: "white" }} id="cardTitle">
				{exercise.name}
			</h2>
		</div>
	);

	return (
		<div className="exerciseCard">
			<p>{renderExercise}</p>

			<Link to={`/exercises/${exercise.name}`}>More Info</Link>
		</div>
	);
};

export default ExerciseCard;
