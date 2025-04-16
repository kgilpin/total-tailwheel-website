
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary leading-tight">
              Total Tailwheel
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 mt-4 font-light">
              Tailwheel flight instruction in Stow, Massachusetts
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto md:mx-0 my-6"></div>
            <p className="text-lg text-foreground/80 mt-4 max-w-lg mx-auto md:mx-0">
              Experience authentic flight training in our beautiful, 
              fully restored <span className="font-medium">1954 Cessna 170B</span>. 
              The classic feel of the 1940s with modern avionics.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="px-6 py-3 border border-primary/30 rounded hover:bg-primary/5 transition-colors"
              >
                Meet Our Team
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#D2B48C]/30 blur-xl z-0"></div>
              <img 
                src="./lovable-uploads/2ca92fa9-69a7-4c59-97d3-5f5b7eea759a.png" 
                alt="Cessna 170B N3472C" 
                className="relative z-10 max-w-full rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary/60 hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
