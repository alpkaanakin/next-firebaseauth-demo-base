// app/dashboard/page.tsx
export const runtime = "nodejs";

import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin";
import { clearSession } from "@/app/(auth)/authActions";

export default async function Dashboard() {
	const session = (await cookies()).get("session")?.value;
	if (!session) return <p>Please sign in</p>;

	try {
		const decoded = await adminAuth.verifySessionCookie(session, true);
		const who = decoded.email ?? decoded.uid;
		return (
			<div>
				<h1 className="text-xl">Hello {who}</h1>;
				<form action={clearSession}>
					<button>Logout</button>
				</form>
			</div>
		);
	} catch {
		return <p>Session expired or invalid. Please sign in again.</p>;
	}
}
