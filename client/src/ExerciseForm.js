import React, { useState } from "react";
import NavBar from "./NavBar";

const ExerciseForm = ({ onExerciseSubmit, user, setUser }) => {
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		fetch("/exercises", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				image,
				title,
				description,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((exercise) => onExerciseSubmit(exercise));
			}
			setImage("");
			setTitle("");
			setDescription("");
		});
	}

	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<h1 className="title">Create Exercise</h1>
			<form onSubmit={handleSubmit} class="form">
				<label>Image</label>
				<input
					class="input"
					type="text"
					id="image"
					autoComplete="off"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<label>Exercise Name</label>
				<input
					class="input"
					type="text"
					id="title"
					autoComplete="off"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Description</label>
				<textarea
					class="input"
					type="text"
					id="description"
					autoComplete="off"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					style={{ width: 400, height: 200, color: "black", fontSize: 16 }}
				/>
				<button type="submit" id="reviewBtn">
					Submit
				</button>
			</form>
		</>
	);
};

export default ExerciseForm;
