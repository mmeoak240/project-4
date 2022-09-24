import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import NavBar from "./NavBar";

const ExerciseContainer = ({ user, setUser }) => {
	const [exercises, setExercises] = useState([]);
	const [reviews, setReviews] = useState([]);

	const onReview = (reviews) => {
		setReviews(reviews);
	};

	useEffect(() => {
		fetch("/exercises")
			.then((r) => r.json())
			.then((data) => setExercises(data));
	}, []);

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 style={{ color: "white" }}>Exercises</h1>
				<li>
					{exercises.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							reviews={reviews}
							key={exercise.id}
						/>
					))}
				</li>
			</div>
		</>
	);
};
export default ExerciseContainer;
