import React from 'react';

const metrics = [
  {
    value: "550+",
    label: "Careers Launched",
  },
  {
    value: "300+",
    label: "Students Trained",
  },
  {
    value: "25+",
    label: "Tech Projects Delivered",
  },
  {
    value: "50+",
    label: "Partner Employers",
  }
];

export function MetricsBanner() {
  return (
    <section className="w-full bg-white relative z-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Floating Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] border border-gray-200/60 p-6 md:p-12 relative backdrop-blur-xl mt-8 md:mt-16 mx-4 md:mx-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center md:divide-x md:divide-gray-200/60">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2 md:space-y-3 px-2 md:px-4 transition-transform hover:-translate-y-1 duration-300">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#2029b8] tracking-tighter">
                  {metric.value}
                </h3>
                <p className="text-slate-500 font-bold text-[10px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.15em] leading-tight">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
