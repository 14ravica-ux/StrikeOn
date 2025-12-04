
import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, ChevronRight, Bug, Activity, ShieldAlert, HelpCircle, Info } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';
import { PestInfo } from '../types';

// Extended Data for Pests
const pests: PestInfo[] = [
  {
    id: 'cockroaches',
    name: 'German Cockroach',
    scientificName: 'Blattella germanica',
    orderFamily: 'Blattodea / Blattellidae',
    description: 'The most common kind of cockroach found in homes. They are known for spreading bacteria and triggering allergies.',
    imageUrl: 'https://picsum.photos/seed/germancockroach/800/600',
    biology: 'Female German cockroaches are able to produce up to eight egg capsules during their lives, with each one containing up to 40 eggs in total. The egg capsules are dropped in safe areas by the females just a day or two before they are due to hatch. After emerging from the eggs, the nymphs undergo several moulting stages before becoming adults. It takes about 100 days in total for the German cockroach lifecycle to be completed, so it\'s possible for 3-4 generations of cockroaches to be produced each year. An adult cockroach will live for between 100 and 200 days, on average.',
    behavior: 'German cockroaches are known for infesting homes and can often be found in rooms like the kitchen and bathroom where they have access to food and water, while also being able to hide in many dark corners and crevices. During the day, they can conceal themselves in these dark, protected areas, coming out at night to feed. They\'re able to make their home anywhere where they have access to food, water, and shelter, and they can make their way into homes via numerous methods, such as hiding among grocery bags or delivery boxes.',
    control: 'If you have a problem with German cockroaches, the best course of action is to contact experienced pest control operatives. Homeowners will also need to play their part in eliminating the cockroaches by adhering to good standards of sanitation and hygiene to make it harder for the cockroaches to survive. Vacuum cleaners are recommended to be used in harborage areas in order to reduce cockroach populations. Professional exterminators often use gel baits, dusts, and insect growth regulators to effectively eliminate the infestation.',
    faq: [
      {
        question: "How to get rid of cockroaches?",
        answer: "The first step is to call a trusted pest control company. They'll assess the problem and formulate an eradication plan. Insecticide dusts and gel baits are commonly used tools."
      },
      {
        question: "What attracts cockroaches?",
        answer: "They are attracted to food spillages, garbage, pet food, and moisture. Damp areas like bathrooms and messy yards with compost can also draw them in."
      },
      {
        question: "Where do cockroaches come from?",
        answer: "They can sneak in via cracks, crevices, open windows, or be carried inside in boxes, bags, and secondhand appliances."
      },
      {
        question: "How to know if you have cockroaches?",
        answer: "Common signs include rustling sounds at night, pepper-like droppings in drawers, or spotting the insects themselves."
      }
    ]
  },
  {
    id: 'ants',
    name: 'Carpenter Ants',
    scientificName: 'Camponotus',
    orderFamily: 'Hymenoptera / Formicidae',
    description: 'Large ants that can damage wood structures by excavating it to build their nests.',
    imageUrl: 'https://picsum.photos/seed/carpenterants/800/600',
    biology: 'Carpenter ants undergo complete metamorphosis: egg, larva, pupa, and adult. A colony begins with a single fertilized queen. It can take several years for a colony to mature and produce "swarmers" (winged reproductive ants). Unlike termites, they do not eat wood; they simply hollow it out for nesting space.',
    behavior: 'These ants forage for food, often traveling up to 100 yards from their nest. They are primarily nocturnal and feed on sources of protein and sugar, such as honeydew from aphids or household spills. They prefer moist, decaying wood but can expand into sound wood. You may see "frass" (sawdust-like debris) near their nesting sites.',
    control: 'Eliminating moisture problems is the first step. Leaky pipes or roof leaks must be fixed. Professional control involves locating the parent nest (often outdoors) and any satellite nests (often indoors). Baits and non-repellent dusts are injected into wall voids or applied to trails to destroy the colony.',
    faq: [
      {
        question: "Do carpenter ants eat wood?",
        answer: "No, they do not eat wood like termites. They excavate it to build galleries for their nests."
      },
      {
        question: "Are they dangerous?",
        answer: "They don't typically bite or sting humans, but they can cause significant structural damage to homes if left untreated."
      },
      {
        question: "Why do I see big black ants in my house?",
        answer: "Seeing large black ants usually indicates a nest nearby. If you see them in winter, the nest is likely inside the structure."
      }
    ]
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    scientificName: 'Cimex lectularius',
    orderFamily: 'Hemiptera / Cimicidae',
    description: 'Small, parasitic insects that feed on human blood, typically while people sleep.',
    imageUrl: 'https://picsum.photos/seed/bedbugs/800/600',
    biology: 'Bed bugs have three life stages: egg, nymph, and adult. Females can lay up to 5 eggs a day. Nymphs molt five times before reaching adulthood, requiring a blood meal for each molt. Under favorable conditions, the lifecycle can be completed in as little as a month.',
    behavior: 'Bed bugs are cryptic and nocturnal. They hide in mattress seams, box springs, headboards, and behind baseboards during the day. They locate hosts by detecting carbon dioxide and body heat. They are excellent hitchhikers, moving between locations on luggage, clothing, and furniture.',
    control: 'Bed bugs are notoriously difficult to eliminate with DIY methods. Professional heat treatments (raising the room temperature to lethal levels) or targeted chemical applications are required. Preparation involves decluttering, laundering bedding on high heat, and vacuuming extensively.',
    faq: [
      {
        question: "Can I see bed bugs?",
        answer: "Yes, adults are about the size of an apple seed and visible to the naked eye. Nymphs are smaller and translucent."
      },
      {
        question: "Do bed bugs spread disease?",
        answer: "While their bites are itchy and can cause allergic reactions, bed bugs are not known to transmit diseases to humans."
      },
      {
        question: "How do I prevent them?",
        answer: "Inspect hotel rooms when traveling, keep luggage off the floor, and inspect second-hand furniture before bringing it home."
      }
    ]
  },
  {
    id: 'mice',
    name: 'House Mouse',
    scientificName: 'Mus musculus',
    orderFamily: 'Rodentia / Muridae',
    description: 'Small mammals that contaminate food and can spread diseases like Salmonella and Hantavirus.',
    imageUrl: 'https://picsum.photos/seed/housemouse/800/600',
    biology: 'Mice are prolific breeders. A female can have 5-10 litters per year, with 6-8 young per litter. The young reach sexual maturity in about 6 weeks. They have poor eyesight but excellent senses of hearing, smell, and touch.',
    behavior: 'Mice are curious explorers but generally stay within 10-30 feet of their nest. They are nocturnal and can fit through openings as small as a dime. They gnaw on wires, insulation, and wood to keep their teeth sharp and gather nesting material.',
    control: 'Exclusion is key—sealing all entry points into the home. Trapping (snap traps or glue boards) is effective for reducing populations inside. Rodenticide baits in tamper-resistant stations may be used by professionals for larger infestations or exterior perimeters.',
    faq: [
      {
        question: "What is the difference between a mouse and a rat?",
        answer: "Mice are smaller with large ears and long tails. Rats are larger, have thicker tails, and are more cautious of new objects."
      },
      {
        question: "Why are mice dangerous?",
        answer: "They contaminate food with droppings and urine, and their chewing can cause electrical fires."
      },
      {
        question: "Does cheese really attract mice?",
        answer: "Mice actually prefer high-calorie foods like peanut butter, seeds, or dried fruit over cheese."
      }
    ]
  },
  {
    id: 'rats',
    name: 'Norway Rat',
    scientificName: 'Rattus norvegicus',
    orderFamily: 'Rodentia / Muridae',
    description: 'Large, aggressive rodents that burrow underground and damage property with their gnawing.',
    imageUrl: 'https://picsum.photos/seed/norwayrat/800/600',
    biology: 'Norway rats are larger than mice and reproduce rapidly. A female can produce up to 5 litters a year. They typically live in underground burrows but will enter buildings in search of food and warmth during winter.',
    behavior: 'Rats are neophobic, meaning they are afraid of new objects, which makes trapping difficult. They are strong swimmers and climbers. They tend to travel along established runways along walls or fences.',
    control: 'Sanitation is critical; remove garbage and clutter. Rat-proofing involves sealing holes with concrete or steel wool. Exterior bait stations and snap traps placed along runways are effective. Professional service often includes burrow baiting.',
    faq: [
      {
        question: "Can rats come up the toilet?",
        answer: "Yes, Norway rats are excellent swimmers and can navigate sewer pipes to enter homes through toilets, though it is rare."
      },
      {
        question: "How do I know if I have rats or mice?",
        answer: "Rat droppings are much larger (about the size of an olive pit) and capsule-shaped, whereas mouse droppings are small like rice grains."
      },
      {
        question: "Do rats attack people?",
        answer: "Rats will fight if cornered or threatened, but they generally prefer to flee. Bites are possible but uncommon."
      }
    ]
  },
  {
    id: 'wasps',
    name: 'Yellow Jackets',
    scientificName: 'Vespula',
    orderFamily: 'Hymenoptera / Vespidae',
    description: 'Aggressive social wasps that can sting repeatedly. They often build nests in cavities or underground.',
    imageUrl: 'https://picsum.photos/seed/yellowjacket/800/600',
    biology: 'Yellow jacket colonies are annual. Only fertilized queens survive the winter. In spring, the queen starts a new nest. The colony grows throughout the summer, peaking in late summer/early fall with thousands of workers.',
    behavior: 'They are attracted to meats and sweets, making them common pests at picnics. If their nest is threatened, they attack aggressively and can sting multiple times. Nests can be found in wall voids, attics, or underground burrows.',
    control: 'Treating a yellow jacket nest can be dangerous. Professionals use specialized dusts or aerosols injected directly into the nest entrance, often at night when the colony is less active. The entrance should not be sealed until the colony is dead to prevent them from chewing into the home.',
    faq: [
      {
        question: "Do wasps die in winter?",
        answer: "Yes, the workers and the old queen die in freezing temperatures. Only the new queens hibernate to start new nests in spring."
      },
      {
        question: "Should I plug the hole to the nest?",
        answer: "Never plug the hole of an active nest in your wall. The wasps will panic and may chew through the drywall into your home."
      },
      {
        question: "Are they beneficial?",
        answer: "Yes, they eat other pest insects, but they become a danger when nesting too close to human activity."
      }
    ]
  },
  {
    id: 'hornets',
    name: 'Bald-faced Hornet',
    scientificName: 'Dolichovespula maculata',
    orderFamily: 'Hymenoptera / Vespidae',
    description: 'Black and white social wasps known for their large, grey, paper football-shaped nests often found in trees.',
    imageUrl: 'https://picsum.photos/seed/baldfacedhornet/800/600',
    biology: 'Similar to yellow jackets, bald-faced hornets have annual colonies. Queens overwinter in sheltered locations. In spring, they chew wood fibers and mix it with saliva to create the paper pulp for their nests, which can grow to the size of a basketball.',
    behavior: 'These hornets are extremely protective of their nests and will attack aggressively if disturbed. They are beneficial predators that eat flies and other insects, but their defensive nature makes them dangerous near homes.',
    control: 'Removal of a bald-faced hornet nest requires extreme caution and full protective gear. It is best done at night. Treatment typically involves injecting insecticidal dust or aerosol into the nest entrance. Physical removal of the nest is done once the colony is eliminated.',
    faq: [
      {
        question: "Are bald-faced hornets dangerous?",
        answer: "Yes, they are very aggressive and can sting repeatedly. Multiple stings can be dangerous, especially for those with allergies."
      },
      {
        question: "Can I use a hose to knock down the nest?",
        answer: "No! This will only anger the colony and cause them to swarm and attack. Do not disturb the nest."
      },
      {
        question: "Do they reuse their nest next year?",
        answer: "No, they build a new nest every year. Old nests are abandoned in the winter."
      }
    ]
  },
  {
    id: 'spiders',
    name: 'Wolf Spider',
    scientificName: 'Lycosidae',
    orderFamily: 'Araneae / Lycosidae',
    description: 'Large, hairy spiders that hunt prey on the ground rather than spinning webs. Often mistaken for tarantulas.',
    imageUrl: 'https://picsum.photos/seed/wolfspider/800/600',
    biology: 'Wolf spiders are unique in that females carry their egg sacs attached to their spinnerets. Once hatched, the spiderlings ride on the mother\'s back for several weeks. They can live for one to two years.',
    behavior: 'They are solitary hunters with excellent eyesight and speed. They do not spin webs to catch prey but chase it down. As temperatures drop in autumn, they often seek shelter indoors, ending up in basements, garages, and near baseboards.',
    control: 'Exclusion is the best method: seal cracks in foundations, install door sweeps, and repair window screens. Reducing clutter in basements removes hiding spots. Perimeter sprays can help deter them from entering.',
    faq: [
      {
        question: "Is a wolf spider bite poisonous?",
        answer: "They are venomous, but their bite is not considered dangerous to humans. It typically feels like a bee sting and causes minor swelling."
      },
      {
        question: "Why is there a big spider in my basement?",
        answer: "They often enter homes in search of warmth or prey insects. They are accidental intruders."
      },
      {
        question: "Do they jump?",
        answer: "Yes, wolf spiders can pounce on their prey, but they generally run rather than jump long distances."
      }
    ]
  },
  {
    id: 'beetles',
    name: 'Carpet Beetles',
    scientificName: 'Anthrenus verbasci',
    orderFamily: 'Coleoptera / Dermestidae',
    description: 'Small beetles that damage fabrics, carpets, and woolens. It is the larvae, not the adults, that eat fabric.',
    imageUrl: 'https://picsum.photos/seed/carpetbeetles/800/600',
    biology: 'Adults lay eggs on food sources (wool, fur, feathers). The larvae hatch and feed for several months to a year before pupating. Adults feed on pollen and nectar outdoors but fly inside to lay eggs.',
    behavior: 'Larvae prefer dark, secluded places like closets, under furniture, or in air ducts. They feed on natural fibers. You may find shed skins or irregular holes in clothing. Adults are often found on windowsills trying to get outside.',
    control: 'Source reduction is critical. Locate and remove infested items. Thorough vacuuming of carpets and furniture removes eggs and larvae. Professional treatment involves applying residual insecticides to cracks, crevices, and carpet edges.',
    faq: [
      {
        question: "Do carpet beetles bite?",
        answer: "No, but the bristly hairs on the larvae can cause skin irritation or allergic reactions that look like bites."
      },
      {
        question: "What do they eat?",
        answer: "Larvae eat natural fibers: wool, silk, fur, feathers, and pet hair. They do not eat synthetic fabrics unless soiled."
      },
      {
        question: "How did they get in?",
        answer: "Adults can fly in through open windows, or larvae can be brought in on cut flowers or infested fabrics."
      }
    ]
  },
  {
    id: 'fleas',
    name: 'Cat Flea',
    scientificName: 'Ctenocephalides felis',
    orderFamily: 'Siphonaptera / Pulicidae',
    description: 'External parasites that infest dogs, cats, and wildlife, causing itching and transmitting tapeworms.',
    imageUrl: 'https://picsum.photos/seed/catfleas/800/600',
    biology: 'Fleas go through four stages: egg, larva, pupa, and adult. Eggs are laid on the host but fall off into carpets/bedding. Larvae feed on "flea dirt" (dried blood) in the environment. Pupae can remain dormant for months waiting for a host.',
    behavior: 'Adults require a blood meal to reproduce. They are excellent jumpers. Bites on humans often appear around the ankles. An infestation is often noticed when pets scratch excessively.',
    control: 'Integrated approach is needed. The pet must be treated with a vet-approved product. The home must be vacuumed thoroughly to remove eggs/larvae, and a professional insecticide with an Insect Growth Regulator (IGR) should be applied to carpets and furniture.',
    faq: [
      {
        question: "Why do I have fleas if I don't have pets?",
        answer: "Wildlife (raccoons, squirrels) or stray cats may be living under your deck or in the attic, or previous tenants had pets."
      },
      {
        question: "Will vacuuming help?",
        answer: "Yes, vacuuming removes eggs and stimulates pupae to hatch so they can be exposed to the insecticide."
      },
      {
        question: "How long does it take to get rid of fleas?",
        answer: "It can take 3-4 weeks to break the lifecycle, as the pupal stage is resistant to most insecticides."
      }
    ]
  },
  {
    id: 'flies',
    name: 'House Fly',
    scientificName: 'Musca domestica',
    orderFamily: 'Diptera / Muscidae',
    description: 'Common flying pests that carry pathogens and contaminate food surfaces.',
    imageUrl: 'https://picsum.photos/seed/housefly/800/600',
    biology: 'Females lay eggs in decaying organic matter (garbage, feces). Larvae (maggots) hatch in 24 hours. The entire lifecycle from egg to adult can occur in as little as 7-10 days in warm weather.',
    behavior: 'Flies can only ingest liquid food; they regurgitate saliva onto solid food to dissolve it before eating. They rest on walls and ceilings. They are attracted to food odors and waste.',
    control: 'Sanitation is the best defense. Keep garbage cans sealed and clean. Install screens on windows and doors. UV light traps and chemical baits can be used to control adult populations indoors.',
    faq: [
      {
        question: "Why are flies so hard to swat?",
        answer: "They have compound eyes with a 360-degree field of view and react incredibly fast to movement."
      },
      {
        question: "Do flies vomit on food?",
        answer: "Yes, they regurgitate enzymes to liquefy solid food so they can drink it, which spreads bacteria."
      },
      {
        question: "How long do flies live?",
        answer: "Adult house flies typically live for 15 to 25 days."
      }
    ]
  },
  {
    id: 'moths',
    name: 'Indian Meal Moth',
    scientificName: 'Plodia interpunctella',
    orderFamily: 'Lepidoptera / Pyralidae',
    description: 'The most common pantry pest. They infest stored grains, cereals, nuts, and pet food.',
    imageUrl: 'https://picsum.photos/seed/mealmoth/800/600',
    biology: 'Adults lay eggs directly on food sources. Larvae spin silken webs as they feed and grow. When ready to pupate, larvae often leave the food source and crawl up walls or ceilings.',
    behavior: 'Adults are often seen flying in the kitchen near dusk. They have distinct copper-colored wings. The damage is caused by the larvae, which contaminate food with webbing and frass.',
    control: 'Locate and discard the infested food source. Check all opened and unopened packages (larvae can chew through plastic). Vacuum pantry shelves thoroughly. Store grain products in airtight glass or thick plastic containers.',
    faq: [
      {
        question: "Do pantry moths eat clothes?",
        answer: "No, Indian Meal Moths eat grains. Clothes moths are a different species that eat fabric."
      },
      {
        question: "How did they get in my pantry?",
        answer: "They usually hitchhike inside infested food products brought home from the grocery store."
      },
      {
        question: "Are they harmful to eat?",
        answer: "While gross, accidentally consuming them is not known to be toxic or carry disease."
      }
    ]
  },
  {
    id: 'pillbugs',
    name: 'Sowbugs / Pillbugs',
    scientificName: 'Armadillidium vulgare',
    orderFamily: 'Isopoda / Armadillidiidae',
    description: 'Also known as "Roly-Polies". They are crustaceans, not insects, and require moisture to survive.',
    imageUrl: 'https://picsum.photos/seed/sowbugs/800/600',
    biology: 'Females carry eggs in a pouch under their bodies. Young look like miniature adults. They breathe through gills, which is why they must stay in damp environments.',
    behavior: 'They are scavengers that feed on decaying plant matter. They are nocturnal and hide under rocks or logs during the day. They often wander into basements through door thresholds but usually die quickly due to dehydration.',
    control: 'Reduce moisture around the home\'s foundation. Move mulch and leaf litter back from the walls. Seal cracks in basement walls and door thresholds. Chemical barriers can be applied to the exterior perimeter.',
    faq: [
      {
        question: "Do they bite?",
        answer: "No, sowbugs and pillbugs do not bite, sting, or carry diseases."
      },
      {
        question: "Why are they in my basement?",
        answer: "They are looking for moisture or shelter. Their presence often indicates a dampness issue in the home."
      },
      {
        question: "What is the difference between a sowbug and a pillbug?",
        answer: "Pillbugs can roll into a tight ball when threatened; sowbugs cannot."
      }
    ]
  },
  {
    id: 'birds',
    name: 'Pigeons',
    scientificName: 'Columba livia',
    orderFamily: 'Columbiformes / Columbidae',
    description: 'Urban pests that roost on buildings. Their droppings are corrosive and can carry diseases.',
    imageUrl: 'https://picsum.photos/seed/pigeons/800/600',
    biology: 'Pigeons mate for life and breed year-round. Nests are built of twigs and debris on flat surfaces, ledges, or in vents. They rely heavily on humans for food sources in urban areas.',
    behavior: 'They flock together and are creature of habit, returning to the same roosting sites. Pigeon droppings (guano) accumulate quickly and can damage building materials and host fungal diseases like Histoplasmosis.',
    control: 'Bird control focuses on exclusion and deterrents. Spikes, netting, and sloping surfaces prevent roosting. Electronic tracks or predator decoys can also be used. Sanitation involves removing food sources.',
    faq: [
      {
        question: "Are pigeon droppings dangerous?",
        answer: "Yes, dried droppings can release fungal spores into the air that cause respiratory diseases."
      },
      {
        question: "Can I just shoot them?",
        answer: "Local bylaws often restrict the discharge of firearms or harming birds. Deterrents and exclusion are legal and effective methods."
      },
      {
        question: "How do I stop them nesting on my balcony?",
        answer: "Remove clutter and install netting or bird spikes on ledges to physically prevent them from landing."
      }
    ]
  },
  {
    id: 'wildlife',
    name: 'Raccoons',
    scientificName: 'Procyon lotor',
    orderFamily: 'Carnivora / Procyonidae',
    description: 'Intelligent nocturnal mammals that often raid garbage cans and nest in attics or chimneys.',
    imageUrl: 'https://picsum.photos/seed/raccoons/800/600',
    biology: 'Mating occurs in late winter, with litters of 3-5 kits born in spring. Raccoons are omnivores and very adaptable. They do not hibernate but may become dormant during extreme cold.',
    behavior: 'Raccoons are dexterous and can open latches, garbage cans, and tear off shingles to access attics. They use "latrines" (specific spots for waste). They can carry rabies and roundworm.',
    control: 'Prevention is best: secure garbage lids, cap chimneys, and repair roof vents. If they are in the attic, a one-way door is installed to allow them to leave but not re-enter. Trapping and relocation must follow local regulations.',
    faq: [
      {
        question: "Is a raccoon out in the day sick?",
        answer: "Not necessarily, but if it acts disoriented, aggressive, or has trouble walking, stay away and call animal control."
      },
      {
        question: "How do I get them out of my attic?",
        answer: "Do not seal the hole immediately, or you might trap them (or babies) inside. Use a one-way door eviction system."
      },
      {
        question: "What do raccoons hate?",
        answer: "They dislike strong scents like ammonia and loud noises, but these are usually temporary deterrents."
      }
    ]
  },
  {
    id: 'squirrels',
    name: 'Red Squirrel',
    scientificName: 'Tamiasciurus hudsonicus',
    orderFamily: 'Rodentia / Sciuridae',
    description: 'Small, reddish-brown squirrels that are active year-round and notorious for nesting in attics.',
    imageUrl: 'https://picsum.photos/seed/redsquirrel/800/600',
    biology: 'Red squirrels breed in late winter, with litters born in spring. They are territorial and defend their food caches (middens). They do not hibernate but shelter in tree hollows or attics during severe cold.',
    behavior: 'They are very active during the day. They enter homes through soffits, vents, and roof edges. They are known for chewing on electrical wiring, wood, and insulation, causing fire hazards and heat loss.',
    control: 'Similar to other wildlife, exclusion is the most effective method. Install heavy-gauge steel mesh over vents and chimneys. Use one-way doors to allow them to exit the attic but not re-enter. Trim tree branches at least 6 feet away from the roof.',
    faq: [
      {
        question: "How do I know if I have squirrels in the attic?",
        answer: "You will hear scratching, scampering, or rolling noises during the day. Mice and raccoons are typically active at night."
      },
      {
        question: "Do they chew wires?",
        answer: "Yes, squirrels constantly chew to keep their teeth sharp. Chewed wires are a major fire hazard."
      },
      {
        question: "Can I trap them myself?",
        answer: "Live trapping is possible, but without sealing the entry points, new squirrels will simply move in. Exclusion is the priority."
      }
    ]
  },
  {
    id: 'gophers',
    name: 'Richardson\'s Ground Squirrel',
    scientificName: 'Urocitellus richardsonii',
    orderFamily: 'Rodentia / Sciuridae',
    description: 'Commonly known as "gophers" in Saskatchewan, these burrowing rodents damage lawns, gardens, and foundations.',
    imageUrl: 'https://picsum.photos/seed/gopher/800/600',
    biology: 'Females produce one litter per year in spring. They hibernate for a large portion of the year, usually from late summer/early fall until late winter. They live in loose colonies.',
    behavior: 'They build extensive burrow systems with mounds of dirt at the entrances. They feed on grasses, roots, and garden vegetables. Their burrowing can undermine concrete slabs and twist ankles.',
    control: 'Control is most effective in early spring before the young are born. Professional baiting with registered rodenticides or trapping are common methods. Filling burrows without removing the population is usually ineffective.',
    faq: [
      {
        question: "Are they the same as pocket gophers?",
        answer: "No. Richardson's ground squirrels have open holes and run above ground. Pocket gophers stay underground and leave closed dirt mounds."
      },
      {
        question: "Do they carry disease?",
        answer: "They can carry fleas and ticks which may transmit diseases, though direct transmission to humans is rare."
      },
      {
        question: "Why are they digging up my lawn?",
        answer: "They are creating burrows for shelter and hibernation, and feeding on the roots of your grass."
      }
    ]
  },
  {
    id: 'skunks',
    name: 'Striped Skunk',
    scientificName: 'Mephitis mephitis',
    orderFamily: 'Carnivora / Mequitidae',
    description: 'Nocturnal mammals famous for their noxious spray. They often den under decks, sheds, and porches.',
    imageUrl: 'https://picsum.photos/seed/skunk/800/600',
    biology: 'Mating occurs in late winter (February/March). Gestation is about 60 days. Litters of 4-6 kits are born in May or June. They are omnivorous, eating insects, grubs, mice, and garbage.',
    behavior: 'Skunks are mild-mannered and will only spray as a last resort. They warn by stomping feet and raising their tail. They dig cone-shaped holes in lawns searching for grubs.',
    control: 'Exclusion is key: install heavy wire mesh (L-footer) around decks and sheds to prevent burrowing. Remove food sources like pet food and secure garbage. Grub control in lawns can reduce attraction.',
    faq: [
      {
        question: "How do I get rid of skunk smell?",
        answer: "A mixture of hydrogen peroxide, baking soda, and dish soap is more effective than tomato juice for neutralizing the odor."
      },
      {
        question: "Will a skunk spray if I trap it?",
        answer: "It is possible. Professional trappers use specialized traps and techniques (like covering the trap) to keep the animal calm."
      },
      {
        question: "Why are they digging holes in my grass?",
        answer: "They are looking for white grubs (larvae of beetles) to eat. Treating your lawn for grubs can stop this behavior."
      }
    ]
  },
  {
    id: 'paper-wasps',
    name: 'Paper Wasp',
    scientificName: 'Polistes',
    orderFamily: 'Hymenoptera / Vespidae',
    description: 'Slender wasps that build open, umbrella-shaped paper nests under eaves and overhangs.',
    imageUrl: 'https://picsum.photos/seed/paperwasp/800/600',
    biology: 'Queens overwinter in protected areas. In spring, they start a small nest. Nests are smaller than yellow jacket nests and not enclosed in a paper envelope. Colonies are generally small (20-30 wasps).',
    behavior: 'Paper wasps are less aggressive than yellow jackets or hornets and will generally only sting if the nest is touched. They are beneficial predators of garden caterpillars.',
    control: 'If the nest is away from doors or high traffic areas, it can often be left alone. If removal is necessary, aerosol wasp sprays applied from a distance are effective. Knocking down the nest early in the season discourages rebuilding.',
    faq: [
      {
        question: "Do they reuse nests?",
        answer: "No, they build new nests each year. Old nests can be scraped away in winter."
      },
      {
        question: "How can I tell them apart from yellow jackets?",
        answer: "Paper wasps have longer legs that dangle when they fly and are more slender. Their nests are open combs, not enclosed balls."
      },
      {
        question: "Are they dangerous?",
        answer: "Their sting is painful, but they are not aggressive. The risk is lower than with yellow jackets."
      }
    ]
  },
  {
    id: 'cellar-spiders',
    name: 'Cellar Spider',
    scientificName: 'Pholcidae',
    orderFamily: 'Araneae / Pholcidae',
    description: 'Often called "Daddy Longlegs", these spiders have very long, thin legs and are commonly found in basements.',
    imageUrl: 'https://picsum.photos/seed/cellarspider/800/600',
    biology: 'Females carry their egg sacs in their jaws rather than attaching them to the web. They can live for about 2 years. They are known to kill other spiders, including dangerous ones.',
    behavior: 'They build messy, irregular cobwebs in corners, basements, and garages. When disturbed, they vibrate rapidly in their web to blur their outline and confuse predators.',
    control: 'Regular cleaning and vacuuming of webs is usually sufficient. Reducing humidity in basements with dehumidifiers makes the environment less suitable for them and the insects they eat.',
    faq: [
      {
        question: "Are they the most poisonous spider?",
        answer: "This is a myth. While they have venom, their mouthparts are too small to easily penetrate human skin, and the venom is not dangerous to humans."
      },
      {
        question: "Why do they shake?",
        answer: "It is a defense mechanism called 'whirling' to make themselves hard to see and catch by predators."
      },
      {
        question: "Do they eat other spiders?",
        answer: "Yes, they are known to invade the webs of other spiders and eat them."
      }
    ]
  }
];

export const PestLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPest, setSelectedPest] = useState<PestInfo | null>(null);

  // Scroll to top when a pest is selected
  useEffect(() => {
    if (selectedPest) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPest]);

  const filteredPests = pests.filter(pest => 
    pest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pest.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // --- DETAIL VIEW ---
  if (selectedPest) {
    return (
      <div className="bg-slate-50 min-h-screen animate-fade-in">
        {/* Sticky Header for Navigation */}
        <div className="bg-brand-navy text-white sticky top-0 z-40 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
             <button 
                onClick={() => setSelectedPest(null)} 
                className="flex items-center text-sm font-bold text-brand-lime hover:text-white transition-colors"
             >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Library
             </button>
             <div className="hidden md:flex space-x-6 text-sm font-medium">
                <button onClick={() => scrollToSection('biology')} className="hover:text-brand-lime transition-colors">Biology</button>
                <button onClick={() => scrollToSection('behavior')} className="hover:text-brand-lime transition-colors">Behavior</button>
                <button onClick={() => scrollToSection('control')} className="hover:text-brand-lime transition-colors">Control</button>
                <button onClick={() => scrollToSection('faq')} className="hover:text-brand-lime transition-colors">FAQ</button>
             </div>
             <button 
                onClick={() => scrollToSection('quote')}
                className="bg-brand-lime text-brand-navy px-4 py-2 rounded font-bold text-sm hover:bg-brand-darkLime transition-colors"
             >
                Get Help
             </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
               {/* Hero Section */}
               <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-brand-navy mb-2">{selectedPest.name}</h1>
                  <p className="text-xl text-slate-600 leading-relaxed mb-6">{selectedPest.description}</p>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                     <img src={selectedPest.imageUrl} alt={selectedPest.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
               </div>

               {/* Biology Section */}
               <section id="biology" className="scroll-mt-24">
                  <div className="flex items-center mb-4">
                     <div className="bg-brand-lime/20 p-2 rounded-lg mr-4">
                        <Activity className="w-6 h-6 text-brand-darkLime" />
                     </div>
                     <h2 className="text-3xl font-bold text-brand-navy">Biology</h2>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 leading-relaxed text-slate-700">
                     {selectedPest.biology}
                  </div>
               </section>

               {/* Behavior Section */}
               <section id="behavior" className="scroll-mt-24">
                  <div className="flex items-center mb-4">
                     <div className="bg-brand-lime/20 p-2 rounded-lg mr-4">
                        <Bug className="w-6 h-6 text-brand-darkLime" />
                     </div>
                     <h2 className="text-3xl font-bold text-brand-navy">Behavior</h2>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 leading-relaxed text-slate-700">
                     {selectedPest.behavior}
                  </div>
               </section>

               {/* Control Section */}
               <section id="control" className="scroll-mt-24">
                  <div className="flex items-center mb-4">
                     <div className="bg-brand-lime/20 p-2 rounded-lg mr-4">
                        <ShieldAlert className="w-6 h-6 text-brand-darkLime" />
                     </div>
                     <h2 className="text-3xl font-bold text-brand-navy">Control</h2>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 leading-relaxed text-slate-700">
                     {selectedPest.control}
                     <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm">
                        <strong>Note:</strong> DIY solutions often fail because they don't address the root cause. Professional treatment is recommended for full eradication.
                     </div>
                  </div>
               </section>

               {/* FAQ Section */}
               <section id="faq" className="scroll-mt-24">
                  <div className="flex items-center mb-4">
                     <div className="bg-brand-lime/20 p-2 rounded-lg mr-4">
                        <HelpCircle className="w-6 h-6 text-brand-darkLime" />
                     </div>
                     <h2 className="text-3xl font-bold text-brand-navy">FAQ</h2>
                  </div>
                  <div className="space-y-4">
                     {selectedPest.faq?.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                           <h3 className="font-bold text-lg text-brand-navy mb-2 flex items-start">
                              <span className="text-brand-lime mr-2">Q.</span> {item.question}
                           </h3>
                           <p className="text-slate-600 pl-6">{item.answer}</p>
                        </div>
                     ))}
                  </div>
               </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
               {/* ID Card */}
               <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-lime">
                  <h3 className="font-bold text-brand-navy text-xl mb-4 border-b pb-2">Identification</h3>
                  
                  <div className="space-y-4">
                     <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Common Name</span>
                        <p className="font-bold text-slate-800 text-lg">{selectedPest.name}</p>
                     </div>
                     
                     <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Scientific Name</span>
                        <p className="font-serif italic text-slate-600">{selectedPest.scientificName}</p>
                     </div>

                     <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order / Family</span>
                        <p className="text-slate-600">{selectedPest.orderFamily || 'Unknown'}</p>
                     </div>
                  </div>
               </div>

               {/* Quick Actions */}
               <div className="bg-brand-navy text-white p-8 rounded-xl shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-lime rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Found {selectedPest.name} in your home?</h3>
                  <p className="text-slate-300 mb-6 relative z-10">
                     Don't wait for the infestation to spread. StrikeOn Pest offers targeted treatments for {selectedPest.name}.
                  </p>
                  <button 
                    onClick={() => scrollToSection('quote')}
                    className="w-full py-3 bg-brand-lime text-brand-navy font-bold rounded hover:bg-white transition-colors relative z-10 shadow-lg"
                  >
                     Book Inspection
                  </button>
               </div>

               {/* Quote Form */}
               <div id="quote" className="scroll-mt-24">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                     <div className="p-4 bg-slate-100 border-b border-slate-200">
                        <h3 className="font-bold text-center text-brand-navy">Request a Quote</h3>
                     </div>
                     <div className="p-4">
                        <QuoteForm isCompact />
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // --- LIST VIEW ---
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-black mb-6">Pest Identification Library</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Learn to identify common pests – understand their diets, habits and find effective ways to control them.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search pests (e.g., 'bed bug', 'mouse')..."
              className="w-full py-5 pl-14 pr-4 rounded-full text-slate-800 text-lg focus:outline-none focus:ring-4 focus:ring-brand-lime/50 shadow-2xl transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-5 top-5 text-slate-400 w-6 h-6 group-focus-within:text-brand-lime transition-colors" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-4">
           <div>
              <h2 className="text-2xl font-bold text-brand-navy">Common Pests in Regina</h2>
              <p className="text-slate-500">Select a pest to view its full profile.</p>
           </div>
           <div className="text-sm text-slate-400 mt-2 md:mt-0">
              Showing {filteredPests.length} results
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPests.map(pest => (
            <div 
              key={pest.id} 
              onClick={() => setSelectedPest(pest)}
              className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border border-slate-100 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                 <img src={pest.imageUrl} alt={pest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white font-bold flex items-center">
                       View Profile <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-lime transition-colors">{pest.name}</h3>
                   <Info className="w-5 h-5 text-slate-300 group-hover:text-brand-lime transition-colors" />
                </div>
                <p className="text-xs text-brand-darkLime font-bold uppercase tracking-wider mb-3">{pest.orderFamily?.split('/')[0]}</p>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{pest.description}</p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                   <span className="text-sm font-bold text-brand-navy group-hover:underline flex items-center">
                      Learn More &rarr;
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPests.length === 0 && (
           <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-200">
              <Bug className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700">No pests found</h3>
              <p className="text-slate-500">Try adjusting your search terms.</p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-brand-lime font-bold hover:underline">Clear Search</button>
           </div>
        )}

        <div className="mt-20 bg-brand-lime rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-brand-navy opacity-10 pattern-dots"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-black text-brand-navy mb-4">Can't Identify Your Pest?</h2>
              <p className="text-brand-navy/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
                 Upload a photo or describe it to our experts. We provide free identification services to help you find the right solution.
              </p>
              <div className="flex justify-center gap-4 flex-col sm:flex-row">
                 <button onClick={() => window.location.hash = "#quote"} className="bg-brand-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 shadow-xl transition-transform hover:scale-105">
                    Contact an Expert
                 </button>
                 <a href="tel:306-510-0059" className="bg-white text-brand-navy px-8 py-4 rounded-lg font-bold hover:bg-slate-50 shadow-xl flex items-center justify-center transition-transform hover:scale-105">
                    Call (306) 510-0059
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
