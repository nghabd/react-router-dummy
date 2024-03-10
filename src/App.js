import {
	createBrowserRouter,
	RouterProvider,

	// createRoutesFromElements,
	// Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

// const routeDefinition = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage />} />
// 		<Route path="/products" element={<ProductsPage />} />
// 	</Route>
// );

// const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "products", element: <ProductsPage /> },
			{ path: "products/:id", element: <ProductDetails /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
