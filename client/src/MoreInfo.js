import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";

function MoreInfo({ exercises, client, reviews, onReviewSubmit }) {
	const [reviewFlag, setReviewFlag] = useState(false);
	const [editFlag, setEditFlag] = useState(false);
	const { name } = useParams();
	const handleReviewClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	const handleEditClick = () => {
		setEditFlag((editFlag) => !editFlag);
	};

	const selectedExercise = exercises.filter(
		(exercise) => exercise.name === name
	);

	const exerciseReviews = reviews.filter(
		(review) => review.exercise_id === selectedExercise[0].id
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
			<ul>
				{exerciseReviews.map((review) => (
					<li style={{ color: "white" }}>
						{review.username} - {review.content}
						<button onClick={handleEditClick} style={{ width: 50 }}>
							{editFlag ? "Close" : "Edit"}
						</button>
					</li>
				))}
			</ul>
			{reviewFlag ? (
				<ReviewForm
					exercise={selectedExercise}
					client={client}
					onReviewSubmit={onReviewSubmit}
				/>
			) : null}
			<button onClick={handleReviewClick} id="reviewBtn">
				{reviewFlag ? "Close" : "Review"}
			</button>
		</div>
	);
}

export default MoreInfo;
