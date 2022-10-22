import React, { useState } from "react";

const EditForm = ({ review, setEditFlag, editFlag, handleUpdateReview }) => {
	const [content, setContent] = useState(`${review.content}`);

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	console.log(selectedExercise.id);
	// }

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`/reviews/${review.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((review) => handleUpdateReview(review));
			}
			setContent("");
			setEditFlag(!editFlag);
		});
	}

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
