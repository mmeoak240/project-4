import React, { useState } from "react";

const EditForm = ({ exercise }) => {
	const [content, setContent] = useState("");

	const selectedExercise = exercise[0];

	function handleSubmit(e) {
		e.preventDefault();
		console.log(selectedExercise.id);
	}

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	fetch("/reviews", {
	// 		method: "PATCH",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			content,
	// 		}),
	// 	}).then((r) => {
	// 		if (r.ok) {
	// 			r.json().then((review) => console.log(review));
	// 		}
	// 		setContent("");
	// 	});
	// }

	return (
		<>
			<label class="label" style={{ color: "white" }}>
				Edit
			</label>
			<form onSubmit={handleSubmit}>
				<textarea
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					style={{ width: 700, height: 200, color: "black", fontSize: 16 }}
				/>
				<button type="submit" id="reviewBtn">
					Submit
				</button>
			</form>
		</>
	);
};

export default EditForm;
