import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import SignUp from "./Signup";
import NavBar from "./NavBar";

import HomePage from "./HomePage";

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
			<NavBar user={user} setUser={setUser} />
			<main>
				{user ? (
					<Switch>
						<Route path="/">
							<HomePage user={user} />
						</Route>
					</Switch>
				) : (
					<Switch>
						<Route path="/signup">
							<SignUp onLogin={onLogin} />
						</Route>
						<Route path="/login">
							<Login onLogin={onLogin} />
						</Route>
						<Route path="/">
							<HomePage />
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
