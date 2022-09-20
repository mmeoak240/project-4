import React, { useState, useEffect } from "react";

const ExerciseContainer = () => {
	const [exercises, setExercises] = useState();

	useEffect(() => {
		fetch("/exercises")
			.then((r) => r.json())
			.then((data) => setExercises(data));
	}, []);

	<div>
		{exercises.map((exercise) => (
			<ExerciseCard exercise={exercise} />
		))}
	</div>;
};

export default ExerciseContainer;
