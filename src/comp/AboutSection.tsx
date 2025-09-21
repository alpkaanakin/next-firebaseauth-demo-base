import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
	Target,
	Users,
	Lightbulb,
	Zap,
	Shield,
	Heart,
	Linkedin,
	Twitter,
	Mail,
} from "lucide-react";

export function AboutSection() {
	const teamMembers = [
		{
			name: "Alex Chen",
			title: "CEO & Co-Founder",
			description:
				"Visionary leader with 15+ years in software development and strategic business growth.",
			image:
				"https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NDE2MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
			social: {
				linkedin: "#",
				twitter: "#",
				email: "alex@softvia.com",
			},
		},
		{
			name: "Sarah Rodriguez",
			title: "CTO & Co-Founder",
			description:
				"Tech innovator specializing in scalable architectures and emerging technologies.",
			image:
				"https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU4NDg3NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
			social: {
				linkedin: "#",
				twitter: "#",
				email: "sarah@softvia.com",
			},
		},
		{
			name: "Marcus Thompson",
			title: "Head of Design",
			description:
				"Creative director passionate about user-centered design and digital experiences.",
			image:
				"https://images.unsplash.com/photo-1573748616237-0ae070127575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhlY3V0aXZlJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0ODc0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
			social: {
				linkedin: "#",
				twitter: "#",
				email: "marcus@softvia.com",
			},
		},
		{
			name: "Emily Park",
			title: "Lead Developer",
			description:
				"Full-stack engineer with expertise in modern frameworks and cloud technologies.",
			image:
				"https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1ODQ1OTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
			social: {
				linkedin: "#",
				twitter: "#",
				email: "emily@softvia.com",
			},
		},
	];

	const values = [
		{
			icon: <Lightbulb className="h-8 w-8" />,
			title: "Innovation First",
			description:
				"We push boundaries and embrace cutting-edge technologies to deliver solutions that set new industry standards.",
			color: "from-blue-600 to-purple-600",
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Client-Centric",
			description:
				"Every decision we make is guided by our commitment to delivering exceptional value and experiences for our clients.",
			color: "from-purple-600 to-green-600",
		},
		{
			icon: <Shield className="h-8 w-8" />,
			title: "Quality & Security",
			description:
				"We maintain the highest standards of code quality and implement robust security measures in every project.",
			color: "from-green-600 to-blue-600",
		},
		{
			icon: <Zap className="h-8 w-8" />,
			title: "Agile Excellence",
			description:
				"Our agile methodologies ensure rapid delivery while maintaining flexibility and responsiveness to change.",
			color: "from-blue-600 to-green-600",
		},
		{
			icon: <Heart className="h-8 w-8" />,
			title: "Team Collaboration",
			description:
				"We believe in the power of diverse perspectives and foster an environment of mutual respect and growth.",
			color: "from-purple-600 to-blue-600",
		},
		{
			icon: <Target className="h-8 w-8" />,
			title: "Results Driven",
			description:
				"We measure our success by the tangible impact we create for our clients' businesses and their users.",
			color: "from-green-600 to-purple-600",
		},
	];

	return (
		<section id="about" className="py-20 px-6 lg:px-8 relative">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background"></div>

			{/* Animated background elements */}
			<div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
			<div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
			<div className="absolute top-1/2 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						About{" "}
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
							Softvia
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						We&apos;re a passionate team of innovators, designers, and
						developers dedicated to crafting exceptional software solutions that
						transform businesses and empower users.
					</p>
				</div>

				{/* Company Story & Mission */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
					<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
						<CardHeader>
							<CardTitle className="text-2xl text-white flex items-center gap-3 mb-4">
								<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
									<Target className="h-6 w-6 text-white" />
								</div>
								Our Story
							</CardTitle>
						</CardHeader>
						<CardContent className="text-gray-300 space-y-4">
							<p>
								Founded in 2019 by a team of passionate technologists, Softvia
								emerged from a simple yet powerful vision: to bridge the gap
								between innovative technology and practical business solutions.
							</p>
							<p>
								What started as a small startup in a garage has grown into a
								dynamic software company that has delivered over 500 projects
								worldwide. Our journey has been driven by an unwavering
								commitment to excellence and a deep understanding of our
								clients&apos; evolving needs.
							</p>
							<p>
								Today, we continue to push the boundaries of what&apos;s
								possible, helping businesses of all sizes harness the power of
								technology to achieve their goals and create meaningful impact
								in their industries.
							</p>
						</CardContent>
					</Card>

					<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
						<CardHeader>
							<CardTitle className="text-2xl text-white flex items-center gap-3 mb-4">
								<div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg flex items-center justify-center">
									<Zap className="h-6 w-6 text-white" />
								</div>
								Our Mission
							</CardTitle>
						</CardHeader>
						<CardContent className="text-gray-300 space-y-4">
							<p>
								To empower businesses through innovative software solutions that
								drive growth, efficiency, and exceptional user experiences.
							</p>
							<p>
								We believe technology should be accessible, scalable, and
								transformative. Our mission is to democratize cutting-edge
								software development, making enterprise-level solutions
								available to organizations of every size.
							</p>
							<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
								<p className="text-blue-200 italic">
									We don&apos;t just build software; we craft digital
									experiences that inspire, engage, and deliver measurable
									results.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Values Section */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Our{" "}
							<span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
								Values
							</span>
						</h3>
						<p className="text-lg text-gray-400 max-w-2xl mx-auto">
							The principles that guide every decision we make and every
							solution we deliver
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{values.map((value, index) => (
							<Card
								key={index}
								className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-105"
							>
								<CardContent className="p-6">
									<div
										className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
									>
										<div className="text-white">{value.icon}</div>
									</div>
									<h4 className="text-xl font-bold text-white mb-3">
										{value.title}
									</h4>
									<p className="text-gray-400">{value.description}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Team Section */}
				<div>
					<div className="text-center mb-12">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Meet Our{" "}
							<span className="bg-gradient-to-r from-purple-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
								Team
							</span>
						</h3>
						<p className="text-lg text-gray-400 max-w-2xl mx-auto">
							The brilliant minds behind Softvia&apos;s innovative solutions
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{teamMembers.map((member, index) => (
							<Card
								key={index}
								className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-105 overflow-hidden"
							>
								<CardContent className="p-0">
									{/* Profile Image */}
									<div className="relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

										{/* Social Links Overlay */}
										<div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
											<a
												href={member.social.linkedin}
												className="w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
											>
												<Linkedin className="h-4 w-4 text-white" />
											</a>
											<a
												href={member.social.twitter}
												className="w-8 h-8 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
											>
												<Twitter className="h-4 w-4 text-white" />
											</a>
											<a
												href={`mailto:${member.social.email}`}
												className="w-8 h-8 bg-green-600/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
											>
												<Mail className="h-4 w-4 text-white" />
											</a>
										</div>
									</div>

									{/* Member Info */}
									<div className="p-6">
										<h4 className="text-xl font-bold text-white mb-1">
											{member.name}
										</h4>
										<p className="text-blue-400 font-medium mb-3">
											{member.title}
										</p>
										<p className="text-gray-400 text-sm">
											{member.description}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="mt-20 text-center">
					<Card className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-green-900/30 border border-gray-700/50 backdrop-blur-sm">
						<CardContent className="p-12">
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
								Ready to Work with Us?
							</h3>
							<p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
								Let&apos;s collaborate to bring your vision to life. Our team is
								excited to discuss how we can help transform your business
								through innovative software solutions.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="#contact"
									className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
								>
									Start a Project
								</a>
								<a
									href="#packages"
									className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 font-medium rounded-lg transition-all duration-200"
								>
									View Packages
								</a>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
