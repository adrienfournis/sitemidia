import React from 'react';
import { Brain, Zap, Users, Radio, Speaker, Clock, Lightbulb, Cpu } from 'lucide-react';

export function Technology() {
  return (
    <div className="pt-12 min-h-screen">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-24">
          <Brain className="w-16 h-16 text-teal-500 mb-6" />
          <h1 className="text-6xl font-semibold mb-6">Technology</h1>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Advanced hardware and intelligent software powering the future of retail audio experiences.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-12 py-24">
          <div>
            <Cpu className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Midia Player</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our dedicated hardware solution, deployed in thousands of stores worldwide. A reliable, autonomous, and intelligent device designed specifically for retail environments.
            </p>
          </div>
          <div>
            <Users className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Crowd Prediction</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Leverage advanced predictive models to anticipate peak times based on local events, weather patterns, seasonal trends like Black Friday, and historical data for optimal campaign timing.
            </p>
          </div>
          <div>
            <Zap className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Real-time Optimization</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dynamic adjustment of advertising content and frequency based on real-time store conditions, ensuring maximum relevance and effectiveness.
            </p>
          </div>
          <div>
            <Lightbulb className="w-12 h-12 text-teal-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Creative Support</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Work with our dedicated creative team to develop engaging and effective promotional campaigns that capture attention and drive results.
            </p>
          </div>
        </div>

        {/* Hardware Spotlight */}
        <div className="py-24">
          <div className="apple-button rounded-3xl p-12">
            <div className="flex items-center mb-8">
              <Speaker className="w-12 h-12 text-teal-500 mr-6" />
              <h3 className="text-2xl font-semibold">Dedicated Hardware</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              The Midia Player is a purpose-built device designed for 24/7 operation in retail environments. With built-in AI capabilities, offline functionality, and automatic updates, it ensures uninterrupted service and optimal performance. Deployed and trusted by thousands of stores worldwide.
            </p>
          </div>
        </div>

        {/* Real-time Intelligence */}
        <div className="py-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apple-button rounded-3xl p-12">
              <div className="flex items-center mb-8">
                <Clock className="w-12 h-12 text-teal-500 mr-6" />
                <h3 className="text-2xl font-semibold">Autonomous Operation</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our player operates independently with built-in intelligence, ensuring continuous service even during network interruptions.
              </p>
            </div>
            <div className="apple-button rounded-3xl p-12">
              <div className="flex items-center mb-8">
                <Radio className="w-12 h-12 text-teal-500 mr-6" />
                <h3 className="text-2xl font-semibold">Smart Broadcasting</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Intelligent content delivery system that adapts to store conditions and customer behavior patterns in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}