import { NavLink, useNavigate } from "react-router-dom";
import classes from "../components/main.module.css";
function HomePage() {
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("products");
	};
	return (
		<>
			<h1>HomePage</h1>
			<button onClick={navigateHandler}>products ...</button>
			<p>
				go to{" "}
				<NavLink
					to={"products"}
					className={({ isActive, isLoading }) => {
						return `${isActive ? classes.active : ""} ${
							isLoading ? classes.active : ""
						}`;
					}}
					style={(isActive) => {
						return isActive ? { fontSize: "1.9rem", color: "grey" } : {};
					}}
				>
					product_Id
				</NavLink>
			</p>
		</>
	);
}

export default HomePage;
