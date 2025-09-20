// middleware.ts (fast gate: cookie presence)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USER = [/^\/dashboard/, /^\/account/, /^\/orders/];
const ADMIN = [/^\/admin/];

export function middleware(req: NextRequest) {
	const hasSession = Boolean(req.cookies.get("session"));
	const path = req.nextUrl.pathname;

	const needsUser = USER.some((r) => r.test(path));
	const needsAdmin = ADMIN.some((r) => r.test(path));

	if ((needsUser || needsAdmin) && !hasSession) {
		const url = new URL("/login", req.url);
		url.searchParams.set("next", path);
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard/:path*",
		"/account/:path*",
		"/orders/:path*",
		"/admin/:path*",
	],
};
