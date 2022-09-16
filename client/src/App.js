import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";

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
			<NavBar />
			<Switch>
				<Route path="/signup">
					<Signup onLogin={onLogin} />
				</Route>

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</>
	);
}

export default App;
