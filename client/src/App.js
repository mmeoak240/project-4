import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import HomePage from "./HomePage";
import ExerciseContainer from "./ExerciseContainer";

function App() {
	const [user, setUser] = useState("");

	const onLogin = (client) => {
		setUser(client);
	};

	useEffect(() => {
		fetch("/me").then((r) => {
			if (r.ok) {
				r.json().then((client) => setUser(client));
			}
		});
	}, []);
	return (
		<>
			<main>
				{user ? (
					<Switch>
						<Route exact path="/">
							<HomePage user={user} setUser={setUser} />
						</Route>
						<Route exact path="/exercises">
							<ExerciseContainer user={user} setUser={setUser} />
						</Route>
					</Switch>
				) : (
					<Switch>
						<Route exact path="/signup">
							<SignUp onLogin={onLogin} />
						</Route>
						<Route exact path="/">
							<Login onLogin={onLogin} />
						</Route>
					</Switch>
				)}
			</main>
		</>
	);

	// 	<>
	// 		<NavBar />
	// 		<div>{user ? <HomePage /> : null}</div>
	// 		<Switch>
	// 			<Route path="/signup">
	// 				<Signup onLogin={onLogin} />
	// 			</Route>

	// 			<Route path="/login">
	// 				<Login onLogin={onLogin} />
	// 			</Route>
	// 		</Switch>
	// 	</>
	// );
}

export default App;
