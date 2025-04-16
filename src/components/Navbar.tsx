
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-medium text-primary">Total Tailwheel</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-1">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('features')} className="nav-link">Why Choose Us</button>
          <button onClick={() => scrollToSection('equipment')} className="nav-link">Equipment</button>
          <button onClick={() => scrollToSection('training')} className="nav-link">Training</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          <button onClick={() => scrollToSection('team')} className="nav-link">Our Team</button>
          <button onClick={() => scrollToSection('location')} className="nav-link">Location</button>
          <button onClick={() => scrollToSection('resources')} className="nav-link">Resources</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">About</button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Why Choose Us</button>
            <button onClick={() => scrollToSection('equipment')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Equipment</button>
            <button onClick={() => scrollToSection('training')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Training</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('team')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Our Team</button>
            <button onClick={() => scrollToSection('location')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Location</button>
            <button onClick={() => scrollToSection('resources')} className="text-left py-2 px-4 hover:bg-secondary/30 rounded transition-colors">Resources</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
