import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export function ContactSection() {
	return (
		<section id="contact" className="py-20 px-6 lg:px-8 relative">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background"></div>

			{/* Animated background elements */}
			<div className="absolute top-40 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Get In{" "}
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
							Touch
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-2xl mx-auto">
						Ready to start your next project? Let's discuss how we can help
						bring your vision to life.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
						<CardHeader>
							<CardTitle className="text-2xl text-white mb-2">
								Send us a message
							</CardTitle>
							<p className="text-gray-400">
								Fill out the form below and we'll get back to you within 24
								hours.
							</p>
						</CardHeader>
						<CardContent>
							<form className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-gray-300">
										Name
									</Label>
									<Input
										id="name"
										placeholder="Your full name"
										className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email" className="text-gray-300">
										Email
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="your.email@example.com"
										className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message" className="text-gray-300">
										Message
									</Label>
									<Textarea
										id="message"
										placeholder="Tell us about your project..."
										rows={5}
										className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
										required
									/>
								</div>

								<Button
									type="submit"
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transform hover:scale-[1.02] transition-all duration-200"
									size="lg"
								>
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>

					{/* Contact Information */}
					<div className="space-y-8">
						{/* Company Info Card */}
						<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
							<CardHeader>
								<CardTitle className="text-2xl text-white mb-2">
									Contact Information
								</CardTitle>
								<p className="text-gray-400">
									Reach out to us directly through any of these channels.
								</p>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
										<Mail className="h-6 w-6 text-white" />
									</div>
									<div>
										<p className="text-gray-300">Email</p>
										<p className="text-white">hello@softvia.com</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg flex items-center justify-center">
										<Phone className="h-6 w-6 text-white" />
									</div>
									<div>
										<p className="text-gray-300">Phone</p>
										<p className="text-white">+1 (555) 123-4567</p>
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
										<MapPin className="h-6 w-6 text-white" />
									</div>
									<div>
										<p className="text-gray-300">Address</p>
										<p className="text-white">
											123 Tech Street
											<br />
											Innovation City, IC 12345
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Social Media Links */}
						<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
							<CardHeader>
								<CardTitle className="text-xl text-white mb-2">
									Follow Us
								</CardTitle>
								<p className="text-gray-400">
									Stay connected with our latest updates and insights.
								</p>
							</CardHeader>
							<CardContent>
								<div className="flex space-x-4">
									<a
										href="#"
										className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
									>
										<Twitter className="h-6 w-6 text-white" />
									</a>
									<a
										href="#"
										className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
									>
										<Linkedin className="h-6 w-6 text-white" />
									</a>
									<a
										href="#"
										className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
									>
										<Github className="h-6 w-6 text-white" />
									</a>
								</div>
							</CardContent>
						</Card>

						{/* Business Hours */}
						<Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50">
							<CardHeader>
								<CardTitle className="text-xl text-white mb-2">
									Business Hours
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3">
								<div className="flex justify-between">
									<span className="text-gray-400">Monday - Friday</span>
									<span className="text-white">9:00 AM - 6:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Saturday</span>
									<span className="text-white">10:00 AM - 4:00 PM</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Sunday</span>
									<span className="text-gray-500">Closed</span>
								</div>
								<div className="pt-3 border-t border-gray-700">
									<p className="text-sm text-gray-400">
										Emergency support available 24/7 for Premium clients
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
