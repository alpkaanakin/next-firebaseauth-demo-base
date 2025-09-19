import NavbarAuth from "@/comp/navbarAuth";
import NavbarUser from "@/comp/navbarUser";

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavbarUser />
			{children}
		</>
	);
}
