import React from 'react';
import { BarChart3, LineChart, Shield, Clock, Radio, Sliders, BarChart as ChartBar, FileText } from 'lucide-react';

export function Platform() {
  return (
    <div className="pt-12 min-h-screen">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-24">
          <BarChart3 className="w-16 h-16 text-orange-500 mb-6" />
          <h1 className="text-6xl font-semibold mb-6">Platform</h1>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Enterprise-grade platform designed for retail brands and businesses, with complete control over your audio environment.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-12 py-24">
          <div>
            <LineChart className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Advanced Monitoring</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Innovative dashboards provide complete control and real-time insights into your audio broadcasts, traffic patterns, and campaign performance.
            </p>
          </div>
          <div>
            <Radio className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Radio-Style Programming</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Program your streams like a professional radio station, with complete control over scheduling, content mix, and advertising slots.
            </p>
          </div>
          <div>
            <Sliders className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Complete Control</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Set your playlist tempo throughout the week and control advertising frequency to optimize revenue generation based on your business goals.
            </p>
          </div>
          <div>
            <ChartBar className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Revenue Optimization</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Fine-tune your advertising volume and placement to maximize revenue while maintaining an optimal customer experience.
            </p>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="py-24">
          <div className="apple-button rounded-3xl p-12">
            <div className="flex items-center mb-8">
              <Shield className="w-12 h-12 text-orange-500 mr-6" />
              <h3 className="text-2xl font-semibold">Enterprise Analytics</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Comprehensive monitoring and analytics dashboards provide deep insights into your audio broadcasts, helping you optimize performance and maximize impact across all locations.
            </p>
          </div>
        </div>

        {/* Reporting Section */}
        <div className="py-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="apple-button rounded-3xl p-12">
              <div className="flex items-center mb-8">
                <Clock className="w-12 h-12 text-orange-500 mr-6" />
                <h3 className="text-2xl font-semibold">Real-time Monitoring</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Monitor your audio environment in real-time with advanced dashboards that track performance, engagement, and system health.
              </p>
            </div>
            <div className="apple-button rounded-3xl p-12">
              <div className="flex items-center mb-8">
                <FileText className="w-12 h-12 text-orange-500 mr-6" />
                <h3 className="text-2xl font-semibold">Weekly Insights</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Receive detailed weekly reports with actionable insights to help optimize your strategy and maximize profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}