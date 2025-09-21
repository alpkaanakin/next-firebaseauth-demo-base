"use server";
import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin"; // your Admin SDK setup
import { redirect } from "next/navigation";
import { adminDb } from "@/lib/firebaseAdmin";
import { cache } from "react";

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

export async function updateUsername(formData: FormData) {
	// 1) Get uid from verified session cookie
	const token = (await cookies()).get("session")?.value;
	if (!token) throw new Error("Not signed in");

	const { uid } = await adminAuth.verifySessionCookie(token, true);

	// 2) Get username from FormData
	const username = String(formData.get("username") || "").trim();
	if (!username) throw new Error("Username required");

	// 3) Write to Firestore
	await adminDb.collection("users").doc(uid).set({ username }, { merge: true });
}

export async function createUserDoc(
	uid: string,
	username: string,
	email: string
) {
	await adminDb.collection("users").doc(uid).set({
		username,
		email,
		createdAt: new Date().toISOString(),
	});
}

async function _getUserProfile(uid: string) {
	const snap = await adminDb.collection("users").doc(uid).get();
	if (!snap.exists) return null;
	return snap.data();
}

export async function getSession() {
	const token = (await cookies()).get("session")?.value;
	if (!token) return null;
	try {
		return await adminAuth.verifySessionCookie(token, true);
	} catch {
		return null;
	}
}

export const getUserProfile = cache(_getUserProfile);
