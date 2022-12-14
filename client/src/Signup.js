import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp({ onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [goals, setGoals] = useState("");
	const [errors, setErrors] = useState([]);

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
		}).then((r) => {
			if (r.ok) {
				r.json().then((client) => onLogin(client));
			} else {
				r.json().then((error) => setErrors(error.errors));
			}
			setUsername("");
			setPassword("");
			setPasswordConfirmation("");
			setGoals("");
		});
	}

	return (
		<div>
			<h1>Signup</h1>
			<form onSubmit={onSubmit} class="form">
				<label htmlFor="username" class="label">
					Username
				</label>
				<input
					class="input"
					type="text"
					id="username"
					autoComplete="off"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label htmlFor="password" class="label">
					Password
				</label>
				<input
					class="input"
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<label htmlFor="passwordConfirmation" class="label">
					Password Confirmation
				</label>
				<input
					class="input"
					type="password"
					id="password_confirmation"
					autoComplete="current-password"
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
				/>
				<label htmlFor="goals" class="label">
					Goals
				</label>
				<input
					class="input"
					type="text"
					id="goals"
					autoComplete="off"
					value={goals}
					onChange={(e) => setGoals(e.target.value)}
				/>
				<ul>
					{errors.map((error) => (
						<li>{error}</li>
					))}
				</ul>
				<button type="submit">Signup</button>
				<NavLink to="/">Login</NavLink>
			</form>
		</div>
	);
}

export default SignUp;
