import React, { useState, useEffect } from "react";

const ExerciseContainer = () => {
	const [exercises, setExercises] = useState();

	useEffect(() => {
		fetch("/exercises")
			.then((r) => r.json())
			.then((data) => setExercises(data));
	}, []);
};

export default ExerciseContainer;
