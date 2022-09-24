import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

const ExerciseCard = ({ exercise, reviews }) => {
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

	const renderReviews = <p></p>;
	return (
		<>
			<p>{renderExercise}</p>
			{reviewFlag ? <ReviewForm /> : null}
			<button onClick={handleClick} id="reviewBtn">
				{reviewFlag ? "Close" : "Review"}
			</button>
		</>
	);
};

export default ExerciseCard;
