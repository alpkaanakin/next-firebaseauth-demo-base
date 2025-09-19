import NavbarAuth from "@/comp/navbarAuth";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarAuth />
			{children}
		</>
	);
}
