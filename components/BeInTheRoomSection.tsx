import React from 'react';
import Image from 'next/image';

const people = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Engineer, TechCorp",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Lead, InnovateInc",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "CEO, StartUp Hub",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "UX Director, DesignSystems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Lead Developer, CodeWorks",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Rachel Moore",
    role: "CTO, CloudScale",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Data Scientist, AI Analytics",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    name: "Anita Patel",
    role: "Marketing Head, GlobalReach",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    name: "Chris Evans",
    role: "Founder, NextGen Tech",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    name: "Laura Thompson",
    role: "VP of Engineering, BuildRight",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 11,
    name: "Kevin White",
    role: "Head of AI, BrainTrust",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 12,
    name: "Maria Garcia",
    role: "Chief Strategy Officer, GlobalTech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  }
];

export function BeInTheRoomSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Be in the room with...
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with top industry leaders, seasoned professionals, and brilliant minds from leading tech companies worldwide.
          </p>
        </div>

        {/* The group class allows us to detect hover state over the entire grid */}
        <div className="group grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {people.map((person) => (
            <div
              key={person.id}
              className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden cursor-pointer shadow-sm transition-all duration-500 ease-in-out lg:group-hover:grayscale lg:group-hover:opacity-60 lg:hover:!grayscale-0 lg:hover:!opacity-100 lg:hover:scale-[1.02] hover:shadow-2xl hover:z-10 bg-white"
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Overlay: Always visible partially on mobile, fully on hover for desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent lg:opacity-0 lg:hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                <div className="lg:transform lg:translate-y-4 lg:hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-[15px] sm:text-lg md:text-xl font-bold mb-0.5 leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm font-medium leading-tight">
                    {person.role}
                  </p>
                  
                  {/* Decorative underline */}
                  <div className="w-8 md:w-12 h-0.5 md:h-1 bg-primary mt-2 md:mt-4 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
