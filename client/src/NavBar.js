import { NavLink } from "react-router-dom";

const NavBar = ({ user, setUser }) => {
	function handleLogoutClick() {
		fetch("/logout", { method: "DELETE" }).then((r) => {
			if (r.ok) {
				setUser(null);
			}
		});
	}

	return (
		<header>
			<div>
				<NavLink to="/">Home</NavLink>
			</div>
			<div>
				{user ? (
					<button onClick={handleLogoutClick}>Logout</button>
				) : (
					<>
						<NavLink to="/signup">Signup</NavLink>
						<NavLink to="/login">Login</NavLink>
					</>
				)}
			</div>
		</header>
	);
};

export default NavBar;

{
	/* <>
			<nav>
				<NavLink to="/signup">Signup </NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/logout">Logout</NavLink>
			</nav>
			<button type="submit" onClick={onLogout}>
				Logout
			</button>
		</> */
}
