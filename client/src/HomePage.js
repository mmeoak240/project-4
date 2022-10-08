import React from "react";
import NavBar from "./NavBar";
import "./App.css";

const HomePage = ({ user, setUser }) => {
	return (
		<div>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 className="title">Welcome to Fit4Life</h1>
			</div>
		</div>
	);
};

export default HomePage;
