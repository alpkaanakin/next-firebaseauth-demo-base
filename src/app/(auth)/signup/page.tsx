"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { app } from "@/lib/firebaseSdk";
import { useRouter } from "next/navigation";
import { createSession, createUserDoc } from "../authActions";

export default function Signup() {
	const router = useRouter();
	const auth = getAuth(app);
	const [email, setEmail] = useState(""),
		[password, setPassword] = useState(""),
		[username, setUsername] = useState("");

	async function handleSignup(e: React.FormEvent) {
		e.preventDefault();
		try {
			const cred = await createUserWithEmailAndPassword(auth, email, password);
			const token = await cred.user.getIdToken(true);
			await createSession(token);
			await createUserDoc(cred.user.uid, username, email);
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
			<form
				onSubmit={handleSignup}
				className="w-lg mx-auto mb-36 px-8 py-6 shadow-xl shadow-indigo-600/50 rounded-xl bg-gray-900"
			>
				<h1 className="font-bold mb-3 text-xl">Signup</h1>
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
					<label htmlFor="username" className="theme-label">
						Username
					</label>

					<input
						className="theme-input"
						placeholder="username"
						name="username"
						onChange={(e) => setUsername(e.target.value)}
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
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<button type="submit" className="theme-btn mr-2">
					Signup
				</button>
			</form>
		</div>
	);
}
