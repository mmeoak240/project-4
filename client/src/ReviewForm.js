import React, { useState } from "react";

const ReviewForm = () => {
	const [content, setContent] = useState("");

	return (
		<>
			<label class="label" style={{ color: "white" }}>
				Review
			</label>
			<form>
				<textarea
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					style={{ width: 700, height: 200, color: "black", fontSize: 16 }}
				/>
			</form>
			<button id="reviewBtn">Submit</button>
		</>
	);
};

export default ReviewForm;
