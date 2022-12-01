import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
// import EditForm from "./EditForm";
import NavBar from "./NavBar";
import Review from "./Review";

function MoreInfo({
	exercise,
	exercises,
	client,
	setUser,
	onReviewSubmit,
	onDeleteReview,
	handleUpdateReview,
}) {
	// const [testExercise, setTestExercise] = useState({
	// 	name: "",
	// 	image: "",
	// 	description: "",
	// 	reviews: [],
	// 	clients: [],
	// });

	const { name } = useParams();

	// useEffect(() => {
	// 	console.log("working");
	// 	const selectedExercise = exercises.find((exercise) => {
	// 		console.log(name);
	// 		console.log(exercise.name);
	// 		return exercise.name === name;
	// 	});
	// 	setTestExercise(selectedExercise);
	// }, []);

	// console.log(testExercise);

	const [reviewFlag, setReviewFlag] = useState(false);

	const handleReviewClick = () => {
		setReviewFlag((reviewFlag) => !reviewFlag);
	};

	return (
		<>
			{/* <NavBar user={client} setUser={setUser} /> */}
			<div>
				<div key={exercise.id}>
					<h1 style={{ color: "white" }}>{exercise.name}</h1>
					{/* <img src={exercise.image} alt={exercise.name} /> */}
					<p style={{ color: "white", width: 500 }}>{exercise.description}</p>
				</div>
				{/* {filteredExercise.map((exercise, index) => (
					<div key={index}>
						<h1>{exercise.name}</h1>
						<img src={exercise.image} alt={exercise.name} />
						<p style={{ color: "white", width: 500 }}>{exercise.description}</p>
					</div>
				))} */}
				<ul>
					{exercise.reviews.map((review) => (
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
						exercise={exercise}
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
