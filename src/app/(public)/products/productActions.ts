// app/products/actions.ts
"use server";

import { adminDb } from "@/lib/firebaseAdmin";

export async function getProducts() {
	const snapshot = await adminDb.collection("products").get();
	const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	return products;
}

export async function addProduct(formData: FormData) {
	const productData = {
		name: String(formData.get("name")),
		price: Number(formData.get("price")),
		createdAt: new Date().toLocaleString(),
	};

	try {
		await adminDb.collection("products").doc(productData.name).set(productData);
		console.log("Product added successfully", productData);
	} catch (error) {
		console.error("Error adding product: ", error);
	}
}
