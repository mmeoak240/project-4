import React from "react";
import NavBar from "./NavBar";
import "./App.css";

const HomePage = ({ user, setUser }) => {
	const copyright = String.fromCodePoint(0x00a9);

	return (
		<div>
			<NavBar user={user} setUser={setUser} />
			<div>
				<h1 className="title">Welcome to Fit4Life</h1>
				<p className="homeContent">
					The only person you need to be better than<br></br> is the person you
					were yesterday.
				</p>
				<div className="homeFooter">
					<p>{copyright} 2022 Fit4Life, Inc</p> <a>Terms</a> | <a>Privacy</a> |{" "}
					<a>Security</a> | <a>Status</a> | <a>Docs</a> | <a>Contact</a> |{" "}
					<a>Pricing</a> | <a>About</a>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
