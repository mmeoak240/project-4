import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

function MoreInfo({ exercises, client }) {
	const [reviewFlag, setReviewFlag] = useState(false);
	const { name } = useParams();
	const handleReviewClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	const selectedExercise = exercises.filter(
		(exercise) => exercise.name === name
	);

	return (
		<div>
			{selectedExercise.map((exercise, index) => (
				<div key={index}>
					<h1>{exercise.name}</h1>
					<img src={exercise.image} alt={exercise.name} />
					<p style={{ color: "white" }}>{exercise.description}</p>
				</div>
			))}
			{reviewFlag ? (
				<ReviewForm exercise={selectedExercise} client={client} />
			) : null}
			<button onClick={handleReviewClick} id="reviewBtn">
				{reviewFlag ? "Close" : "Review"}
			</button>
		</div>
	);
}

export default MoreInfo;
