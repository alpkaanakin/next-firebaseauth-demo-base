import { clearSession } from "@/app/(auth)/authActions";
import Link from "next/link";
import React from "react";

export default function NavbarUser() {
	return (
		<div className="bg-gray-800">
			<nav className="flex max-w-8xl mx-auto items-center justify-between px-4 py-2 text-white">
				{/* Left links */}
				<div className="flex gap-2">
					<Link href="/" className="text-lg font-bold hover:underline p-2">
						Website
					</Link>
					<Link
						href="/dashboard/products"
						className="text-lg font-bold hover:underline p-2"
					>
						Edit Products
					</Link>
					<Link
						href="/pricing"
						className="text-lg font-bold hover:underline p-2"
					>
						Pricing
					</Link>
				</div>

				{/* Right links */}
				<div className="flex gap-2">
					<Link
						href="/dashboard"
						className="text-lg font-bold hover:underline p-2"
					>
						Dashboard
					</Link>
					<Link
						href="/account"
						className="text-lg font-bold hover:underline p-2"
					>
						Account
					</Link>
					<form>
						<button
							onClick={clearSession}
							className="text-lg font-bold hover:underline p-2"
						>
							Logout
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
