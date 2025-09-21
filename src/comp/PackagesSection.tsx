import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function PackagesSection() {
  const packages = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "Up to 5 projects",
        "Basic support",
        "Standard templates",
        "Email integration",
        "Basic analytics"
      ],
      color: "from-blue-600 to-blue-700",
      borderColor: "border-blue-500/30",
      popular: false
    },
    {
      name: "Standard",
      price: "$79",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 25 projects",
        "Priority support",
        "Premium templates",
        "Advanced integrations",
        "Detailed analytics",
        "Custom branding",
        "API access"
      ],
      color: "from-purple-600 to-purple-700",
      borderColor: "border-purple-500/30",
      popular: true
    },
    {
      name: "Premium",
      price: "$149",
      period: "/month",
      description: "For enterprise-level organizations",
      features: [
        "Unlimited projects",
        "24/7 dedicated support",
        "Custom solutions",
        "Full API access",
        "Advanced analytics",
        "White-label options",
        "Custom integrations",
        "On-premise deployment"
      ],
      color: "from-green-600 to-green-700",
      borderColor: "border-green-500/30",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 px-6 lg:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/50 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Package
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing plans designed to scale with your business needs
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`relative bg-gray-900/50 backdrop-blur-sm border ${pkg.borderColor} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-purple-500/30' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1">
                    Most Popular
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
                  <span className={`text-5xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">{pkg.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white border-0 transition-all duration-200 transform hover:scale-105`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button 
            variant="outline"
            className="border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 px-8 py-3"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}