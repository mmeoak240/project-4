import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import NavBar from "./NavBar";

const ExerciseContainer = ({ user, setUser, exercises }) => {
	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 style={{ color: "white" }}>Exercises</h1>
				<div id="exerciseContainer">
					{exercises.map((exercise) => (
						<ExerciseCard exercise={exercise} key={exercise.id} />
					))}
				</div>
			</div>
		</>
	);
};
export default ExerciseContainer;
