import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import { NavLink } from "react-router-dom";

const ExerciseCard = ({ exercise, reviews }) => {
	const [reviewFlag, setReviewFlag] = useState(false);
	const [moreInfoFlag, setMoreInfoFlag] = useState(false);

	const handleReviewClick = () => {
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
			{reviewFlag ? <ReviewForm /> : null}
			<button onClick={handleReviewClick} id="reviewBtn">
				{reviewFlag ? "Close" : "Review"}
			</button>
			<NavLink to="exercise/:id">More Info</NavLink>
		</>
	);
};

export default ExerciseCard;
