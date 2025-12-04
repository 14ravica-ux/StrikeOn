import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Phone, Search } from 'lucide-react';
import { Button } from '../components/Button';
import { Branch } from '../types';

// Mock Data for Cities with Coordinates
const locations: Branch[] = [
  { city: "Regina", address: "123 Industrial Dr", phone: "(306) 510-0059", type: "Headquarters", isMain: true, lat: 50.4452, lng: -104.6189 },
  { city: "Moose Jaw", address: "Service Area Only", phone: "(306) 555-0199", type: "Branch", isMain: false, lat: 50.3933, lng: -105.5355 },
  { city: "White City", address: "Service Area Only", phone: "(306) 510-0059", type: "Service Area", isMain: false, lat: 50.4353, lng: -104.3644 },
  { city: "Pilot Butte", address: "Service Area Only", phone: "(306) 510-0059", type: "Service Area", isMain: false, lat: 50.4686, lng: -104.4217 },
  { city: "Lumsden", address: "Service Area Only", phone: "(306) 510-0059", type: "Service Area", isMain: false, lat: 50.6483, lng: -104.8661 },
  { city: "Weyburn", address: "Service Area Only", phone: "(306) 555-0200", type: "Branch", isMain: false, lat: 49.6631, lng: -103.8569 },
];

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const BranchFinder: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Branch | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markers = useRef<any[]>([]);

  const filtered = locations.filter(l => l.city.toLowerCase().includes(search.toLowerCase()));

  // Initialize Map
  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 50.4452, lng: -104.6189 }, // Default to Regina
        zoom: 9,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{ "visibility": "off" }]
            }
        ]
      });

      // Create markers
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapInstance.current,
          title: location.city,
          animation: window.google.maps.Animation.DROP,
        });

        // Info Window
        const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px;">
                <h3 style="font-weight: bold; font-size: 16px; color: #0f172a; margin-bottom: 4px;">${location.city}</h3>
                <span style="background-color: #84cc16; color: #0f172a; font-size: 10px; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">${location.type}</span>
                <p style="color: #64748b; margin-top: 8px; font-size: 14px;">${location.phone}</p>
              </div>
            `
        });

        marker.addListener("click", () => {
           setSelectedLocation(location);
           infoWindow.open({
               anchor: marker,
               map: mapInstance.current,
           });
           setSearch(location.city); // Sync search input
        });

        markers.current.push({ marker, location, infoWindow });
      });
    };

    // Check if google is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Retry or wait for callback (simple retry for demo)
      const checkGoogle = setInterval(() => {
          if (window.google && window.google.maps) {
              initMap();
              clearInterval(checkGoogle);
          }
      }, 500);
      return () => clearInterval(checkGoogle);
    }
  }, []);

  // Handle Location Selection from List
  const handleSelectLocation = (loc: Branch) => {
      setSelectedLocation(loc);
      if (mapInstance.current) {
          mapInstance.current.panTo({ lat: loc.lat, lng: loc.lng });
          mapInstance.current.setZoom(12);
          
          // Trigger marker click to open info window
          const markerObj = markers.current.find(m => m.location.city === loc.city);
          if (markerObj) {
              // Close other info windows
              markers.current.forEach(m => m.infoWindow.close());
              markerObj.infoWindow.open({
                  anchor: markerObj.marker,
                  map: mapInstance.current
              });
              markerObj.marker.setAnimation(window.google.maps.Animation.BOUNCE);
              setTimeout(() => {
                  markerObj.marker.setAnimation(null);
              }, 750);
          }
      }
  };

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-brand-navy py-12 text-white">
         <div className="max-w-7xl mx-auto px-4">
           <h1 className="text-3xl font-bold mb-4">Find A Branch Near You</h1>
           <p className="text-slate-300">Proudly serving Regina and Southern Saskatchewan.</p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
         {/* List View */}
         <div className="lg:col-span-1 bg-slate-50 p-6 rounded-lg border border-slate-200 h-fit flex flex-col max-h-[700px]">
            <div className="mb-6 relative">
              <input 
                type="text"
                placeholder="Search city..."
                className="w-full p-3 pl-10 border border-slate-300 rounded focus:ring-2 focus:ring-brand-lime outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
              {filtered.map((loc, idx) => (
                <div 
                    key={idx} 
                    onClick={() => handleSelectLocation(loc)}
                    className={`p-4 rounded shadow-sm border-l-4 cursor-pointer transition-all duration-200 ${selectedLocation?.city === loc.city ? 'bg-white border-brand-lime shadow-md ring-2 ring-brand-lime/20' : 'bg-white border-transparent hover:border-slate-300'}`}
                >
                  <div className="flex justify-between items-start">
                     <h3 className="font-bold text-brand-navy text-lg">{loc.city}</h3>
                     <div className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${loc.type === 'Headquarters' ? 'bg-brand-navy text-white' : 'bg-brand-lime/20 text-brand-darkLime'}`}>
                        {loc.type}
                     </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-2 mt-1 flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                    {loc.address}
                  </p>
                  <a href={`tel:${loc.phone}`} className="text-brand-navy font-bold hover:underline flex items-center text-sm bg-slate-100 p-2 rounded w-fit">
                    <Phone className="w-3 h-3 mr-2" />
                    {loc.phone}
                  </a>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  <p>No locations found matching "{search}".</p>
                  <p className="text-sm mt-2">We may still serve your area.</p>
                  <Button size="sm" variant="outline" className="mt-4" onClick={() => window.location.href="tel:306-510-0059"}>Call Us to Check</Button>
                </div>
              )}
            </div>
         </div>

         {/* Google Map */}
         <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-2xl border border-slate-200 min-h-[500px] relative">
            <div ref={mapRef} className="w-full h-full min-h-[500px] bg-slate-200">
                {/* Fallback content while map loads */}
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <MapPin className="w-12 h-12 mb-2 animate-bounce" />
                    <p>Loading Interactive Map...</p>
                </div>
            </div>
            
            {/* Overlay Info Card (Desktop Only) */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-100 max-w-xs hidden md:block z-10">
                <h4 className="font-bold text-brand-navy text-sm mb-1">Service Area Coverage</h4>
                <p className="text-xs text-slate-500">
                    Our technicians are GPS-tracked and dispatched from the nearest service hub to ensure fast response times for emergencies.
                </p>
            </div>
         </div>
       </div>
    </div>
  );
};