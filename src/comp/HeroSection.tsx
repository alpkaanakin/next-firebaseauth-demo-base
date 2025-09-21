import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Softvia
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Innovating Tomorrow's Software Solutions Today. 
          <span className="block mt-2 text-lg text-gray-400">
            Empowering businesses with cutting-edge technology and exceptional digital experiences.
          </span>
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0"
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:text-white hover:bg-white/5 px-8 py-3 text-lg transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Floating elements */}
        <div className="mt-16 flex justify-center space-x-8 text-gray-500">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">500+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">99%</div>
            <div className="text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">24/7</div>
            <div className="text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}