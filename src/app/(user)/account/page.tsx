import {
	getSession,
	getUserProfile,
	updateUsername,
} from "@/app/(auth)/authActions";
import Link from "next/link";
import Form from "next/form";

export default async function UserProfile() {
	const decoded = await getSession();
	const profile = decoded ? await getUserProfile(decoded.uid) : null;

	return (
		<div className="flex items-center  h-screen bg-gray-950">
			<div className="w-lg mx-auto mb-36 px-8 py-6 shadow-xl shadow-indigo-600/50 rounded-xl bg-gray-900">
				<h1 className="font-bold mb-3 text-xl">Account</h1>

				<Form action={updateUsername} className="mb-5">
					<label htmlFor="username" className="theme-label">
						Username
					</label>
					<input
						className="theme-input"
						placeholder="username"
						name="username"
						defaultValue={profile?.username}
					/>
					<button type="submit" className="theme-btn mr-2">
						Update Username
					</button>
				</Form>

				<div className="mb-5">
					<label htmlFor="password" className="theme-label">
						Password
					</label>

					<input
						className="theme-input"
						placeholder="password"
						name="password"
						type="password"
						defaultValue="***********"
						disabled
					/>

					<button type="submit" className="theme-btn mr-2">
						Change Password
					</button>
				</div>

				<div className="mb-5">
					<label htmlFor="Email" className="theme-label">
						Email
					</label>

					<input
						className="theme-input"
						placeholder="Email"
						name="Email"
						defaultValue={profile?.email}
						disabled
					/>
					<Link href={"/account/update-email"} className="theme-btn mr-2">
						Update Email
					</Link>
				</div>
			</div>
		</div>
	);
}
