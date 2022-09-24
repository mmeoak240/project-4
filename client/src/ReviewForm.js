// import React, { useState } from "react";

// const ReviewForm = () => {
// 	const [content, setContent] = useState("");
// 	const [username, setUsername] = useState("");

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		fetch("/reviews", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify({ username, content }),
// 		}).then((r) => {
// 			if (r.ok) {
// 				r.json().then((review) => onReview(review));
// 			}
// 			setContent("");
// 			setUsername("");
// 		});
// 	}

// 	return (
// 		<>
// 			<label class="label" style={{ color: "white" }}>
// 				Review
// 			</label>
// 			<form onSubmit={handleSubmit}>
// 				<label>Username</label>
// 				<input
// 					type="text"
// 					value={username}
// 					onChange={(e) => setUsername(e.target.value)}
// 				/>
// 				<textarea
// 					type="text"
// 					value={content}
// 					onChange={(e) => setContent(e.target.value)}
// 					style={{ width: 700, height: 200, color: "black", fontSize: 16 }}
// 				/>
// 			</form>
// 			<button type="submit" id="reviewBtn">
// 				Submit
// 			</button>
// 		</>
// 	);
// };

// export default ReviewForm;
