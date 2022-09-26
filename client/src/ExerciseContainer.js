import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import NavBar from "./NavBar";

const ExerciseContainer = ({ user, setUser, exercises }) => {
	const [reviews, setReviews] = useState([]);

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 style={{ color: "white" }}>Exercises</h1>
				<li>
					{exercises.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							setReviews={setReviews}
							key={exercise.id}
						/>
					))}
				</li>
			</div>
		</>
	);
};
export default ExerciseContainer;
