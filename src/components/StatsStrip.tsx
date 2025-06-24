
import React from 'react';

const StatsStrip = () => {
  const stats = [
    { number: "73%", text: "of young adults want more political dialogue" },
    { number: "2.4M", text: "youth advocacy posts shared monthly" },
    { number: "156", text: "countries represented in our community" },
    { number: "89%", text: "report improved dialogue skills" }
  ];

  const quotes = [
    "\"Change starts with conversation\" - Generation Z",
    "\"Your voice matters, use it\" - Youth Climate Leaders",
    "\"Real talk creates real change\" - YAP Community"
  ];

  return (
    <section className="bg-gradient-to-r from-navy to-charcoal py-20 px-4">
      <div className="container mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-coral mb-3 tracking-tight">{stat.number}</div>
              <div className="text-white/80 text-sm md:text-base font-light">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* Quotes Carousel */}
        <div className="text-center">
          <div className="text-xl md:text-2xl text-white font-light italic mb-4">
            {quotes[0]}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
