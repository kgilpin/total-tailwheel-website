
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { MapPin, Clock, Shield, Plane, Compass, Navigation } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Need to add this script dynamically to ensure it loads after component mount
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section id="about" className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Are you looking for something different? How about flight training in a beautiful,
              hangared, fully restored tailwheel airplane? N3472C, our <strong>1954 Cessna 170B</strong>, 
              offers the look, sound and feel of the 1940s - with a modern instrument panel for when the weather turns sour.
            </p>

            <div className="instagram-container my-12">
              <div className='sk-instagram-feed' data-embed-id='25528592'></div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="features" className="py-16 bg-secondary/5 paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Why Choose N3472C?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <Plane className="text-primary mr-4 mt-1" size={24} />
                  <h3 className="feature-title">Authentic Tailwheel Experience</h3>
                </div>
                <p className="feature-content">
                  Master the art of flying with a direct, hands-on approach that connects you with the aircraft
                  in a way that tricycle gear airplanes can't match.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <Compass className="text-primary mr-4 mt-1" size={24} />
                  <h3 className="feature-title">Modern Avionics</h3>
                </div>
                <p className="feature-content">
                  Classic doesn't have to mean outdated. N3472C is equipped with the latest navigational, communication,
                  and transponder technology to ensure a safe and efficient flying experience. She's equipped for
                  both VFR and IFR, day and night operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <Navigation className="text-primary mr-4 mt-1" size={24} />
                  <h3 className="feature-title">Great for Exploring New England</h3>
                </div>
                <p className="feature-content">
                  Tailwheel airplanes excel in short-field, grass, and turf operations, giving you the versatility to 
                  explore a variety of airports while you train.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <Shield className="text-primary mr-4 mt-1" size={24} />
                  <h3 className="feature-title">Stepping Stone to Your Own Taildragger</h3>
                </div>
                <p className="feature-content">
                  If you're considering purchasing your own tailwheel airplane, flying with us is a great way to 
                  build and hone your skills before you take the plunge.
                  Insurance companies like to see plenty of tailwheel hours. Why keep flying a 172 or Cherokee
                  if that's not the direction you want to go?
                </p>
              </div>
              
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary mr-4 mt-1" size={24} />
                  <h3 className="feature-title">Based at a GA-friendly Airport</h3>
                </div>
                <p className="feature-content">
                  N3472C is based at
                  <a 
                    href="https://www.google.com/maps/place/Minute+Man+Air+Field/@42.461525,-71.5194206,17z/data=!3m1!4b1!4m6!3m5!1s0x89e392516bf03585:0xfeb73f580d5ce105!8m2!3d42.4615211!4d-71.5168457!16zL20vMGN0ejB4?entry=ttu" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mx-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    Minute Man Air Field in Stow, MA
                  </a>. 
                  Minute Man is a gem of general aviation, featuring friendly pilots, budget-friendly fuel prices, and a
                  <a 
                    href="https://fourthandfield.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mx-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    restaurant on the field
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="equipment" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">State-of-the-Art Equipment</h2>
            
            <div className="space-y-8">
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="feature-title">Garmin 650 Nav/Comm:</h3>
                <p className="text-foreground/80">
                  Touch-screen, WAAS, GPS nav/comm ensures precise and reliable navigation on every flight.
                  A Garmin GNC 255 adds redundancy for comms, VOR and LOC/ILS.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="feature-title">Dual Garmin 275 Attitude Indicator + HSI:</h3>
                <p className="text-foreground/80">
                  Experience enhanced situational awareness with these cutting-edge flight instruments, combining traditional
                  pilotage with modern digital displays and built-in battery backup.
                  GPS, Nav 1 and Nav 2 are all selectable on the HSI, along with bearing pointers for each one.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="feature-title">Garmin GTX 345 Transponder</h3>
                <p className="text-foreground/80">
                  A fully modern transponder with ADS-B in and out.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="feature-title">IFR Capability:</h3>
                <p className="text-foreground/80">
                  N3472C is equipped for Instrument Flight Rules (IFR) flying, allowing you to train in a wider range of
                  weather conditions and scenarios.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg">
                <h3 className="feature-title">LED Lighting</h3>
                <p className="text-foreground/80">
                  Visibility is an important component of safe flying. N3472C is equipped with LED landing, taxi, 
                  navigation, and beacon lights to ensure you're seen and safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="training" className="py-16 bg-secondary/5 paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">What Training is Available?</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-foreground/80 mb-6">
                You've finished your primary training and you're a private pilot. Now you're ready to take the
                next steps in your aviation journey, including:
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center p-4 bg-secondary/10 rounded-lg">
                  <Plane size={20} className="text-primary mr-3" />
                  <span>Tailwheel endorsement</span>
                </li>
                <li className="flex items-center p-4 bg-secondary/10 rounded-lg">
                  <Compass size={20} className="text-primary mr-3" />
                  <span>Instrument pilot</span>
                </li>
                <li className="flex items-center p-4 bg-secondary/10 rounded-lg">
                  <Shield size={20} className="text-primary mr-3" />
                  <span>Commercial pilot</span>
                </li>
                <li className="flex items-center p-4 bg-secondary/10 rounded-lg">
                  <Compass size={20} className="text-primary mr-3" />
                  <span>CFI</span>
                </li>
                <li className="flex items-center p-4 bg-secondary/10 rounded-lg col-span-1 md:col-span-2">
                  <Navigation size={20} className="text-primary mr-3" />
                  <span>... and beyond</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">How much does it cost?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary p-6">
                  <h3 className="text-xl text-white font-medium">Airplane Rental</h3>
                  <div className="mt-4 text-3xl font-light text-white">$190<span className="text-lg">/hr wet</span></div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80">
                    Flight hours are measured as Hobbs time. You will be invoiced by email bi-weekly, 
                    payable to Total Tailwheel, LLC. All major credit cards are accepted.
                  </p>
                  <div className="h-px w-full bg-gray-200 my-4"></div>
                  <p className="text-foreground/80">
                    Only dual instruction and check rides are allowed by our insurance. 
                    Solo rental is not available; it's just not economically viable to insure the airplane for that.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary p-6">
                  <h3 className="text-xl text-white font-medium">Instruction - Matt Crane</h3>
                  <div className="mt-4 text-3xl font-light text-white">$80<span className="text-lg">/hr</span></div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/80">
                    Matt will invoice you directly for his services.
                  </p>
                  <div className="flex items-center mt-8">
                    <Clock size={20} className="text-primary mr-2" />
                    <span className="text-foreground/60 text-sm">Flexible scheduling available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="team" className="py-16 bg-secondary/5 paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Meet Our Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bio-card">
                <h3 className="text-xl font-serif font-medium text-primary mb-4">Kevin Gilpin, Owner</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Kevin is the owner of Total Tailwheel. He learned to fly in 2017 and soon after he bought
                  N3472C. Perhaps like you, he was looking for something different. N3472 offered him the opportunity
                  to do a wide variety of flying, from short hops to the beach to cross-country trips to the mountains,
                  VFR and IFR flying. Now, he's formed Total Tailwheel to offer you the opportunity to have
                  the same opportunity. He's found N3472 to be a great teacher. She's fun, reliable, capable, and 
                  versatile. He hopes you'll enjoy flying her as much as he does.
                </p>
              </div>
              
              <div className="bio-card">
                <h3 className="text-xl font-serif font-medium text-primary mb-4">Matt Crane, Instructor</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Matt has been flying since 1984, when he took his first GA flight in a Royal Air Force DeHavilland Chipmunk.
                  Fascinated with the smell of Avgas, oil and leather, and hypnotized by the old taildragger's sinuous taxiing,
                  Matt was finally hooked on aviation when, 20 minutes later, he was introduced to aerobatics. More than 10,000
                  hours of flight time later, he's an ATP rated instructor and check airman in the King Air, having flown most
                  things from model airplanes, to paragliders, high performance gliders, aerobatic airplanes, through twin engine
                  jet airliners. With over 5,000 hours of dual instruction given, he enjoys sharing his love for aviation in a wide
                  gamut of piston and turboprop airplanes. Whenever possible, he prefers to return to basic stick and rudder
                  flying in taildraggers, in which he has over 1,900 hours of fun-filled memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Where are we?</h2>
            
            <div className="text-center mb-8">
              <p className="text-lg text-foreground/80">
                N3472C is based at Minute Man Air Field (6B6) in Stow, MA.<br/>
                The airplane is located in hangar T2-1.   
              </p>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.412018740847!2d-71.519420623761!3d42.46152502868505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e392516bf03585%3A0xfeb73f580d5ce105!2sMinute%20Man%20Air%20Field!5e0!3m2!1sen!2sus!4v1700429146934!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Minute Man Air Field Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section id="resources" className="py-16 bg-secondary/5 paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Resources</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="feature-title">Aircraft Rental Agreement</h3>
                <p className="text-foreground/80 mb-4">
                  You must agree to these terms prior to flight.
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://drive.google.com/file/d/1WMFkDEOU1LmqJbmsP2SvowPsNk-1uGxs/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                    className="resource-link flex items-center"
                  >
                    <span className="mr-2">›</span> View Aircraft Rental Agreement
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1hr-bBwIArt-j1pf-TxRXWvuPGPyA91pm/view?usp=sharing" 
                    target="_blank" 
                    rel="noreferrer"
                    className="resource-link flex items-center"
                  >
                    <span className="mr-2">›</span> View Schedules to the Rental Agreement
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="feature-title">Cessna 170 Owner's Manual</h3>
                <p className="text-foreground/80 mb-4">
                  The physical copy of the owner's manual is in the airplane, and is the official document for legal purposes.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1_Qe2_kPrxFJCOCVAuVKqB0-axxTWREk0/view?usp=drive_link" 
                  target="_blank" 
                  rel="noreferrer"
                  className="resource-link flex items-center"
                >
                  <span className="mr-2">›</span> View unofficial copy of the Cessna 170 Owner's Manual
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
