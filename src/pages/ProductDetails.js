import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
	const params = useParams();
	return (
		<>
			<ul>
				<li>{params.id}</li>
				<Link to=".." relative="path">
					back
				</Link>
				<Link to="/" relative="path">
					Home
				</Link>
			</ul>
		</>
	);
};

export default ProductDetails;
