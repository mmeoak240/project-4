import React from "react";
import NavBar from "./NavBar";

const HomePage = ({ user, setUser }) => {
	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 style={{ color: "white" }}>Home</h1>
			</div>
		</>
	);
};

export default HomePage;
