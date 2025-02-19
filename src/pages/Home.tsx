import React, { useState, useEffect } from 'react';
import { Music2, Brain, BarChart3, ChevronRight, Store, Building2, UtensilsCrossed, Fuel, Pill, Building, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Home() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const industries = [
    { icon: Building2, name: 'GMS', description: 'General Merchandise Stores' },
    { icon: Store, name: 'Retail', description: 'Retail Chains & Stores' },
    { icon: UtensilsCrossed, name: 'F&B', description: 'Food & Beverage' },
    { icon: Fuel, name: 'Gas Station', description: 'Gas Stations & Convenience' },
    { icon: Pill, name: 'Pharmacy', description: 'Pharmacies & Healthcare' },
    { icon: Building, name: 'More', description: 'And many more industries' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1604719312566-8912e9227c6a")',
            opacity: '0.15'
          }}
        ></div>
        
        <div className="relative max-w-[980px] mx-auto px-4 text-center z-10">
          <div className="flex justify-center mb-4">
            <div className="scale-150">
              <Logo />
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-semibold mb-8 text-white">The future of retail audio.</h1>
          <p className="text-xl text-gray-300 mb-6">Cutting-edge in-store audio player connected to your advertising network.</p>
          <div className="flex justify-center items-center space-x-6 text-xl">
            <Link to="/retail-advertising" className="text-cyan-300 hover:text-cyan-200 hover:underline flex items-center">
              Learn more <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cyan-300 hover:text-cyan-200 hover:underline flex items-center"
            >
              Book a demo <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="solutions" className="py-24 mt-24 border-t border-white/10">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/retail-advertising" className="group">
              <div className="h-[400px] apple-button rounded-3xl p-10 flex flex-col justify-between transition-all transform hover:scale-[1.02] hover:bg-cyan-950/20">
                <Store className="w-12 h-12 text-cyan-300" />
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">Retail Advertising</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Advanced programmatic audio advertising with complete control.
                  </p>
                  <ChevronRight className="w-6 h-6 mt-4 text-cyan-300 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/music" className="group">
              <div className="h-[400px] apple-button rounded-3xl p-10 flex flex-col justify-between transition-all transform hover:scale-[1.02] hover:bg-violet-950/20">
                <Music2 className="w-12 h-12 text-violet-300" />
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">Music</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Expert playlists and DJ-curated music selections.
                  </p>
                  <ChevronRight className="w-6 h-6 mt-4 text-violet-300 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/technology" className="group">
              <div className="h-[400px] apple-button rounded-3xl p-10 flex flex-col justify-between transition-all transform hover:scale-[1.02] hover:bg-teal-950/20">
                <Brain className="w-12 h-12 text-teal-300" />
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">Technology</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Advanced hardware and intelligent software solutions.
                  </p>
                  <ChevronRight className="w-6 h-6 mt-4 text-teal-300 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/platform" className="group">
              <div className="h-[400px] apple-button rounded-3xl p-10 flex flex-col justify-between transition-all transform hover:scale-[1.02] hover:bg-rose-950/20">
                <BarChart3 className="w-12 h-12 text-rose-300" />
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-white">Platform</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Comprehensive insights and reporting for data-driven decisions.
                  </p>
                  <ChevronRight className="w-6 h-6 mt-4 text-rose-300 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 border-t border-white/10">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-white">Available for your business:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {industries.slice(0, isIndustriesOpen ? industries.length : 3).map((industry, index) => (
              <div key={industry.name} className="apple-button rounded-2xl p-8 text-center hover:bg-cyan-950/20 transition-colors">
                <industry.icon className="w-12 h-12 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-xl font-semibold mb-2 text-white">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            className="flex items-center mx-auto text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            {isIndustriesOpen ? 'Show less' : 'Show more'}
            <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-5xl font-semibold text-center mb-16 text-white">Get in touch.</h2>
          <form className="max-w-2xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="First name"
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
              />
              <input 
                type="text" 
                placeholder="Last name"
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
            />
            <textarea 
              placeholder="Message"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}