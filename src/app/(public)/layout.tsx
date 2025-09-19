// app/(public)/layout.tsx
export const revalidate = 60; // optional
export const runtime = "nodejs";

import NavbarPublic from "@/comp/navbarPublic";
import { adminAuth } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";

export default async function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const token = (await cookies()).get("session")?.value; // ✅ no await
	let email: string | null = null;

	if (token) {
		try {
			const decoded = await adminAuth.verifySessionCookie(token, true);
			email = decoded.email ?? null;
		} catch {
			// invalid/expired cookie: treat as guest
		}
	}

	return (
		<>
			<NavbarPublic email={email} />
			{children}
		</>
	);
}
