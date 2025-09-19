"use client";
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { app } from "@/lib/firebaseSdk";
import { useRouter } from "next/navigation";
import { createSession } from "../authActions";

export default function Login() {
	const router = useRouter();
	const auth = getAuth(app);
	const [email, setEmail] = useState(""),
		[password, setPassword] = useState("");

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		try {
			const cred = await signInWithEmailAndPassword(auth, email, password);
			const token = await cred.user.getIdToken(true);
			await createSession(token);
			router.push("/dashboard");
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert("An unknown error occurred.");
			}
		}
	}
	return (
		<div className="flex items-center  h-screen bg-gray-950">
			<form className="w-lg mx-auto mb-36 px-8 py-6 shadow-xl shadow-indigo-600/50 rounded-xl bg-gray-900">
				<h1 className="font-bold mb-3 text-xl">Login</h1>
				<div className="mb-5">
					<label htmlFor="Email" className="theme-label">
						Email
					</label>

					<input
						className="theme-input"
						placeholder="Email"
						name="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="password" className="theme-label">
						Password
					</label>

					<input
						className="theme-input"
						placeholder="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button onClick={handleLogin} className="theme-btn mr-2">
					Login
				</button>
			</form>
		</div>
	);
}
