import React, { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import NavBar from "./NavBar";

const ExerciseContainer = () => {
	const [user, setUser] = useState("");
	// const [exercises, setExercises] = useState([]);

	// useEffect(() => {
	// 	fetch("/exercises")
	// 		.then((r) => r.json())
	// 		.then(setExercises);
	// }, []);

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 style={{ color: "white" }}>Exercise</h1>
			</div>
		</>
	);
};
export default ExerciseContainer;
