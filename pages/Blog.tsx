import React from 'react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "5 Signs You Have a Bed Bug Infestation",
    excerpt: "Waking up with itchy bites? Check for these tell-tale signs before the problem gets worse.",
    date: "Oct 12, 2023",
    category: "Bed Bugs",
    imageUrl: "https://picsum.photos/seed/bed/600/400"
  },
  {
    id: 2,
    title: "How to Winter-Proof Your Home Against Rodents",
    excerpt: "As the temperature in Regina drops, mice look for warmth. Here is how to keep them out.",
    date: "Sep 28, 2023",
    category: "Prevention",
    imageUrl: "https://picsum.photos/seed/winter/600/400"
  },
  {
    id: 3,
    title: "Are DIY Ant Solutions Effective?",
    excerpt: "We compare store-bought traps vs. professional extermination for carpenter ants.",
    date: "Aug 15, 2023",
    category: "Ants",
    imageUrl: "https://picsum.photos/seed/ants/600/400"
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Pest Control Tips & News</h1>
          <p className="text-slate-300">Expert advice from StrikeOn Pest technicians.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
             <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
               <div className="h-48 overflow-hidden">
                 <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                   <span className="bg-brand-lime/20 text-brand-darkLime px-2 py-1 rounded font-bold">{post.category}</span>
                   <span>{post.date}</span>
                 </div>
                 <h2 className="text-xl font-bold text-brand-navy mb-3 hover:text-brand-lime transition-colors cursor-pointer">{post.title}</h2>
                 <p className="text-slate-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                 <Link to="#" className="text-brand-navy font-bold text-sm uppercase tracking-wide hover:underline">Read Article</Link>
               </div>
             </article>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center max-w-2xl mx-auto">
           <h3 className="text-2xl font-bold text-brand-navy mb-2">Join our Newsletter</h3>
           <p className="text-slate-600 mb-6">Get seasonal pest prevention tips delivered to your inbox.</p>
           <form className="flex gap-2">
             <input type="email" placeholder="Enter your email" className="flex-grow p-3 border border-slate-300 rounded focus:ring-2 focus:ring-brand-lime outline-none" />
             <button className="bg-brand-navy text-white px-6 py-3 rounded font-bold hover:bg-slate-800">Subscribe</button>
           </form>
        </div>
      </div>
    </div>
  );
};