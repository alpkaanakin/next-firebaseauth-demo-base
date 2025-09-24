"use server";

import { adminDb } from "@/lib/firebaseAdmin";

export async function getSubscriptionPlan(plan: string) {
	const snap = await adminDb.collection("plans").doc(plan).get();
	if (!snap.exists) console.error("No such document!", plan);

	return snap.data();
}
