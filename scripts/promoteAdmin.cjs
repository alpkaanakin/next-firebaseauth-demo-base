/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/promoteAdmin.cjs
require("dotenv").config({ path: ".env.local" }); // 👈 load the right file
const admin = require("firebase-admin");

const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } =
	process.env;
if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
	throw new Error("Missing Firebase admin env vars. Check .env.local");
}

admin.initializeApp({
	credential: admin.credential.cert({
		projectId: FIREBASE_PROJECT_ID,
		clientEmail: FIREBASE_CLIENT_EMAIL,
		privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), // keep \n in .env
	}),
});

(async () => {
	const email = "yumak@yumak.com";
	const user = await admin.auth().getUserByEmail(email);
	await admin.auth().setCustomUserClaims(user.uid, { role: "admin" });
	console.log(`✅ ${email} is now admin`);
	process.exit(0);
})().catch((e) => {
	console.error("❌", e);
	process.exit(1);
});
