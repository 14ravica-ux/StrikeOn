import { Service, Testimonial, FAQ, PestInfo, Branch, BlogPost, VideoResource, DownloadResource } from '../types';

export const services: Service[] = [
  {
    id: 'bed-bugs',
    title: 'Bed Bug Control',
    description: 'Complete elimination of bed bug infestations using heat treatment and targeted pesticide applications. We guarantee results.',
    icon: 'Bug',
    link: '/residential'
  },
  {
    id: 'rodents',
    title: 'Rodent Control',
    description: 'Mice and rat extermination with exclusion work. We seal entry points and eliminate existing infestations using safe, proven methods.',
    icon: 'Mouse',
    link: '/residential'
  },
  {
    id: 'cockroaches',
    title: 'Cockroach Elimination',
    description: 'Targeted gel bait and residual spray treatments to eliminate cockroach colonies at the source. Fast-acting and long-lasting.',
    icon: 'Bug',
    link: '/residential'
  },
  {
    id: 'ants',
    title: 'Ant Control',
    description: 'Identify ant species and apply the right treatment — from carpenter ants to pavement ants, we handle them all.',
    icon: 'Zap',
    link: '/residential'
  },
  {
    id: 'wasps',
    title: 'Wasp & Hornet Removal',
    description: 'Safe removal of wasp and hornet nests from your property. We protect your family from dangerous stings.',
    icon: 'AlertTriangle',
    link: '/residential'
  },
  {
    id: 'spiders',
    title: 'Spider Control',
    description: 'Eliminate spider populations from your home or business. We target web locations and harborage areas for lasting control.',
    icon: 'Bug',
    link: '/residential'
  },
  {
    id: 'termites',
    title: 'Termite Treatment',
    description: 'Protect your property from costly termite damage with our comprehensive inspection and treatment programs.',
    icon: 'Home',
    link: '/residential'
  },
  {
    id: 'preventive',
    title: 'Preventive Programs',
    description: 'Year-round protection plans keep pests out before they become a problem. Scheduled visits and ongoing monitoring.',
    icon: 'Shield',
    link: '/residential'
  }
];

export const residentialServices: Service[] = [
  { id: 'res-bedbug', title: 'Bed Bug Treatment', description: 'Complete heat and chemical treatment to eliminate bed bugs from your home. Includes inspection, treatment, and 30-day follow-up.', icon: 'Bug', link: '/residential' },
  { id: 'res-rodent', title: 'Mice & Rat Control', description: 'Trapping, bait stations, and exclusion work to remove rodents and prevent re-entry.', icon: 'Home', link: '/residential' },
  { id: 'res-cockroach', title: 'Cockroach Control', description: 'Gel bait and spray treatment to eliminate roach colonies in kitchen, bathroom, and wall voids.', icon: 'Bug', link: '/residential' },
  { id: 'res-ants', title: 'Ant Extermination', description: 'Colony elimination using species-specific baits and perimeter treatments.', icon: 'Zap', link: '/residential' },
  { id: 'res-wasps', title: 'Wasp & Hornet Removal', description: 'Safe nest removal and chemical treatment to protect your family outdoors.', icon: 'AlertTriangle', link: '/residential' },
  { id: 'res-spiders', title: 'Spider Treatments', description: 'Residual spray treatments targeting spider harborage areas inside and around your home.', icon: 'Bug', link: '/residential' },
  { id: 'res-preventive', title: 'Home Protection Plan', description: 'Quarterly or seasonal inspections and treatments to keep your home pest-free year-round.', icon: 'Shield', link: '/residential' },
];

export const commercialServices: Service[] = [
  { id: 'com-restaurant', title: 'Restaurants & Food Service', description: 'Health code-compliant pest management for kitchens, prep areas, and dining rooms. Discreet service available.', icon: 'UtensilsCrossed', link: '/commercial' },
  { id: 'com-hotel', title: 'Hotels & Hospitality', description: 'Comprehensive bed bug programs, rodent control, and ongoing monitoring for hotels and motels.', icon: 'Building', link: '/commercial' },
  { id: 'com-warehouse', title: 'Warehouses & Storage', description: 'Large-scale rodent and insect programs for warehouses, distribution centres, and industrial facilities.', icon: 'Warehouse', link: '/commercial' },
  { id: 'com-office', title: 'Office Buildings', description: 'Discreet, non-disruptive pest control for offices, retail spaces, and commercial properties.', icon: 'Building2', link: '/commercial' },
  { id: 'com-healthcare', title: 'Healthcare Facilities', description: 'IPM-based programs designed to meet healthcare facility standards and regulations.', icon: 'Hospital', link: '/commercial' },
  { id: 'com-property', title: 'Property Management', description: 'Multi-unit residential pest management with tenant communication and regulatory compliance.', icon: 'Home', link: '/commercial' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Regina, SK',
    text: 'StrikeOn eliminated our bed bug problem completely. Ravi was professional, thorough, and explained every step of the treatment. Highly recommend!',
    rating: 5
  },
  {
    id: 2,
    name: 'James K.',
    location: 'Regina, SK',
    text: "We had a serious mouse problem in our restaurant. StrikeOn responded same day, sealed all entry points, and we've been rodent-free for over a year.",
    rating: 5
  },
  {
    id: 3,
    name: 'Priya T.',
    location: 'Moose Jaw, SK',
    text: 'Fast, effective, and affordable. The ant problem in my home is completely gone. The technician was knowledgeable and very friendly.',
    rating: 5
  },
  {
    id: 4,
    name: 'David L.',
    location: 'Regina, SK',
    text: 'Used StrikeOn for our apartment building. They handle all our units professionally. Great communication and reliable service every time.',
    rating: 5
  },
  {
    id: 5,
    name: 'Maria C.',
    location: 'Weyburn, SK',
    text: 'Called at 8am and they were at my house by noon for a wasp nest emergency. Impressive response time and very reasonably priced.',
    rating: 5
  },
  {
    id: 6,
    name: 'Tom B.',
    location: 'Regina, SK',
    text: 'StrikeOn has been managing pests at my commercial property for two years. Consistent, professional, and always on schedule.',
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'Is StrikeOn Pest Control licensed and insured?',
    answer: 'Yes. We are fully licensed by the Government of Saskatchewan as a certified pest applicator and carry comprehensive liability insurance. All treatments are performed in compliance with Saskatchewan pesticide regulations.'
  },
  {
    id: 'faq2',
    question: 'Are the pesticides you use safe for my family and pets?',
    answer: "We use Health Canada-registered pesticides applied by a certified professional following all label directions. We always advise on re-entry intervals and take precautions around children and pets. We also offer eco-friendly and low-toxicity options upon request."
  },
  {
    id: 'faq3',
    question: 'Do you offer a guarantee?',
    answer: 'Yes. Most treatments come with a 30-day warranty. If the pest problem returns within the warranty period, we return at no additional charge. Some services, like bed bug heat treatment, include extended warranties.'
  },
  {
    id: 'faq4',
    question: 'How quickly can you respond to an emergency?',
    answer: 'We offer same-day and 24/7 emergency services for urgent situations like wasp nests, large rodent infestations, or bed bug discoveries. Call us at 203-202-5533 anytime.'
  },
  {
    id: 'faq5',
    question: 'How long does a typical treatment take?',
    answer: 'Treatment time depends on the pest and property size. A standard residential treatment takes 1–2 hours. Bed bug treatments can take 4–6 hours for a thorough job. We will give you a time estimate when you book.'
  },
  {
    id: 'faq6',
    question: 'Do I need to leave my home during treatment?',
    answer: 'For most treatments, you can remain at home. For fumigation-style or more intensive applications, we may ask you to vacate for a few hours. We always provide clear instructions before any service.'
  },
  {
    id: 'faq7',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, debit, credit card (Visa/Mastercard), and e-transfer. Payment is due upon completion of service unless otherwise arranged.'
  },
  {
    id: 'faq8',
    question: 'Do you serve areas outside Regina?',
    answer: 'Yes! We serve Regina and the surrounding areas including Moose Jaw, Weyburn, Estevan, White City, Pilot Butte, and other communities within the Saskatchewan region. Contact us to confirm service to your area.'
  }
];

export const pests: PestInfo[] = [
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    orderFamily: 'Cimicidae',
    description: 'Bed bugs are small, reddish-brown parasitic insects that feed on blood. They hide in mattress seams, bed frames, and wall crevices, emerging at night to feed.',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80',
    biology: 'Adult bed bugs are about 5–7 mm long, flat, and oval-shaped. Females lay 1–5 eggs per day, with a full life cycle taking 4–5 weeks under ideal conditions.',
    behavior: 'Primarily nocturnal feeders that detect warmth and CO₂ from sleeping humans. They can survive months without feeding.',
    control: 'Heat treatment (over 50°C) and chemical insecticides. Multiple treatments are usually required. Inspection is key.',
    faq: [
      { question: 'How do I know if I have bed bugs?', answer: 'Look for small blood stains on sheets, dark fecal spots on mattress seams, and a sweet musty odour. Bite marks in a line or cluster are also common.' },
      { question: 'Can bed bugs spread disease?', answer: 'While bites cause discomfort and allergic reactions, bed bugs are not known to transmit diseases. However, secondary infections from scratching are possible.' }
    ]
  },
  {
    id: 'mice',
    name: 'House Mouse',
    scientificName: 'Mus musculus',
    orderFamily: 'Muridae',
    description: 'The house mouse is one of the most common rodent pests in Canada. They enter homes seeking food, warmth, and shelter, contaminating food and causing structural damage.',
    imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80',
    biology: 'Mice breed rapidly — a single pair can produce over 50 offspring per year. They are mostly nocturnal and rarely travel more than 10 metres from their nest.',
    behavior: 'Mice gnaw constantly to keep their teeth sharp, damaging wires, insulation, and wood. They contaminate far more food than they consume.',
    control: 'Snap traps and exclusion work are most effective. Seal all gaps larger than 6mm. Bait stations work for larger infestations.',
    faq: [
      { question: 'How do mice get into homes?', answer: 'Through gaps as small as 6mm — around pipes, utility lines, foundations, and door gaps. They can also gnaw through wood and soft materials.' },
      { question: 'Is one mouse a sign of an infestation?', answer: 'Yes. Mice are rarely alone. If you see one, there are almost certainly more nearby. Act quickly before the population grows.' }
    ]
  },
  {
    id: 'rats',
    name: 'Norway Rat',
    scientificName: 'Rattus norvegicus',
    orderFamily: 'Muridae',
    description: 'Norway rats (brown rats) are larger, more destructive rodents that burrow under foundations and in wall voids. They are strong swimmers and can enter through sewer lines.',
    imageUrl: 'https://images.unsplash.com/photo-1618090584176-7132b9911657?w=400&q=80',
    biology: 'Adults weigh 200–500g and can reach 25cm in body length. Females produce 4–7 litters per year with 6–12 young each.',
    behavior: 'Neophobic (fear of new objects), which makes trapping challenging initially. They follow established runways along walls.',
    control: 'Rodenticide bait stations, snap traps, and exclusion. Professional assessment is recommended for effective control.',
    faq: []
  },
  {
    id: 'cockroaches',
    name: 'German Cockroach',
    scientificName: 'Blattella germanica',
    orderFamily: 'Blattellidae',
    description: 'The German cockroach is the most common roach species in Canadian homes and businesses. They thrive in kitchens and bathrooms and multiply rapidly.',
    imageUrl: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&q=80',
    biology: 'Adults are 10–15mm long, light brown with two dark stripes. A single female can produce hundreds of offspring in her lifetime.',
    behavior: 'Nocturnal, prefer warm and humid environments. Live in cracks, under appliances, and inside cabinet hinges.',
    control: 'Gel bait applied in cracks and harborage areas combined with residual insecticide spray. Sanitation is critical.',
    faq: []
  },
  {
    id: 'ants',
    name: 'Carpenter Ant',
    scientificName: 'Camponotus pennsylvanicus',
    orderFamily: 'Formicidae',
    description: 'Carpenter ants are the largest ant species in Canada and excavate wood to build their nests, causing structural damage over time.',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    biology: 'Black or dark-coloured, 6–13mm. Colonies can number in the thousands. They prefer moist, damaged wood but will colonize sound wood too.',
    behavior: 'Unlike termites, carpenter ants do not eat wood — they excavate it for nesting. Sawdust-like frass near wood is a telltale sign.',
    control: 'Locating and treating the main and satellite colonies. Exterior barrier spray and bait. Eliminating moisture issues.',
    faq: []
  },
  {
    id: 'wasps',
    name: 'Yellowjacket Wasp',
    scientificName: 'Vespula spp.',
    orderFamily: 'Vespidae',
    description: 'Yellowjackets build paper nests in wall voids, attics, and underground. They become highly aggressive in late summer and can sting multiple times.',
    imageUrl: 'https://images.unsplash.com/photo-1591161977090-d4e7d3d3cd6c?w=400&q=80',
    biology: 'Colonies grow from a single queen to thousands of workers by late summer. Workers die off in winter; only new queens overwinter.',
    behavior: 'Defensive of their nest. Can detect vibrations from lawnmowers and foot traffic near ground nests.',
    control: 'Dust insecticide injected into the nest entrance after dark when foragers have returned. Full nest removal is recommended.',
    faq: []
  },
  {
    id: 'spiders',
    name: 'Common House Spider',
    scientificName: 'Parasteatoda tepidariorum',
    orderFamily: 'Theridiidae',
    description: 'House spiders are harmless to humans and actually beneficial as they catch other insects. However, large populations inside can be a nuisance.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    biology: 'Small to medium-sized spiders, 4–7mm. Build tangled cobwebs in corners, basements, and undisturbed areas.',
    behavior: 'Passive hunters that wait in their webs for prey. Enter homes in fall seeking warmth.',
    control: 'Residual spray around perimeter and in harborage areas. Reducing exterior lighting that attracts insect prey.',
    faq: []
  },
  {
    id: 'termites',
    name: 'Eastern Subterranean Termite',
    scientificName: 'Reticulitermes flavipes',
    orderFamily: 'Rhinotermitidae',
    description: 'While less common in Saskatchewan than in eastern Canada, termites can cause significant structural damage. They feed on wood 24/7 and are rarely seen until damage is severe.',
    imageUrl: 'https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?w=400&q=80',
    biology: 'Soft-bodied, pale insects. Colonies can number in the millions. Soldiers have large heads with strong mandibles.',
    behavior: 'Live in soil and build mud tubes to access above-ground wood. Swarmers (winged reproductives) emerge in spring.',
    control: 'Soil treatment with termiticide, bait station systems, and wood treatment. Professional inspection is essential.',
    faq: []
  }
];

export const branches: Branch[] = [
  {
    city: 'Regina',
    phone: '203-202-5533',
    address: '4822 Queen St., Regina, SK S4S 6V8',
    isMain: true,
    type: 'Main Office',
    lat: 50.4452,
    lng: -104.6189
  },
  {
    city: 'Moose Jaw',
    phone: '203-202-5533',
    address: 'Moose Jaw, SK',
    isMain: false,
    type: 'Service Area',
    lat: 50.3934,
    lng: -105.5484
  },
  {
    city: 'Weyburn',
    phone: '203-202-5533',
    address: 'Weyburn, SK',
    isMain: false,
    type: 'Service Area',
    lat: 49.6627,
    lng: -103.8527
  },
  {
    city: 'Estevan',
    phone: '203-202-5533',
    address: 'Estevan, SK',
    isMain: false,
    type: 'Service Area',
    lat: 49.1392,
    lng: -102.9865
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Signs You Have a Bed Bug Infestation (And What to Do)',
    excerpt: 'Waking up with itchy bites? Seeing tiny dark spots on your mattress? Learn the telltale signs of bed bugs and how professional treatment can eliminate them for good.',
    date: '2025-10-15',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80',
    category: 'Bed Bugs'
  },
  {
    id: 2,
    title: 'How to Rodent-Proof Your Home Before Saskatchewan Winter',
    excerpt: 'As temperatures drop, mice and rats actively seek warm shelter indoors. Here are the top exclusion strategies to keep rodents out of your home this season.',
    date: '2025-09-28',
    imageUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&q=80',
    category: 'Rodents'
  },
  {
    id: 3,
    title: "What's the Difference Between DIY and Professional Pest Control?",
    excerpt: 'Store-bought sprays might kill what you see, but they rarely address the source of an infestation. Find out why professional pest control delivers lasting results.',
    date: '2025-09-10',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Tips & Advice'
  },
  {
    id: 4,
    title: 'Restaurant Pest Control: What Every Food Business Owner Should Know',
    excerpt: 'A single pest sighting can cost you a health inspection. Learn how a commercial pest management program protects your business, your reputation, and your customers.',
    date: '2025-08-20',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Are Eco-Friendly Pest Control Options Right for You?',
    excerpt: 'Worried about chemicals around your kids or pets? We break down the green pest control options available and when they work best.',
    date: '2025-07-30',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    category: 'Tips & Advice'
  },
  {
    id: 6,
    title: 'Carpenter Ants vs. Termites: How to Tell Them Apart',
    excerpt: "Both can cause serious structural damage, but they require different treatments. Here's how to identify which wood-destroying pest you're dealing with.",
    date: '2025-07-10',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Pest ID'
  }
];

export const videos: VideoResource[] = [
  {
    id: 1,
    title: 'What to Expect During a Bed Bug Treatment',
    description: 'Walk through the entire bed bug treatment process — from pre-treatment preparation to post-treatment follow-up. Know exactly what to expect.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80',
    duration: '4:32',
    category: 'Bed Bugs'
  },
  {
    id: 2,
    title: 'How to Prepare Your Home for Pest Control Treatment',
    description: 'Simple steps to prepare your home before our technician arrives to ensure maximum treatment effectiveness.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    duration: '3:15',
    category: 'General'
  },
  {
    id: 3,
    title: 'Identifying Common Rodent Entry Points',
    description: 'Learn how to spot the common places mice and rats enter homes — and what you can do to seal them before they become an infestation.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&q=80',
    duration: '5:45',
    category: 'Rodents'
  },
  {
    id: 4,
    title: 'Restaurant Pest Control: Kitchen Inspection Walkthrough',
    description: 'See how our commercial pest inspector reviews a restaurant kitchen — the hotspots we look for and the preventive recommendations we make.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
    duration: '6:20',
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Understanding Wasp Season in Saskatchewan',
    description: "Why do wasps get more aggressive in late summer? Learn about the yellowjacket life cycle and why August and September are the most dangerous months.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1591161977090-d4e7d3d3cd6c?w=400&q=80',
    duration: '3:50',
    category: 'Wasps'
  },
  {
    id: 6,
    title: 'The Truth About Natural Pest Control Remedies',
    description: "Essential oils, diatomaceous earth, ultrasonic repellers — which DIY remedies actually work, and which ones are myths? We test them honestly.",
    thumbnailUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
    duration: '7:10',
    category: 'Tips'
  }
];

export const downloads: DownloadResource[] = [
  {
    id: 1,
    title: 'Bed Bug Preparation Checklist',
    description: 'A comprehensive checklist to prepare your home before bed bug treatment. Following these steps maximizes treatment effectiveness.',
    fileSize: '245 KB',
    type: 'PDF'
  },
  {
    id: 2,
    title: 'Rodent-Proofing Home Guide',
    description: 'Step-by-step guide to identifying and sealing rodent entry points around your home. Includes diagrams of common entry locations.',
    fileSize: '380 KB',
    type: 'PDF'
  },
  {
    id: 3,
    title: 'Commercial Pest Log Template',
    description: 'A pest sighting log template for businesses. Use this to track pest activity and demonstrate due diligence for health inspections.',
    fileSize: '95 KB',
    type: 'DOC'
  },
  {
    id: 4,
    title: 'Saskatchewan Pest Control Regulations Summary',
    description: 'A plain-language summary of Saskatchewan pesticide regulations relevant to property owners and tenants.',
    fileSize: '210 KB',
    type: 'PDF'
  },
  {
    id: 5,
    title: 'Seasonal Pest Calendar – Saskatchewan',
    description: 'Know what pests to watch for in each season in Saskatchewan. Plan your preventive treatments accordingly.',
    fileSize: '175 KB',
    type: 'PDF'
  },
  {
    id: 6,
    title: 'First-Time Customer Welcome Package',
    description: 'Everything you need to know about StrikeOn services, what to expect during treatment, and how to prepare your home.',
    fileSize: '420 KB',
    type: 'PDF'
  }
];

export const areasServed = [
  'Regina', 'Moose Jaw', 'Weyburn', 'Estevan', 'White City', 'Pilot Butte',
  'Emerald Park', 'Lumsden', 'Balgonie', 'Qu\'Appelle', 'Indian Head',
  'Fort Qu\'Appelle', 'Grenfell', 'Moosomin', 'Oxbow', 'Carlyle', 'Redvers'
];
