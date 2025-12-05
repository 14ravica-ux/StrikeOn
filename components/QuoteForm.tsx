import React, { useState } from 'react';
import { Button } from './Button';
import { CheckCircle, AlertCircle, Shield } from 'lucide-react';

interface QuoteFormProps {
  isCompact?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ isCompact = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Sending to Formspree using the provided email. 
      // This will trigger a setup email from Formspree if the form hasn't been created yet.
      const response = await fetch("https://formspree.io/f/ravi@strikeonpest.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data && typeof data === 'object' && 'errors' in data && Array.isArray(data.errors)) {
           setError(data.errors.map((error: any) => error.message).join(", "));
        } else {
           setError("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (err) {
       setError("Unable to connect to the server. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-xl border-l-4 border-brand-lime ${isCompact ? 'h-full flex flex-col justify-center' : ''}`}>
        <div className="flex items-center text-brand-lime mb-4">
          <CheckCircle className="w-8 h-8 mr-2" />
          <h3 className="text-xl font-bold text-brand-navy">Request Received!</h3>
        </div>
        <p className="text-slate-600 mb-4">
          Thank you for contacting StrikeOn Pest. Our team has received your details and will call you back shortly at the number provided.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl relative overflow-hidden">
      {/* Brand Accent Top Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy via-brand-lime to-brand-gold"></div>
      
      <div className="flex items-center justify-between mb-4">
         <div>
            <h3 className={`${isCompact ? 'text-xl' : 'text-2xl'} font-black text-brand-navy`}>
              Get a Free Quote
            </h3>
            <p className="text-slate-500 text-sm">
              Fast response. No obligation.
            </p>
         </div>
         <Shield className="w-8 h-8 text-brand-lime/20" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Hidden subject field for Formspree to make the email subject clearer */}
        <input type="hidden" name="_subject" value="New Quote Request - StrikeOn Pest" />
        
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-1">Full Name</label>
          <input 
            required
            type="text" 
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-brand-navy mb-1">Email Address</label>
          <input 
            required
            type="email" 
            id="email"
            name="email"
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-1">Phone Number</label>
          <input 
            required
            type="tel" 
            id="phone"
            name="phone"
            placeholder="(306) 555-0123"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="pest" className="block text-sm font-bold text-brand-navy mb-1">Pest Problem</label>
          <select 
            id="pest"
            name="pest"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-brand-lime focus:border-brand-lime outline-none transition-colors bg-white"
          >
            <option value="General Inquiry">Not Sure / General Inquiry</option>
            <option value="Bed Bugs">Bed Bugs</option>
            <option value="Rodents">Mice / Rats</option>
            <option value="Cockroaches">Cockroaches</option>
            <option value="Ants">Ants</option>
            <option value="Wasps">Wasps / Hornets</option>
            <option value="Commercial">Commercial Services</option>
          </select>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md flex items-start animate-pulse">
            <AlertCircle className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <Button 
          type="submit" 
          fullWidth 
          disabled={loading}
          className="mt-2"
        >
          {loading ? 'Sending...' : 'Get My Free Estimate'}
        </Button>
        
        <p className="text-xs text-center text-slate-400 mt-3 flex items-center justify-center">
          <AlertCircle className="w-3 h-3 mr-1" />
          Your information is secure.
        </p>
      </form>
    </div>
  );
};