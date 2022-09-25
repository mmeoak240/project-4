import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, setReviews }) => {
	const [reviewFlag, setReviewFlag] = useState(false);

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
			{reviewFlag ? <ReviewForm setReviews={setReviews} /> : null}
			<button onClick={handleReviewClick} id="reviewBtn">
				{reviewFlag ? "Close" : "Review"}
			</button>
			<Link to={"/exercises/${exercise.name}"}>More Info</Link>
		</>
	);
};

export default ExerciseCard;
