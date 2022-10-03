import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import EditForm from "./EditForm";

function MoreInfo({
	exercises,
	client,
	reviews,
	onReviewSubmit,
	onDeleteReview,
}) {
	const [reviewFlag, setReviewFlag] = useState(false);
	const [editFlag, setEditFlag] = useState(false);
	const { name } = useParams();

	const handleReviewClick = () => {
		console.log(reviews);
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	const handleEditClick = () => {
		setEditFlag((editFlag) => !editFlag);
	};

	const handleDeleteClick = (review) => {
		console.log(review);
		// 	fetch(`/reviews/${review.id}`, {
		// 		method: "DELETE",
		// 	}).then((r) => {
		// 		if (r.ok) {
		// 			onDeleteReview(review.id);
		// 		}
		// 	});
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
				{exerciseReviews.map((review, index) => (
					<div key={index}>
						<li style={{ color: "white" }}>
							{review.username} - {review.content}
							{/* <button style={{ width: 50 }} onClick={handleDeleteClick(review)}>
								Delete
							</button> */}
							<button onClick={handleEditClick} style={{ width: 50 }}>
								{editFlag ? "Close" : "Edit"}
							</button>
							{editFlag ? (
								<EditForm
									review={review}
									setEditFlag={setEditFlag}
									editFlag={editFlag}
								/>
							) : null}
						</li>
					</div>
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
