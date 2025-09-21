export const runtime = "nodejs";
import NavbarUser from "@/comp/navbarUser";
import { adminAuth } from "@/lib/firebaseAdmin";
import { cookies } from "next/headers";
import { getSession, getUserProfile } from "../(auth)/authActions";

export default async function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const decoded = await getSession();
	if (!decoded) return <p>Please sign in</p>;

	try {
		const profile = await getUserProfile(decoded.uid);
	} catch {
		return <p>Session expired or invalid. Please sign in again.</p>;
	}
	return (
		<>
			<NavbarUser />
			{children}
		</>
	);
}
