import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<NavLink to="/signup">Signup </NavLink>
			<NavLink to="/login">Login</NavLink>
		</nav>
	);
};

export default NavBar;
