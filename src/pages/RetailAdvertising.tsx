import React from 'react';
import { Store, Volume2, BarChart2, Settings, Zap, Users, Globe2, ShieldCheck } from 'lucide-react';

export function RetailAdvertising() {
  return (
    <div className="pt-12 min-h-screen">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-24">
          <Store className="w-16 h-16 text-blue-300 mb-6" />
          <h1 className="text-6xl font-semibold mb-6">Retail Advertising</h1>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Transform your in-store experience with advanced programmatic audio advertising.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-12 py-24">
          <div>
            <Volume2 className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Programmatic Audio</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Maximize revenue from your audio broadcasts with advanced programmatic ad technology.
            </p>
          </div>
          <div>
            <Settings className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Complete Control</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Take full control over which advertisers can and cannot promote in your store.
            </p>
          </div>
          <div>
            <Users className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Live Traffic Analytics</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We collect live traffic from your points of sale to enhance your inventory.
            </p>
          </div>
          <div>
            <Zap className="w-12 h-12 text-blue-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Real-time Optimization</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dynamic adjustment of advertising content and frequency based on real-time store conditions, ensuring maximum relevance and effectiveness.
            </p>
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="py-24">
          <div className="text-center mb-16">
            <Globe2 className="w-16 h-16 text-blue-300 mb-6 mx-auto" />
            <h2 className="text-4xl font-semibold mb-6">Connected Platforms</h2>
            <p className="text-xl text-gray-400">
              Connected to all the main programmatic advertising platforms
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="py-24">
          <div className="apple-button rounded-3xl p-12">
            <div className="flex items-center mb-8">
              <ShieldCheck className="w-12 h-12 text-blue-300 mr-6" />
              <h3 className="text-2xl font-semibold">Enterprise-Grade Security</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our platform ensures your data and advertising operations are protected with bank-level security protocols. All integrations are authenticated and encrypted, providing you with peace of mind while maximizing your advertising revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}