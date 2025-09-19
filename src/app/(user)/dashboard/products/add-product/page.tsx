import Link from "next/link";
import Form from "next/form";
import { addProduct } from "../productActions";

export default function AddProduct() {
	return (
		<div className="flex items-center  h-screen bg-gray-950">
			<Form
				action={addProduct}
				className="w-lg mx-auto mb-36 px-8 py-6 shadow-xl shadow-indigo-600/50 rounded-xl bg-gray-900"
			>
				<h1 className="font-bold mb-3 text-xl">Products</h1>
				<div className="mb-5">
					<label htmlFor="name" className="theme-label">
						product name
					</label>

					<input className="theme-input" placeholder="name" name="name" />
				</div>
				<div className="mb-5">
					<label htmlFor="price" className="theme-label">
						Price
					</label>

					<input className="theme-input" placeholder="price" name="price" />
				</div>
				<button className="theme-btn mr-2" type="submit">
					Add Product
				</button>
				<Link className="theme-btn mr-2" href="/products">
					Products{" "}
				</Link>
			</Form>
		</div>
	);
}
