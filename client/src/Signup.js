import React, { useState } from "react";

function SignUp({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [goals, setGoals] = useState("");

	function onSubmit(e) {
		e.preventDefault();
		const client = {
			username,
			password,
			password_confirmation: passwordConfirmation,
			goals,
		};
		fetch("/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(client),
		})
			.then((res) => res.json())
			.then((client) => onLogin(client));
	}

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={onSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<label htmlFor="passwordConfirmation">Password Confirmation</label>
				<input
					type="password"
					id="password_confirmation"
					autoComplete="current-password"
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
				/>
				<label htmlFor="goals">Goals</label>
				<input
					type="text"
					id="goals"
					autoComplete="off"
					value={goals}
					onChange={(e) => setGoals(e.target.value)}
				/>

				<button type="submit">Signup</button>
			</form>
		</div>
	);
}

export default SignUp;
