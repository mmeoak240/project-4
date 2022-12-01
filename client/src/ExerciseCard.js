import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreInfo from "./MoreInfo";

const ExerciseCard = ({
	exercise,
	onDeleteExercise,
	user,
	setUser,
	onReviewSubmit,
	handleUpdateReview,
	onDeleteReview,
}) => {
	const handleDeleteClick = (exercise) => {
		// console.log(review);
		fetch(`/exercises/${exercise.id}`, {
			method: "DELETE",
		}).then((r) => {
			if (r.ok) {
				onDeleteExercise(exercise.id);
			}
		});
	};

	const [infoFlag, setInfoFlag] = useState(false);

	const handleInfoClick = () => {
		setInfoFlag((infoFlag) => !infoFlag);
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
			{infoFlag ? (
				<MoreInfo
					exercise={exercise}
					client={user}
					setUser={setUser}
					onReviewSubmit={onReviewSubmit}
					onDeleteReview={onDeleteReview}
					handleUpdateReview={handleUpdateReview}
				/>
			) : null}
			<button onClick={handleInfoClick} id="reviewBtn">
				{infoFlag ? "Close" : "More Info"}
			</button>

			{/* <Link to={`/exercises/${exercise.name}`}>More Info</Link> */}
		</div>
	);
};

export default ExerciseCard;
