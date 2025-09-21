// app/dashboard/page.tsx
export const runtime = "nodejs";

import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin";
import { clearSession, getUserProfile } from "@/app/(auth)/authActions";

export default async function Dashboard() {
	const session = (await cookies()).get("session")?.value;
	if (!session) return <p>Please sign in</p>;

	try {
		const decoded = await adminAuth.verifySessionCookie(session, true);
		const profile = await getUserProfile(decoded.uid);
		return (
			<div>
				<h1 className="text-xl">Hello {profile?.username ?? "Guest"}</h1>;
				<form action={clearSession}>
					<button>Logout</button>
				</form>
			</div>
		);
	} catch {
		return <p>Session expired or invalid. Please sign in again.</p>;
	}
}
