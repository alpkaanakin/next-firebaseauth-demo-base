// src/lib/firebaseAdmin.ts
import "server-only";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const projectId = (process.env.FIREBASE_PROJECT_ID || "").trim();
const clientEmail = (process.env.FIREBASE_CLIENT_EMAIL || "").trim();
const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "")
	.replace(/\\n/g, "\n")
	.replace(/^["'`]|["'`]$/g, ""); // strip accidental quotes

if (!projectId || !clientEmail || !privateKey)
	throw new Error("Missing Firebase admin envs");

const adminApp = getApps().length
	? getApps()[0]
	: initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);
