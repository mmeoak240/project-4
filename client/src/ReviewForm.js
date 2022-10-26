import React, { useState } from "react";

const ReviewForm = ({ exercise, client, onReviewSubmit, setReviewFlag }) => {
	const [content, setContent] = useState("");
	const [errors, setErrors] = useState([]);

	const selectedExercise = exercise[0];

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	console.log(selectedExercise.id);
	// }

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/reviews", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: client.username,
				content,
				exercise_id: selectedExercise.id,
				client_id: client.id,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((review) => onReviewSubmit(review));
			} else {
				r.json().then((error) => setErrors(error.errors));
			}
			// setReviewFlag(false);
			setContent("");
		});
	}

	return (
		<>
			<label class="label" style={{ color: "white" }}>
				Review
			</label>
			<form onSubmit={handleSubmit}>
				<textarea
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					style={{ width: 700, height: 200, color: "black", fontSize: 16 }}
				/>
				<ul>
					{errors.map((error) => (
						<li>{error}</li>
					))}
				</ul>
				<button type="submit" id="reviewBtn">
					Submit
				</button>
			</form>
		</>
	);
};

export default ReviewForm;
