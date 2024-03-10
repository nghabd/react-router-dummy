import { NavLink } from "react-router-dom";
import classes from "./main.module.css";
function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/root"
							className={(isActive) => (isActive ? classes.active : "")}
							style={({ isActive, isLoading }) => {
								return {
									color: isLoading ? "#251" : "",
									fontWeight: isActive ? "bolder" : "",
								};
							}}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="products"
							className={({ isActive }) => (isActive ? classes.active : "")}
							style={({ isActive, isLoading }) => ({
								color: isActive ? "skyblue" : "green",
							})}
						>
							products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default MainNavigation;
