import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import NavBar from "./NavBar";

const ExerciseContainer = ({
	user,
	setUser,
	exercises,
	handleDeleteExercise,
	onDeleteReview,
	onReviewSubmit,
	handleUpdateReview,
}) => {
	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 className="exerciseTitle" style={{ color: "white" }}>
					Exercises
				</h1>
				<div id="exerciseContainer">
					{exercises.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							key={exercise.id}
							onDeleteExercise={handleDeleteExercise}
							user={user}
							onReviewSubmit={onReviewSubmit}
							onDeleteReview={onDeleteReview}
							handleUpdateReview={handleUpdateReview}
						/>
					))}
				</div>
			</div>
		</>
	);
};
export default ExerciseContainer;
