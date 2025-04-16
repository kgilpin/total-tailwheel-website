
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#D2B48C]/10 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl text-primary mb-4">Total Tailwheel, LLC</h3>
          
          <div className="flex items-center text-foreground/80 mb-4">
            <Mail size={18} className="mr-2" />
            <a 
              href="mailto:info@totaltailwheel.com" 
              className="hover:text-primary transition-colors"
            >
              info@totaltailwheel.com
            </a>
          </div>
          
          <div className="h-px w-40 bg-secondary/80 my-4"></div>
          
          <p className="text-sm text-foreground/60 text-center">
            Copyright © {new Date().getFullYear()} Total Tailwheel, LLC<br />
            <span className="text-xs">All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
