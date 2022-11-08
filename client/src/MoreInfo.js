import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
	const [exerciseReviews, setExerciseReviews] = useState([]);

	const { name } = useParams();

	const filteredExercise = exercises.filter(
		(exercise) => exercise.name === name
	);

	useEffect(() => {
		const filteredReviews = reviews.filter(
			(review) => review.exercise_id === filteredExercise[0].id
		);
		setExerciseReviews(filteredReviews);
	}, [reviews]);

	const handleReviewClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	console.log(filteredExercise);

	return (
		<>
			<NavBar user={client} setUser={setUser} />
			<div>
				{filteredExercise.map((exercise, index) => (
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
						exercise={filteredExercise}
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
