"use server";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin"; // your Admin SDK setup
import { redirect } from "next/navigation";

export async function democreateSession(idToken: string) {
	const decoded = await adminAuth.verifyIdToken(idToken); // checks signature/expiry
	const session = await adminAuth.createSessionCookie(idToken, {
		expiresIn: 1000 * 60 * 60 * 24,
	}); // 1 day
	(await cookies()).set("session", session, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
	});
	return { uid: decoded.uid, email: decoded.email ?? null };
}

export async function createSession(idToken: string) {
	const decoded = await adminAuth.verifyIdToken(idToken);
	const session = await adminAuth.createSessionCookie(idToken, {
		expiresIn: 1000 * 60 * 60 * 24,
	}); // 1 days

	(await cookies()).set("session", session, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
	});
	return { uid: decoded.uid, email: decoded.email ?? null };
}
// Logout (server)
export async function clearSession() {
	(await cookies()).set("session", "", {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
		maxAge: 0,
	});
	redirect("/");
}
