import { AboutSection } from "@/comp/AboutSection";
import { ContactSection } from "@/comp/ContactSection";
import { HeroSection } from "@/comp/HeroSection";
import { Navigation } from "@/comp/Navigation";
import { ServicesSection } from "@/comp/ServicesSection";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground dark">
			{/* Navigation */}
			<Navigation />

			{/* Main Content */}
			<main>
				{/* Hero Section */}
				<HeroSection />

				{/* About Section */}
				<AboutSection />

				{/* Services Section */}
				<ServicesSection />

				{/* Contact Section */}
				<ContactSection />
			</main>

			{/* Footer */}
			<footer className="bg-gray-900/50 border-t border-gray-800 py-12">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="col-span-1 md:col-span-2">
							<h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent mb-4">
								Softvia
							</h3>
							<p className="text-gray-400 mb-4">
								Innovating tomorrow&apos;s software solutions today. We empower
								businesses with cutting-edge technology and exceptional digital
								experiences.
							</p>
							<div className="flex space-x-4">
								<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
									<span className="text-white text-sm">T</span>
								</div>
								<div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-green-600 rounded-full flex items-center justify-center">
									<span className="text-white text-sm">L</span>
								</div>
								<div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
									<span className="text-white text-sm">G</span>
								</div>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="font-semibold text-white mb-4">Quick Links</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href="#home"
										className="hover:text-white transition-colors"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="hover:text-white transition-colors"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="hover:text-white transition-colors"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="hover:text-white transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="font-semibold text-white mb-4">Contact</h4>
							<ul className="space-y-2 text-gray-400">
								<li>hello@softvia.com</li>
								<li>+1 (555) 123-4567</li>
								<li>
									123 Tech Street
									<br />
									Innovation City, IC 12345
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; 2024 Softvia. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
