import Link from "next/link";
import { Button } from "./ui/button";

export function Navigation({ email }: { email: string | null }) {
	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "#about" },
		{ name: "Services", href: "#services" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}

					<div className="flex-shrink-0">
						<Link href="/">
							<h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
								Softvia
							</h1>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-300 hover:text-white px-3 py-2 text-md transition-colors duration-200 hover:bg-white/5 rounded-lg"
								>
									{item.name}
								</Link>
							))}
							{email ? (
								<a
									href="/dashboard"
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 text-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 border-0 rounded-lg"
								>
									Dashboard
								</a>
							) : (
								<a
									href="/signup"
									className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 text-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 border-0 rounded-lg"
								>
									Signup
								</a>
							)}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="sm"
							className="text-gray-300 hover:text-white"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
