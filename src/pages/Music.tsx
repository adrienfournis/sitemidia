import React from 'react';
import { Music2, Headphones, Calendar, Radio, RefreshCcw, Users } from 'lucide-react';

export function Music() {
  return (
    <div className="pt-12 min-h-screen">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-24">
          <Music2 className="w-16 h-16 text-purple-300 mb-6" />
          <h1 className="text-6xl font-semibold mb-6">Music</h1>
          <p className="text-2xl text-gray-400 max-w-2xl">
            Expert-curated playlists that enhance your brand identity and create unforgettable customer experiences.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-12 py-24">
          <div>
            <Headphones className="w-12 h-12 text-purple-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Expert Curation</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our team of music specialists and DJs carefully curate each playlist, ensuring your audio environment perfectly matches your brand's personality and resonates with your target audience.
            </p>
          </div>
          <div>
            <Calendar className="w-12 h-12 text-purple-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Special Events</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tailored music selections for holidays, promotions, and special events that create the perfect atmosphere and enhance customer engagement.
            </p>
          </div>
          <div>
            <Users className="w-12 h-12 text-purple-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Brand Alignment</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We create music programs that align perfectly with your brand identity, target customers, and core values, delivering a cohesive brand experience.
            </p>
          </div>
          <div>
            <RefreshCcw className="w-12 h-12 text-purple-300 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Regular Updates</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our playlists are continuously refreshed to keep your audio environment fresh and engaging while maintaining your brand's musical identity.
            </p>
          </div>
        </div>

        {/* Content Accuracy Section */}
        <div className="py-24">
          <div className="apple-button rounded-3xl p-12">
            <div className="flex items-center mb-8">
              <Radio className="w-12 h-12 text-purple-300 mr-6" />
              <h3 className="text-2xl font-semibold">Always Accurate Content</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our dedicated team ensures that every playlist is meticulously curated and maintained. We continuously monitor and adjust the music selection to maintain perfect alignment with your brand values and customer preferences, delivering a consistently excellent audio experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}