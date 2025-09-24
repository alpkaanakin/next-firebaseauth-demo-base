import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
	Monitor,
	Palette,
	Users,
	Globe,
	Truck,
	Camera,
	Share2,
	Search,
	Megaphone,
	Check,
	Star,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
	const services = [
		{
			icon: <Monitor className="h-8 w-8" />,
			title: "Website Design",
			description:
				"Fast, responsive websites built with Next.js, optimized for top Google rankings and exceptional user experience.",
			color: "from-blue-600 to-purple-600",
			features: [
				"Next.js Framework",
				"SEO Optimized",
				"Mobile Responsive",
				"Fast Loading",
			],
		},
		{
			icon: <Palette className="h-8 w-8" />,
			title: "Corporate Identity Design",
			description:
				"Complete branding solutions including logos, color schemes, and brand guidelines that reflect your company's values.",
			color: "from-purple-600 to-green-600",
			features: [
				"Logo Design",
				"Brand Guidelines",
				"Color Palette",
				"Typography",
			],
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Corporate Consulting",
			description:
				"Strategic business consulting to optimize operations, improve efficiency, and drive sustainable growth.",
			color: "from-green-600 to-blue-600",
			features: [
				"Strategy Planning",
				"Process Optimization",
				"Growth Analysis",
				"Market Research",
			],
		},
		{
			icon: <Globe className="h-8 w-8" />,
			title: "E-Export Consulting",
			description:
				"Expert guidance for international e-commerce expansion, market entry strategies, and cross-border operations.",
			color: "from-blue-600 to-green-600",
			features: [
				"Market Analysis",
				"Export Strategy",
				"Compliance Guidance",
				"Platform Setup",
			],
		},
		{
			icon: <Truck className="h-8 w-8" />,
			title: "Shipping & Logistics",
			description:
				"Comprehensive logistics solutions to streamline your supply chain and optimize delivery operations.",
			color: "from-purple-600 to-blue-600",
			features: [
				"Supply Chain Optimization",
				"Shipping Solutions",
				"Inventory Management",
				"Cost Analysis",
			],
		},
		{
			icon: <Camera className="h-8 w-8" />,
			title: "Product Photography & Video",
			description:
				"Professional product photography and video services to showcase your products in the best light.",
			color: "from-green-600 to-purple-600",
			features: [
				"Product Photography",
				"Video Production",
				"360° Views",
				"Lifestyle Shots",
			],
		},
		{
			icon: <Share2 className="h-8 w-8" />,
			title: "Social Media Design",
			description:
				"Engaging social media content and designs that build brand awareness and drive customer engagement.",
			color: "from-blue-600 to-purple-600",
			features: [
				"Content Creation",
				"Visual Design",
				"Brand Consistency",
				"Engagement Strategy",
			],
		},
		{
			icon: <Search className="h-8 w-8" />,
			title: "SEO Services",
			description:
				"Comprehensive SEO strategies to improve your search engine rankings and drive organic traffic.",
			color: "from-purple-600 to-green-600",
			features: [
				"Keyword Research",
				"On-Page SEO",
				"Technical SEO",
				"Analytics & Reporting",
			],
		},
		{
			icon: <Megaphone className="h-8 w-8" />,
			title: "Digital Advertising",
			description:
				"Strategic digital advertising campaigns across multiple platforms to maximize your ROI and reach.",
			color: "from-green-600 to-blue-600",
			features: [
				"PPC Campaigns",
				"Social Media Ads",
				"Display Advertising",
				"Performance Tracking",
			],
		},
	];

	const packages = [
		{
			name: "Basic",
			price: "$499",
			period: "/month",
			description: "Essential services for startups and small businesses",
			services: [
				"Basic Website Design",
				"Logo & Basic Branding",
				"Basic SEO Setup",
				"Social Media Templates",
				"Email Support",
				" ",
				" ",
				" ",
				" ",
			],
			color: "from-blue-600 to-blue-700",
			borderColor: "border-blue-500/30",
			popular: false,
			savings: null,
		},
		{
			name: "Pro",
			price: "$999",
			period: "/month",
			description: "Advanced services for growing companies",
			services: [
				"Professional Website (Next.js)",
				"Complete Corporate Identity",
				"Advanced SEO Services",
				"Social Media Design Package",
				"Corporate Consulting (10hrs)",
				"Product Photography",
				"Priority Support",
				" ",
				" ",
				" ",
			],
			color: "from-purple-600 to-purple-700",
			borderColor: "border-purple-500/30",
			popular: false,
			savings: "Save $300/month",
		},
		{
			name: "Premium",
			price: "$1,999",
			period: "/month",
			description: "Complete solution for enterprise-level success",
			services: [
				"Next.js Website + SEO Optimization",
				"Complete Branding Package",
				"Corporate & Export Consulting",
				"Shipping & Logistics Consulting",
				"Professional Photography & Video",
				"Social Media Design & Management",
				"Digital Advertising Campaigns",
				"24/7 Dedicated Support",
				"Monthly Strategy Sessions",
			],
			color: "from-green-600 to-green-700",
			borderColor: "border-green-500/30",
			popular: true,
			savings: "Save $800/month",
		},
	];

	return (
		<section id="services" className="py-20 px-6 lg:px-8 relative">
			{/* Background effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/30 to-background"></div>

			{/* Animated background elements */}
			<div className="absolute top-40 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-300"></div>
			<div className="absolute bottom-60 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
			<div className="absolute top-1/3 right-1/3 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Our{" "}
						<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
							Services
						</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Comprehensive digital solutions designed to transform your business
						and accelerate your growth in the modern marketplace.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
					{services.map((service, index) => (
						<Card
							key={index}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group hover:transform hover:scale-105"
						>
							<CardHeader className="pb-4">
								<div
									className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
								>
									<div className="text-white">{service.icon}</div>
								</div>
								<CardTitle className="text-xl text-white mb-2">
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-gray-400">{service.description}</p>
								<div className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<div
											key={featureIndex}
											className="flex items-center space-x-2"
										>
											<div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
											<span className="text-sm text-gray-300">{feature}</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Packages Section */}
				<div>
					<div className="text-center mb-16">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">
							Service{" "}
							<span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
								Packages
							</span>
						</h3>
						<p className="text-lg text-gray-400 max-w-2xl mx-auto">
							Choose the perfect package that fits your business needs and
							budget. All plans include our premium support and consultation.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{packages.map((pkg, index) => (
							<Card
								key={pkg.name}
								className={`relative bg-gray-900/50 backdrop-blur-sm border ${
									pkg.borderColor
								} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105 ${
									pkg.popular ? "ring-2 ring-green-500/30 lg:scale-110" : ""
								}`}
							>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<Badge className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 flex items-center gap-2">
											<Star className="h-4 w-4" />
											Most Popular
										</Badge>
									</div>
								)}

								{pkg.savings && (
									<div className="absolute -top-2 -right-2">
										<Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 text-xs">
											{pkg.savings}
										</Badge>
									</div>
								)}

								<CardHeader className="text-center pb-6">
									<CardTitle className="text-2xl font-bold text-white mb-2">
										{pkg.name}
									</CardTitle>
									<CardDescription className="text-gray-400 mb-4">
										{pkg.description}
									</CardDescription>
									<div className="flex items-baseline justify-center">
										<span
											className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}
										>
											{pkg.price}
										</span>
										<span className="text-gray-400 ml-2">{pkg.period}</span>
									</div>
								</CardHeader>

								<CardContent className="space-y-3">
									{pkg.services.map((service, serviceIndex) => (
										<div
											key={serviceIndex}
											className="flex items-start space-x-3"
										>
											<Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
											<span className="text-gray-300 text-sm">{service}</span>
										</div>
									))}
								</CardContent>

								<CardFooter className="pt-6">
									<Button
										asChild // 👉 let Button render its child (instead of <button>)
										className={`w-full bg-gradient-to-r ${
											pkg.color
										} hover:opacity-90 text-white border-0 transition-all duration-200 transform hover:scale-105 ${
											pkg.popular ? "shadow-lg shadow-green-500/25" : ""
										}`}
										size="lg"
									>
										<Link
											href={`/pre-checkout/?plan=${pkg.name.toLowerCase()}`}
										>
											Choose Plan
										</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>

					{/* Package Benefits */}
					<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20">
							<CardContent className="p-6 text-center">
								<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Check className="h-6 w-6 text-white" />
								</div>
								<h4 className="text-lg font-bold text-white mb-2">
									30-Day Money Back
								</h4>
								<p className="text-gray-400 text-sm">
									Not satisfied? Get a full refund within 30 days, no questions
									asked.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-purple-900/20 to-green-900/20 border border-purple-500/20">
							<CardContent className="p-6 text-center">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Users className="h-6 w-6 text-white" />
								</div>
								<h4 className="text-lg font-bold text-white mb-2">
									Dedicated Support
								</h4>
								<p className="text-gray-400 text-sm">
									Direct access to our expert team for consultation and ongoing
									support.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
							<CardContent className="p-6 text-center">
								<div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
									<Star className="h-6 w-6 text-white" />
								</div>
								<h4 className="text-lg font-bold text-white mb-2">
									Scalable Solutions
								</h4>
								<p className="text-gray-400 text-sm">
									Upgrade or customize your package as your business grows and
									evolves.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Bottom CTA */}
					<div className="text-center mt-16">
						<Card className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-green-900/30 border border-gray-700/50 backdrop-blur-sm">
							<CardContent className="p-8">
								<h4 className="text-2xl font-bold text-white mb-4">
									Need a Custom Solution?
								</h4>
								<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
									Every business is unique. Let's discuss how we can create a
									tailored package that perfectly fits your specific
									requirements and goals.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200">
										Schedule Consultation
									</Button>
									<Button
										variant="outline"
										className="border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 px-8 py-3 transition-all duration-200"
									>
										View Portfolio
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
