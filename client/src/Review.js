import React, { useState } from "react";
import EditForm from "./EditForm";

const Review = ({ review, onDeleteReview, handleUpdateReview, client }) => {
	const [editFlag, setEditFlag] = useState(false);

	const handleEditClick = () => {
		setEditFlag((editFlag) => !editFlag);
	};

	const handleDeleteClick = (review) => {
		console.log(review);
		fetch(`/reviews/${review.id}`, {
			method: "DELETE",
		}).then((r) => {
			if (r.ok) {
				onDeleteReview(review);
			}
		});
	};
	return (
		<div>
			<li style={{ color: "white" }}>
				{review.username} - {review.content}
				{review.client_id === client.id ? (
					<button
						onClick={() => handleDeleteClick(review)}
						style={{
							width: 60,
							height: 20,
							fontSize: 10,
							paddingTop: 1,
							paddingBottom: 1,
						}}
					>
						Delete
					</button>
				) : null}
				{review.client_id === client.id ? (
					<button
						onClick={handleEditClick}
						style={{
							width: 60,
							height: 20,
							fontSize: 10,
							paddingTop: 1,
							paddingBottom: 1,
						}}
					>
						{editFlag ? "Close" : "Edit"}
					</button>
				) : null}
				{editFlag ? (
					<EditForm
						handleUpdateReview={handleUpdateReview}
						review={review}
						setEditFlag={setEditFlag}
						editFlag={editFlag}
					/>
				) : null}
			</li>
		</div>
	);
};

export default Review;
