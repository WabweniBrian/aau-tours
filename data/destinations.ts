import type { Destination } from "@/types/destination";

export const destinationsData: Destination[] = [
  {
    id: "bwindi-impenetrable-forest",
    title: "Bwindi Impenetrable Forest",
    slug: "bwindi-impenetrable-forest",
    category: "national-parks",
    location: "Southwestern Uganda",
    image: "/images/bwindi.jpg",
    shortDescription:
      "Home to half of the world's remaining mountain gorilla population and incredible biodiversity.",
    description:
      "Bwindi Impenetrable National Park is a UNESCO World Heritage Site located in southwestern Uganda. The park is part of the Bwindi Impenetrable Forest and is situated along the Democratic Republic of the Congo border next to the Virunga National Park and on the edge of the Albertine Rift. It comprises 331 square kilometers of jungle forests and contains both montane and lowland forest. The park is known for its exceptional biodiversity, with more than 160 species of trees and over 100 species of ferns. It's most notable for the 400 Bwindi gorillas, half of the world's population of the critically endangered mountain gorillas.",
    highlights: [
      "Gorilla trekking experiences with expert guides",
      "Over 350 species of birds including 23 Albertine Rift endemics",
      "Forest walks and waterfall hikes",
      "Cultural encounters with the Batwa pygmy community",
      "Spectacular biodiversity with numerous endemic species",
    ],
    bestTime: "June to August and December to February",
    tourCount: 5,
    relatedTourSlugs: ["gorilla-trekking-bwindi", "uganda-15-days"],
  },
  {
    id: "queen-elizabeth-national-park",
    title: "Queen Elizabeth National Park",
    slug: "queen-elizabeth-national-park",
    category: "national-parks",
    location: "Western Uganda",
    image: "/images/queen-elizabeth-park.jpg",
    shortDescription:
      "Uganda's most popular safari destination with diverse ecosystems and abundant wildlife.",
    description:
      "Queen Elizabeth National Park is Uganda's most visited national park, located in the western region of the country. The park is known for its wildlife, including the famous tree-climbing lions in the Ishasha sector. It includes the Maramagambo Forest and borders the Kigezi Game Reserve, Kyambura Wildlife Reserve, and the Kibale National Park in Uganda, and the Virunga National Park in the Democratic Republic of Congo. The park is home to 95 mammal species and over 600 bird species.",
    highlights: [
      "Game drives to spot lions, elephants, hippos, and leopards",
      "Boat cruises on the Kazinga Channel",
      "Chimpanzee tracking in Kyambura Gorge",
      "Bird watching with over 600 species",
      "Tree-climbing lions in the Ishasha sector",
    ],
    bestTime: "January to February and June to July",
    tourCount: 4,
    relatedTourSlugs: ["queen-elizabeth-safari", "uganda-15-days"],
  },
  {
    id: "murchison-falls-national-park",
    title: "Murchison Falls National Park",
    slug: "murchison-falls-national-park",
    category: "national-parks",
    location: "Northwestern Uganda",
    image: "/images/murchison-falls.webp",
    shortDescription:
      "Uganda's largest national park featuring the dramatic Murchison Falls and abundant wildlife.",
    description:
      "Murchison Falls National Park is Uganda's largest national park, covering an area of 3,893 square kilometers. The park is bisected by the Victoria Nile, which plunges 45 meters over the remnant rift valley wall, creating the dramatic Murchison Falls. The park is home to 76 mammal species and 451 bird species. The mighty waterfall, from which the park gets its name, is one of the most powerful natural flows of water anywhere on earth.",
    highlights: [
      "Viewing the powerful Murchison Falls",
      "Game drives to see giraffes, elephants, lions, and more",
      "Boat safaris on the Victoria Nile",
      "Bird watching opportunities",
      "Chimpanzee tracking in Budongo Forest",
    ],
    bestTime: "December to February",
    tourCount: 3,
    relatedTourSlugs: ["murchison-falls-safari", "uganda-15-days"],
  },
  {
    id: "kibale-national-park",
    title: "Kibale National Park",
    slug: "kibale-national-park",
    category: "national-parks",
    location: "Western Uganda",
    image: "/images/kibale.webp",
    shortDescription:
      "Home to the largest population of chimpanzees in Uganda and incredible primate diversity.",
    description:
      "Kibale National Park is located in western Uganda, protecting a large block of rainforest that contains a diverse array of habitats. The park is home to a large number of endangered chimpanzees, as well as the red colobus monkey and the rare L'Hoest's monkey. The park is known for having one of the highest concentrations of primates in Africa, with 13 species recorded.",
    highlights: [
      "Chimpanzee tracking with expert guides",
      "Bigodi Wetland Sanctuary visits",
      "Night walks to see nocturnal primates",
      "Bird watching with over 375 species",
      "Cultural experiences in surrounding communities",
    ],
    bestTime: "June to September and December to February",
    tourCount: 3,
    relatedTourSlugs: ["chimpanzee-trekking-kibale", "uganda-15-days"],
  },
  {
    id: "lake-bunyonyi",
    title: "Lake Bunyonyi",
    slug: "lake-bunyonyi",
    category: "lakes-rivers",
    location: "Southwestern Uganda",
    image: "/images/Lake-Bunyonyi.jpg",
    shortDescription:
      "One of Africa's deepest lakes with 29 islands and stunning scenery.",
    description:
      "Lake Bunyonyi, meaning 'place of many little birds', is a body of water in southwestern Uganda. It is believed to be the second deepest lake in Africa with a maximum depth of 900 meters. The lake is dotted with 29 islands and surrounded by terraced hills, creating one of the most picturesque landscapes in Uganda. The area is known for its moderate climate and relatively bilharzia-free waters, making it safe for swimming.",
    highlights: [
      "Dugout canoe trips to explore the islands",
      "Bird watching opportunities",
      "Swimming in the safe, bilharzia-free waters",
      "Cultural visits to local communities",
      "Hiking in the surrounding hills",
    ],
    bestTime:
      "Year-round, but June to August and December to February are ideal",
    tourCount: 2,
    relatedTourSlugs: ["uganda-15-days"],
  },
  {
    id: "lake-mburo-national-park",
    title: "Lake Mburo National Park",
    slug: "lake-mburo-national-park",
    category: "national-parks",
    location: "Western Uganda",
    image: "/images/lake-mburo-park.png",
    shortDescription:
      "A compact gem with zebras, impalas, and the only park where you can walk, cycle, and horseback ride.",
    description:
      "Lake Mburo National Park is a compact gem located in western Uganda. It is the smallest of Uganda's savannah national parks and underlain by ancient Precambrian metamorphic rocks which date back more than 500 million years. The park is home to 350 bird species as well as zebra, impala, eland, buffalo, oribi, Defassa waterbuck, leopard, hippo, and hyena.",
    highlights: [
      "Walking safaris (the only park in Uganda where this is permitted)",
      "Boat trips on Lake Mburo",
      "Horseback safaris through the savannah",
      "Mountain biking trails",
      "Bird watching with over 350 species",
    ],
    bestTime: "June to August and December to February",
    tourCount: 2,
    relatedTourSlugs: ["uganda-15-days"],
  },
];
