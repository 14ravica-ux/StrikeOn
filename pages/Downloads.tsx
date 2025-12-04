import React from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { DownloadResource } from '../types';

const resources: DownloadResource[] = [
  {
    id: "bed-bug-prep",
    title: "Bed Bug Treatment Prep Sheet",
    description: "Essential checklist to prepare your bedrooms and living areas before heat treatment.",
    fileSize: "1.2 MB",
    type: "PDF"
  },
  {
    id: "cockroach-prep",
    title: "Cockroach Gel Treatment Prep",
    description: "Instructions for cleaning kitchen cabinets and removing food sources prior to service.",
    fileSize: "850 KB",
    type: "PDF"
  },
  {
    id: "rodent-info",
    title: "Rodent Bait Station Safety Guide",
    description: "Safety information regarding our tamper-resistant bait stations for pet owners.",
    fileSize: "500 KB",
    type: "PDF"
  },
  {
    id: "general-brochure",
    title: "StrikeOn Pest Services Brochure",
    description: "Overview of our residential and commercial plans for your records.",
    fileSize: "2.4 MB",
    type: "PDF"
  }
];

export const Downloads: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Downloads & Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Access preparation sheets, safety data, and brochures to ensure a smooth service experience.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid gap-6">
          {resources.map((res) => (
            <div key={res.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-lg flex items-center justify-center shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-brand-navy mb-1">{res.title}</h3>
                <p className="text-slate-600 text-sm mb-2">{res.description}</p>
                <div className="flex items-center text-xs text-slate-400">
                   <span className="font-bold bg-slate-100 px-2 py-1 rounded mr-3">{res.type}</span>
                   <span>{res.fileSize}</span>
                </div>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-brand-lime text-brand-navy font-bold rounded-lg hover:bg-brand-darkLime transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
           <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
           <div>
             <h4 className="text-lg font-bold text-blue-900 mb-2">Why Preparation Matters</h4>
             <p className="text-blue-800 text-sm leading-relaxed">
               Proper preparation is critical for the success of pest treatments. Following these guides ensures our products can reach pest hiding spots and prevents re-infestation. If you are unable to complete the preparation due to mobility issues, please let us know in advance.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};