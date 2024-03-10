import { Link } from "react-router-dom";

const Products = () => {
	const PRODUCTS = [
		{ id: 1, title: "product 1" },
		{ id: 2, title: "product 2" },
		{ id: 3, title: "product 3" },
	];

	return (
		<>
			<ul>
				{PRODUCTS.map((product) => (
					<li key={product.id}>
						{/* Create Link component for each product */}
						<Link to={product.id.toString()}>{product.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Products;
