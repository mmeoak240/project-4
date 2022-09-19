import { NavLink } from "react-router-dom";
import Login from "./Login";

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
				<NavLink to="/" class="navButton">
					Home
				</NavLink>
				<NavLink to="/exercises" class="navButton">
					Exercises
				</NavLink>
			</div>
			<div>
				{user ? (
					<button onClick={handleLogoutClick} id="logout">
						Logout
					</button>
				) : (
					<Login />
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
