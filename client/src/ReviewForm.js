import React, { useState } from "react";

const ReviewForm = ({ setReviews, exercise, client, onReviewSubmit }) => {
	const [content, setContent] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/reviews", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content,
				exercise_id: exercise.id,
				client_id: client.id,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((review) => onReviewSubmit(review));
			}
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
			</form>
			<button type="submit" id="reviewBtn">
				Submit
			</button>
		</>
	);
};

export default ReviewForm;
