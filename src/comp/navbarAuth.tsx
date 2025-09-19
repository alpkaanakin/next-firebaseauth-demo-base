import Link from "next/link";
import React from "react";

export default function NavbarAuth() {
	return (
		<div className="bg-gray-800">
			<nav className="flex max-w-8xl mx-auto items-center justify-between px-4 py-2 text-white">
				{/* Left links */}
				<div className="flex gap-2">
					<Link href="/" className="text-lg font-bold hover:underline p-2">
						Home
					</Link>
				</div>

				{/* Right links */}
				<div className="flex gap-2">
					<Link href="/login" className="text-lg font-bold hover:underline p-2">
						Login
					</Link>
					<Link
						href="/signup"
						className="text-lg font-bold hover:underline p-2"
					>
						Signup
					</Link>
				</div>
			</nav>
		</div>
	);
}
