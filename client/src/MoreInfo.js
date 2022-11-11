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
	onReviewSubmit,
	onDeleteReview,
	handleUpdateReview,
}) {
	const [reviewFlag, setReviewFlag] = useState(false);

	const { name } = useParams();

	const selectedExercise = exercises.find((exercise) => exercise.name === name);

	// useEffect(() => {
	// 	const filteredReviews = reviews.filter(
	// 		(review) => review.exercise_id === filteredExercise[0].id
	// 	);
	// 	setExerciseReviews(filteredReviews);
	// }, [reviews]);

	const handleReviewClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
		console.log(selectedExercise);
	};

	return (
		<>
			<NavBar user={client} setUser={setUser} />
			<div>
				<div key={selectedExercise.id}>
					<h1>{selectedExercise.name}</h1>
					<img src={selectedExercise.image} alt={selectedExercise.name} />
					<p style={{ color: "white", width: 500 }}>
						{selectedExercise.description}
					</p>
				</div>
				{/* {filteredExercise.map((exercise, index) => (
					<div key={index}>
						<h1>{exercise.name}</h1>
						<img src={exercise.image} alt={exercise.name} />
						<p style={{ color: "white", width: 500 }}>{exercise.description}</p>
					</div>
				))} */}
				<ul>
					{selectedExercise.reviews.map((review) => (
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
						selectedExercise={selectedExercise}
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
