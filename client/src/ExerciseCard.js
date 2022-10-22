import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, onDeleteExercise, user }) => {
	const handleDeleteClick = (exercise) => {
		// console.log(review);
		fetch(`/exercises/${exercise.name}`, {
			method: "DELETE",
		}).then((r) => {
			if (r.ok) {
				onDeleteExercise(exercise.id);
			}
		});
	};

	const renderExercise = (
		<div>
			<img src={exercise.image} alt={exercise.name} />
			<h2 style={{ color: "white" }} id="cardTitle">
				{exercise.name}
			</h2>
		</div>
	);

	return (
		<div className="exerciseCard" key={exercise.id}>
			{user.admin ? (
				<button
					onClick={() => handleDeleteClick(exercise)}
					style={{
						width: 60,
						height: 37,
						fontSize: 15,
						paddingTop: 3,
						paddingBottom: 3,
					}}
				>
					Delete
				</button>
			) : null}
			<p>{renderExercise}</p>

			<Link to={`/exercises/${exercise.name}`}>More Info</Link>
		</div>
	);
};

export default ExerciseCard;
