import { useParams } from "react-router-dom";
import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
// import EditForm from "./EditForm";
import NavBar from "./NavBar";
import Review from "./Review";

function MoreInfo({
	exercises,
	client,
	setUser,
	reviews,
	onReviewSubmit,
	onDeleteReview,
	handleUpdateReview,
}) {
	const [reviewFlag, setReviewFlag] = useState(false);

	const { name } = useParams();

	const handleReviewClick = () => {
		console.log(client);
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	const selectedExercise = exercises.filter(
		(exercise) => exercise.name === name
	);

	const exerciseReviews = reviews.filter(
		(review) => review.exercise_id === selectedExercise[0].id
	);

	return (
		<>
			<NavBar user={client} setUser={setUser} />
			<div>
				{selectedExercise.map((exercise, index) => (
					<div key={index}>
						<h1>{exercise.name}</h1>
						<img src={exercise.image} alt={exercise.name} />
						<p style={{ color: "white", width: 500 }}>{exercise.description}</p>
					</div>
				))}
				<ul>
					{exerciseReviews.map((review) => (
						<Review
							review={review}
							onDeleteReview={onDeleteReview}
							handleUpdateReview={handleUpdateReview}
							client={client}
						/>
					))}
				</ul>
				{reviewFlag ? (
					<ReviewForm
						exercise={selectedExercise}
						client={client}
						onReviewSubmit={onReviewSubmit}
						setReviewFlag={setReviewFlag}
					/>
				) : null}
				<button onClick={handleReviewClick} id="reviewBtn">
					{reviewFlag ? "Close" : "Review"}
				</button>
			</div>
		</>
	);
}

export default MoreInfo;
