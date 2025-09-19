import Link from "next/link";
import { getProducts } from "./productActions";

interface Product {
	id: string;
	name: string;
	price: number; // better as number, not string
	createdAt?: string; // optional, since it may not exist
}
export default async function Register() {
	const products: Product[] = await getProducts();
	console.log(products);
	return (
		<div className="flex items-center  h-screen bg-gray-950">
			<div className="w-lg mx-auto mb-36 px-8 py-6 shadow-xl shadow-indigo-600/50 rounded-xl bg-gray-900">
				<ul>
					{products.length === 0 ? (
						<p>No products yet</p>
					) : (
						products.map((product) => (
							<li key={product.id}>
								{product.name} {product.price}
							</li>
						))
					)}
				</ul>
				<h1 className="font-bold mb-3 text-xl">Products</h1>
				<Link className="theme-btn mr-2" href="/dashboard/products/add-product">
					Add Product
				</Link>
			</div>
		</div>
	);
}
