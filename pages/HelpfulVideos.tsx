import React from 'react';
import { PlayCircle, Clock } from 'lucide-react';
import { VideoResource } from '../types';

const videos: VideoResource[] = [
  {
    id: 1,
    title: "How to Prepare for Bed Bug Treatment",
    description: "Step-by-step guide on decluttering and prepping your home before our technicians arrive.",
    thumbnailUrl: "https://loremflickr.com/600/400/bedroom,cleaning",
    duration: "4:32",
    category: "Preparation"
  },
  {
    id: 2,
    title: "Signs of Mice in Your Home",
    description: "Learn to identify droppings, gnaw marks, and other early warning signs of a rodent infestation.",
    thumbnailUrl: "https://loremflickr.com/600/400/mouse,hole",
    duration: "3:15",
    category: "Identification"
  },
  {
    id: 3,
    title: "Why DIY Pest Control Often Fails",
    description: "Our lead technician explains the difference between store-bought sprays and professional IPM methods.",
    thumbnailUrl: "https://loremflickr.com/600/400/pest,spray",
    duration: "5:45",
    category: "Education"
  },
  {
    id: 4,
    title: "Ants vs. Termites: Spot the Difference",
    description: "Save your home's structure by knowing exactly which pest you are dealing with.",
    thumbnailUrl: "https://loremflickr.com/600/400/termite,wood",
    duration: "2:50",
    category: "Identification"
  }
];

export const HelpfulVideos: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Helpful Videos</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Watch and learn from the experts. Tips on identification, prevention, and treatment preparation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Categories (Tabs placeholder) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-brand-lime text-brand-navy font-bold rounded-full shadow-md">All Videos</button>
          <button className="px-6 py-2 bg-white text-slate-600 font-medium rounded-full hover:bg-slate-100 shadow-sm border border-slate-200">Preparation</button>
          <button className="px-6 py-2 bg-white text-slate-600 font-medium rounded-full hover:bg-slate-100 shadow-sm border border-slate-200">Identification</button>
          <button className="px-6 py-2 bg-white text-slate-600 font-medium rounded-full hover:bg-slate-100 shadow-sm border border-slate-200">Prevention</button>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-48">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                   <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-brand-darkLime uppercase tracking-wide mb-2">{video.category}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-lime transition-colors">{video.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-brand-lime/10 p-8 rounded-2xl border border-brand-lime/30">
           <h3 className="text-2xl font-bold text-brand-navy mb-4">Have a specific question?</h3>
           <p className="text-slate-600 mb-6">Our team is happy to explain any part of the process over the phone.</p>
           <a href="tel:306-510-0059" className="inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-brand-navy rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
             Call (306) 510-0059
           </a>
        </div>
      </div>
    </div>
  );
};