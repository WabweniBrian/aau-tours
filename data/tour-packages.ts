import type { TourPackage } from "@/types/tour-package";

export const tourPackagesData: TourPackage[] = [
  {
    id: "gorilla-trekking-bwindi",
    title: "3 Days Gorilla Trekking Safari in Bwindi",
    slug: "gorilla-trekking-bwindi",
    location: "Bwindi Impenetrable Forest",
    duration: "3 Days / 2 Nights",
    price: 1200,
    rating: 4.9,
    image: "/images/gorilla-trekking.jpg",
    shortDescription:
      "Experience the thrill of encountering mountain gorillas in their natural habitat on this unforgettable 3-day safari to Bwindi Impenetrable Forest.",
    description:
      "Have an early breakfast before setting off on your adventure from Entebbe international airport or Kampala to Bwindi Impenetrable National Park for your 3 days Uganda gorilla trekking safari. A professional Uganda safari guide will meet you for a transfer to the Park. For the almost 550km drive to Bwindi National Park, you will be driven on a 4×4 wheel safari vehicle on a fairly tarmacked road along Kampala-Masaka-Mbarara-Kabale highway.",
    highlights: [
      "Trek through the ancient Bwindi Impenetrable Forest",
      "Spend one hour with a mountain gorilla family",
      "Learn about gorilla conservation efforts",
      "Experience the culture of local communities",
      "Enjoy comfortable accommodation in the heart of the forest",
      "Contribute to the protection of endangered mountain gorillas",
    ],
    itinerary: [
      {
        title: "Drive to Bwindi Impenetrable Forest",
        location: "Kampala to Bwindi",
        description:
          "Have an early breakfast before setting off on your adventure from Entebbe international airport or Kampala to Bwindi Impenetrable National Park. A professional Uganda safari guide will meet you for a transfer to the Park. For the almost 550km drive to Bwindi National Park, you will be driven on a 4×4 wheel safari vehicle on a fairly tarmacked road along Kampala-Masaka-Mbarara-Kabale highway. Along Kampala – Masaka highway, there will be a stopover at the Equator line in Kayabwe for a photo moment and geographical experiments on how water swirls in opposite directions in the Northern and Southern hemispheres at the Equator line. Continuing to the southern hemisphere for your Uganda gorilla tour, you have lunch en route at Mbarara town. Driving further to western Uganda, the rolling terraced hills of kigezi highlands and the long-horned Ankole cattle are part of what will constitute your scenic drive. On arrival at your preferred accommodation facility, your driver-guide ensures check-in for dinner and a night's rest at the hotel or lodge.",
        activities: [
          "Scenic drive through southwestern Uganda",
          "Equator crossing photo opportunity",
          "Evening check-in at accommodation",
        ],
        accommodation:
          "Luxury: Buhoma Lodge/Chameleon Hill Lodge, Midrange: Silverback Lodge/Nkuringo Gorilla Camp, Budget: Buhoma Community Camp/Gorilla Valley Lodge",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Gorilla Trekking Experience",
        location: "Bwindi Impenetrable Forest",
        description:
          "This is your long-awaited day for the Uganda Mountain Gorilla trekking safari in Bwindi forest. After early morning breakfast, your Uganda safari driver guide will pick you up from the accommodation facility for a drive to the gorilla trekking sector headquarters. At the headquarters, briefing on the tracking etiquette starts before 8:00 am local time. During the briefing, a total of 8 tourists are allocated a single gorilla family to trek according to fitness levels. Each gorilla safari Uganda trekker then receives a trekking stick and heads to the jungle in company of the park rangers and guides, Mountain Gorilla trekking in Bwindi is unpredictable because of the movement behaviors of the gorillas and therefore the activity lasts about 6-8 hours. These hours are spent in search of the gorillas however only 1 hour has spent the presence of these gentle giants. At the end of this memory-filled 1 hour, you return to the park headquarters where you receive a Uganda gorilla trekking tour certificate. Later after that, you meet with your safari driver-guide for a drive to your lodging facility. Besides the gorillas, Bwindi forest is also rich in a variety of African civet and the African golden cats, butterflies, endemic bird species, monkeys such as the red-tailed, Le'host, blue and black and white colobus monkeys, forest hogs, duikers, flowering plant species such as the brown mahogany which is a threatened plant species in the Park and so much more which you will sight as you take your nature walks through the scenic trails of the mighty jungle while on your 3 gorilla trekking safari.",
        activities: [
          "Gorilla trekking (6-8 hours depending on gorilla location)",
          "One hour with a gorilla family",
          "Photography opportunity",
          "Nature walks through the forest",
        ],
        accommodation:
          "Luxury: Buhoma Lodge/Chameleon Hill Lodge, Midrange: Silverback Lodge/Nkuringo Gorilla Camp, Budget: Buhoma Community Camp/Gorilla Valley Lodge",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Return to Kampala",
        location: "Bwindi to Kampala",
        description:
          "After a beautiful night in the foothills of the gorilla land, you embark on the road drive back to Kampala or Entebbe International Airport for a departure flight. You will have lunch en route and can purchase any craft materials at several souvenir shops along the way to always remind you of your Bwindi gorilla trekking safari. Our safari guide ensures you get to your preferred end of 3 days gorilla trekking safari destination safely.",
        activities: [
          "Scenic drive back to Kampala",
          "Souvenir shopping opportunity",
        ],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Accommodation while on safari",
      "The costs also cover the services of English speaking driver/guide",
      "Meals (Breakfast, Lunch, and Dinner) while on safari",
      "1 soft drink per meal i.e. a soda or mineral water at/during lunch and dinner",
      "Park entrance fees",
      "One gorilla permit per person",
      "Community visit",
      "Ranger fees",
      "A visit to Igongo Cultural Village",
      "Fuel plus all activities while on the tour as detailed in the itinerary",
      "Return Airport transfers",
      "Transportation by 4 WD safari van, Fuel expenses",
    ],
    exclusions: [
      "Local and international flights",
      "Airport transfers (outside of safari dates)",
      "Accommodation in Kampala (day prior to safari departure and on return from the safari)",
      "Personal Travel insurance",
      "Visa Fees",
      "Drinks, cigarettes, tips, souvenirs and any other items of personal nature",
    ],
    additionalInfo: [
      "For visitors that cannot hold 9 hours drive from Bwindi back to Kampala or Entebbe, we have a flying option for only 2 hours you will be at Entebbe International Airport. We can fly you from either Kisoro airstrip or Kihihi Airstrip to Entebbe.",
      "Flight schedules: From Kisoro to Entebbe Departing 0910 arriving 1125, From Kihihi to Entebbe Departing 0945 arriving 1125 OR with an afternoon flight Departing 1405 arriving 1555.",
    ],
    tourType: "Wildlife & Nature",
    groupSize: 8,
    meals: "Full Board (as per itinerary)",
    featured: true,
    category: "gorilla",
  },
  {
    id: "chimpanzee-trekking-kibale",
    title: "3 Days Chimpanzee Trekking Safari in Kibale",
    slug: "chimpanzee-trekking-kibale",
    location: "Kibale National Park",
    duration: "3 Days / 2 Nights",
    price: 950,
    rating: 4.8,
    image: "/images/chimpanzee.jpg",
    shortDescription:
      "Explore Kibale National Park, home to our closest relative – the endangered Chimpanzee, on this exciting 3-day safari adventure.",
    description:
      "Kibale National Park is one of the most beautiful and stunning forests in Uganda. It is home to our closest relative – the endangered Chimpanzee. The forest also boasts of having one of the highest diversity and density of primates in Africa totaling 13 species that include the threatened Red Colobus monkey, L'hoest's monkey, Blue monkey, Grey Cheeked, Velvet and the Black / White Colobus monkeys.",
    highlights: [
      "Track chimpanzees in their natural habitat",
      "Visit Bigodi Wetland Sanctuary",
      "Explore the crater lakes region",
      "Observe diverse primate species",
      "Experience the beautiful landscapes of western Uganda",
    ],
    itinerary: [
      {
        title: "Kampala – Kibale National Park",
        location: "Kampala to Kibale",
        description:
          "After breakfast, you will drive to Fort portal. Arrive in time for lunch. After lunch visit Nyakasura where you will be able to see stalagmites and Stalactites that are locally referred to as 'Amabere Ga Nyinamwiru'. Later drive to Kibale National Park. Kibale National Park is one of the most beautiful and stunning forests in Uganda. It is home to our closest relative – the endangered Chimpanzee. The forest also boasts of having one of the highest diversity and density of primates in Africa totaling 13 species that include the threatened Red Colobus monkey, L'hoest's monkey Blue monkey, Grey Cheeked, Velvet and the Black / White Colobus monkeys.",
        activities: [
          "Scenic drive to Fort Portal",
          "Visit to Nyakasura to see stalagmites and stalactites",
          "Transfer to Kibale National Park",
        ],
        accommodation: "Lodge in Kibale National Park",
        meals: {
          breakfast: false,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Chimpanzee Trekking in Kibale",
        location: "Kibale National Park",
        description:
          "After early breakfast, report at Kanyanchu Tourist Centre where tourist activities begin and set out to track chimpanzees in Kibale forest. Chances of viewing the chimps are over 90% but not a guarantee. After lunch visit Bigodi Wetland Sanctuary from where you will take on a guided walk around the swamp. This walk will provide you with the opportunity to see a wide range of flora and fauna. View a variety of butterflies, birds and other insects. Have a tour of the crater region around Ndali lodge. You may also stop over at any tea plantation along the road if you wish.",
        activities: [
          "Chimpanzee trekking in Kibale forest",
          "Guided walk in Bigodi Wetland Sanctuary",
          "Tour of the crater region around Ndali lodge",
          "Optional visit to tea plantations",
        ],
        accommodation: "Lodge in Kibale National Park",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Kibale National Park – Kampala",
        location: "Kibale to Kampala",
        description:
          "Morning guided walk to visit the crater Lakes of Ndali for outstanding scenery, there after proceed to Kampala with Lunch en route.",
        activities: [
          "Morning guided walk to the crater Lakes of Ndali",
          "Return journey to Kampala",
        ],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Transportation in a 4x4 safari vehicle",
      "English-speaking driver/guide",
      "Accommodation as per itinerary",
      "Meals as specified in the itinerary",
      "Park entrance fees",
      "Chimpanzee trekking permit",
      "Guided walks",
      "Bottled water during the safari",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Activities not mentioned in the itinerary",
    ],
    tourType: "Wildlife & Primates",
    groupSize: 6,
    meals: "Full Board (as per itinerary)",
    featured: false,
    category: "primates",
  },
  {
    id: "queen-elizabeth-safari",
    title: "3 Days Queen Elizabeth National Park Safari",
    slug: "queen-elizabeth-safari",
    location: "Queen Elizabeth National Park",
    duration: "3 Days / 2 Nights",
    price: 850,
    rating: 4.7,
    image: "/images/queen-elizabeth-park.jpg",
    shortDescription:
      "Explore the diverse wildlife and stunning landscapes of Queen Elizabeth National Park on this 3-day safari adventure.",
    description:
      "Queen Elizabeth National Park is one of Uganda's most popular wildlife destinations. The park is known for its diverse ecosystems, including sprawling savanna, shady forests, sparkling lakes, and fertile wetlands, which make it the ideal habitat for classic big game, primates, and over 600 species of birds.",
    highlights: [
      "Game drives in search of wildlife",
      "Boat cruise on the Kazinga Channel",
      "Guided primate walk along Kyambura Gorge",
      "Bird watching opportunities with over 600 species",
      "Beautiful landscapes and diverse ecosystems",
    ],
    itinerary: [
      {
        title: "Kampala – Queen Elizabeth National Park",
        location: "Kampala to Queen Elizabeth NP",
        description:
          "Our driver-guide picks you from Kampala at your hotel or place of residence by 8:00am after your morning breakfast, drive to Queen Elizabeth National Park. Make your fist stopover at the Equator crossing for photography. Continue with the drive to Mbarara for lunch. Thereafter proceed to Queen as you enjoy beautiful scenery, herds of long horned Ankole cattle, tea plantations in Ishaka, Rift valley escarpment, open grassland and woodland savanna. Evening game drive for sightseeing is much more rewarding en route as you drive to your lodge.",
        activities: [
          "Scenic drive to Queen Elizabeth National Park",
          "Equator crossing photo opportunity",
          "Evening game drive",
        ],
        accommodation: "Lodge in Queen Elizabeth National Park",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Queen Elizabeth National Park Safari",
        location: "Queen Elizabeth National Park",
        description:
          "Begin your day with a cup of coffee. Early morning game drive along Kasenyi and Queens Mile makes visitors encounter elephants, buffalo, water bucks, warthogs, lions, Uganda Kobs lakes and a variety of birds. Return to the lodge for breakfast and lunch. After lunch, a two hour boat trip along the famous Kazinga channel is worthwhile an opportunity to see Hippo, Buffalo, Kobs, Elephants, warthogs etc. This trip also enables visitor chance to see spectacular birds.",
        activities: [
          "Morning game drive in Kasenyi and Queens Mile",
          "Boat trip along the Kazinga Channel",
        ],
        accommodation: "Lodge in Queen Elizabeth National Park",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Queen Elizabeth National Park – Entebbe",
        location: "Queen Elizabeth NP to Entebbe",
        description:
          "With previous day's memories, enjoy your breakfast ready for guided primate walk along Kyambura Gorge to look for habituated chimps through the gorge. After primate walk, drive to for Lunch at Kingfisher Lodge and later continue at your convenience back to Entebbe and a visit to Igongo Cultural village is a must. Return to Entebbe where you will be dropped off at a place of your choice.",
        activities: [
          "Guided primate walk along Kyambura Gorge",
          "Visit to Igongo Cultural village",
          "Return to Entebbe",
        ],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Transportation in a 4x4 safari vehicle",
      "English-speaking driver/guide",
      "Accommodation as per itinerary",
      "Meals as specified in the itinerary",
      "Park entrance fees",
      "Game drives",
      "Boat cruise on Kazinga Channel",
      "Guided primate walk in Kyambura Gorge",
      "Bottled water during the safari",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Activities not mentioned in the itinerary",
    ],
    tourType: "Wildlife Safari",
    groupSize: 6,
    meals: "Full Board (as per itinerary)",
    featured: false,
    category: "wildlife",
  },
  {
    id: "murchison-falls-safari",
    title: "2 Days Murchison Falls Safari",
    slug: "murchison-falls-safari",
    location: "Murchison Falls National Park",
    duration: "2 Days / 1 Night",
    price: 650,
    rating: 4.6,
    image: "/images/murchison-falls.webp",
    shortDescription:
      "Experience the power and beauty of Murchison Falls National Park on this compact 2-day safari adventure.",
    description:
      "This 2-day safari to Murchison Falls National Park offers a perfect introduction to Uganda's largest and oldest conservation area. The park is bisected by the Victoria Nile, which plunges 45 meters over the remnant rift valley wall, creating the dramatic Murchison Falls.",
    highlights: [
      "Boat safari upstream to the base of Murchison Falls",
      "Game drive to spot elephants, lions, giraffes and more",
      "Visit to Ziwa Rhino sanctuary",
      "Chance to see hippos, crocodiles, and elephants along the river",
      "Beautiful landscapes and diverse ecosystems",
    ],
    itinerary: [
      {
        title: "Kampala – Murchison Falls",
        location: "Kampala to Murchison Falls NP",
        description:
          "Our guide picks you up from your hotel or place of residence at 0600am and begin the panoramic drive north-west through the famous Luwero Triangle and Masindi. Continue to Murchison Falls cross the free for an early lunch ready to catch up with an afternoon boat safari upstream the calm Victoria Nile to the base of the falls stopping just tens of meters from the 'Devil's Cauldron'. En-route, marvel at the toothsome hippos, crocodiles and over this 17 km stretch you may see elephant, waterbuck and Uganda Kob crocodile. This is also a zone of many bird species like Goliath heron, Egyptian goose, pelican bee-eater, kingfisher, hornbill, cormorant and the rare shoebill stork. There you leave the boat and start your – quite heavy – hike to the Top of the Falls (approx. 1 hour). See where the world's longest river explodes violently through a narrow cleft in the Rift Valley escarpment to plunge into a frothing pool 43m below. Your driver/guide will be waiting for you to bring you back to the lodge.",
        activities: [
          "Scenic drive through Luwero Triangle and Masindi",
          "Afternoon boat safari on Victoria Nile",
          "Hike to the Top of the Falls",
        ],
        accommodation: "Heritage Safari Lodge (Budget Facility)",
        meals: {
          breakfast: false,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Murchison Falls – Entebbe – Out",
        location: "Murchison Falls NP to Entebbe",
        description:
          "Begin the day with a cup of African Coffee. Your guide will help you spot Elephant, Lion, Cape buffalo, Rothschild's giraffe, hartebeest, Waterbuck, Oribi, Bushbuck, Bohor reedbuck, hyena and if you are lucky, the leopard. Return to the hotel for breakfast thereafter cross the ferry to Masindi. Branch off for a visit to Ziwa Rhino sanctuary for a guided Rhino walk and picnic lunch. Thereafter return to Kampala.",
        activities: [
          "Morning game drive",
          "Visit to Ziwa Rhino sanctuary",
          "Guided Rhino walk",
          "Return to Kampala/Entebbe",
        ],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Transportation in a 4x4 safari vehicle",
      "English-speaking driver/guide",
      "Accommodation as per itinerary",
      "Meals as specified in the itinerary",
      "Park entrance fees",
      "Game drive",
      "Boat safari",
      "Guided Rhino walk at Ziwa Rhino sanctuary",
      "Bottled water during the safari",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Activities not mentioned in the itinerary",
    ],
    tourType: "Wildlife Safari",
    groupSize: 6,
    meals: "Full Board (as per itinerary)",
    featured: false,
    category: "wildlife",
  },
  {
    id: "uganda-15-days",
    title: "AAU TOURS UGANDA IN 15 DAYS",
    slug: "uganda-15-days",
    location: "Multiple Locations",
    duration: "15 Days / 14 Nights",
    price: 3500,
    rating: 4.9,
    image: "/images/aau-safari.webp",
    shortDescription:
      "Experience the best of Uganda with this comprehensive 15-day tour covering wildlife, primates, and cultural experiences across the country.",
    description:
      "This comprehensive 15-day tour takes you through the most beautiful and diverse areas of Uganda. From the magnificent Murchison Falls to the mountain gorillas of Bwindi, this tour offers a complete Uganda experience with wildlife safaris, primate tracking, and cultural encounters.",
    highlights: [
      "Visit to Murchison Falls National Park",
      "Chimpanzee tracking in Kibale Forest",
      "Game drives in Queen Elizabeth National Park",
      "Gorilla trekking in Bwindi Impenetrable Forest",
      "Boat cruise on Lake Bunyonyi",
      "Walking safari in Lake Mburo National Park",
      "Cultural experiences and village visits",
    ],
    itinerary: [
      {
        title: "Arrival",
        location: "Kampala",
        description:
          "You will be welcomed by a representative of Great Lakes Safaris who will transfer you to your hotel in Kampala. Depending on the time of arrival, our guide will take you on a city tour for an exciting introduction within the capital. Visit some interesting and historical sites, including the Namugongo Martyrs Shrine, the Uganda Museum, Kabakas palace and of course the African Craft Village. We also advise you to have money changed today.",
        activities: [
          "Airport pickup",
          "Kampala city tour (time permitting)",
          "Visit to historical sites",
        ],
        accommodation: "Cassia Lodge",
        meals: {
          breakfast: false,
          lunch: false,
          dinner: true,
        },
      },
      {
        title: "Kampala – Murchison Falls National Park",
        location: "Kampala to Murchison Falls NP",
        description:
          "On the first day we will depart for the most beautiful protected area in Uganda: Murchison Falls National Park. Enjoy a lunch stop in Masindi before we enter the park. We will visit the magnificent falls where you will enjoy and marvel at the mighty Nile. The famous waterfall is being forced into a seven meter crevice, to thunder 45 meters below in a series of cascades. This spectacular scenery can be viewed from different points up at the baler's summit.",
        activities: [
          "Drive to Murchison Falls National Park",
          "Visit to the top of Murchison Falls",
        ],
        accommodation: "Lodge in Murchison Falls NP",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Murchison Falls National Park",
        location: "Murchison Falls National Park",
        description:
          "After an early morning breakfast you will enjoy a half-day game drive on the northern bank of the Nile, escorted by a ranger. Game in this part includes the elephant, Rothschild giraffe, Jackson hartebeest, lions, oribis, waterbucks and a variety of savannah woodland birds. After lunch we will go on a Nile cruise for game viewing at close quarters. Watch how hippos take a bath; elephants come to drink and crocodiles lying lazy at the shores.",
        activities: [
          "Morning game drive on the northern bank of the Nile",
          "Afternoon Nile cruise for game viewing",
        ],
        accommodation: "Lodge in Murchison Falls NP",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Murchison Falls – Fort Portal",
        location: "Murchison Falls NP to Fort Portal",
        description:
          "We depart Murchison Falls and head towards Fort Portal. The drive is almost eight hours but will provide you with some stunning views as you pass small African villages and banana plantations. The lovely town of Fort Portal rests in the shadow of the fabled Mountains of the Moon and is famous for the many tea plantations.",
        activities: [
          "Scenic drive to Fort Portal",
          "Views of small African villages and banana plantations",
        ],
        accommodation: "Lodge in Fort Portal",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Semliki National Park",
        location: "Semliki National Park",
        description:
          "After breakfast we drive towards Semliki National Park. The scenic, winding road will lead us through green mountains and offers you a magnificent view at the River Semliki and Congo. After arriving in the protected area, a ranger will accompany us on a beautiful nature walk through the Ituri Rainforest. Enjoy the peacefulness of the forest, look out for the rich birdlife at the swamp and boil an egg in the hot springs that have become an interesting natural attraction. It will be completed with a picnic lunch provided by the guide, while you explore the real Africa. Later in the afternoon we return to Kibale Forest.",
        activities: [
          "Drive to Semliki National Park",
          "Nature walk through the Ituri Rainforest",
          "Visit to the hot springs",
          "Return to Kibale Forest",
        ],
        accommodation: "Lodge in Kibale Forest",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Kibale National Park & Bigodi Swamp",
        location: "Kibale National Park",
        description:
          "Today the forest opens it doors for a sensational chimp tracking. Kibale Forest is reputable of having the greatest variety and highest concentration of primates in East Africa. Enjoy a guided nature walk in the tropical rainforest in search of the wild chimpanzee, red-tailed monkey, black-and-white colobus monkey and many others. After a hearty lunch we transfer to the Bigodi Swamp for another, totally different nature walk. The Bigodi Swamp Walk is an initiative of the local community and takes approximately two hours. The swamp is known for its rich diversity of birds and primates.",
        activities: [
          "Chimpanzee tracking in Kibale Forest",
          "Bigodi Swamp Walk",
        ],
        accommodation: "Primate Lodge Kibale",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Kibale – Queen Elizabeth National Park",
        location: "Kibale to Queen Elizabeth NP",
        description:
          "We transfer to Queen Elizabeth National Park. It is a beautiful route via Kasese, with the Rwenzori Mountains on your right side and the green valley on the left. A game drive on our way to the accommodation in the middle of the national park gives us the chance to spot waterbucks, warthogs and other wildlife. After lunch we take on a boat cruise along the Kazinga Channel, a natural channel between Lake Edward and Lake George. Thanks to the elephants, buffaloes and hundreds of hippos, this cruise will definitely be one of the highlights of your safari.",
        activities: [
          "Transfer to Queen Elizabeth National Park",
          "Game drive en route",
          "Boat cruise along the Kazinga Channel",
        ],
        accommodation: "Lodge in Queen Elizabeth NP",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Queen Elizabeth National Park",
        location: "Queen Elizabeth National Park",
        description:
          "The day begins early as we head for the mating ground of the Uganda kobs. We search for lions, elephants, buffaloes and other wild animals in their natural habitat, before returning for lunch. In the afternoon you will have the opportunity to stretch your legs as we will visit the Maramagambo Forest for a walk through the tropical forest. It is known for the Blue Lake and the Bat and Hunters Cave. You will get the chance to have a close look at the bats and maybe even the rock python and forest cobras, that feed on the bats. The same walk will provide you with views of primates, different bird species and beautiful fauna.",
        activities: [
          "Early morning game drive",
          "Visit to Maramagambo Forest",
          "Walk to Blue Lake and Bat Cave",
        ],
        accommodation: "Lodge in Queen Elizabeth NP",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Queen Elizabeth National Park – Bwindi",
        location: "Queen Elizabeth NP to Bwindi",
        description:
          "After breakfast you may choose for the optional activity of exploring Kyambura Wildlife Reserve (not included). Driving through a grassland area, all of a sudden we come across an amazing gorge of one hundred meters deep, covered with tropical rainforest. You will hike into the gorge of the Kyambura River in search of the wild chimpanzees. It is a beautiful walk through the river valley, home to many birds and butterfly species. Later we will leave Queen Elizabeth National Park and head towards Bwindi. The scenic route runs through a verdant countryside while you pass traditional homesteads and farms.",
        activities: [
          "Optional: Exploring Kyambura Wildlife Reserve",
          "Transfer to Bwindi",
          "Scenic drive through countryside",
        ],
        accommodation: "Lodge in Bwindi",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Bwindi Gorilla Safari",
        location: "Bwindi Impenetrable Forest",
        description:
          "Another highlight of your safari: a meeting with the gentle giants of Bwindi! Especially hikers will love the tracking in the beautiful ecosystem of the park. It is difficult to foresee how many hours you will hike, it may take two to eight hours. Expect to walk a long distance in steep and muddy conditions, sometimes with rain overhead, before you encounter any gorillas. But it will definitely be worthwhile as you observe them closely while they eat, play and rest. A unique and unforgettable experience! For conservation purposes, time spent with the gorillas is limited to one hour. The ranger guide always briefs you on how to behave with these giant apes.",
        activities: [
          "Gorilla trekking in Bwindi Impenetrable Forest",
          "One hour with mountain gorillas",
        ],
        accommodation: "Lodge in Bwindi",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Bwindi – Lake Bunyonyi",
        location: "Bwindi to Lake Bunyonyi",
        description:
          "After breakfast you can choose to have a guided village walk for a closer meeting with the local community. Learn about their way of living as you walk through coffee, tea and banana plantations. Afterwards we depart to Lake Bunyonyi, the deepest lake in Uganda. This area is often called 'Little Switzerland of Uganda' and boosts one of the most beautiful parts of the country. Relax or go for a canoe trip while you watch the beautiful sunset.",
        activities: [
          "Optional: Guided village walk",
          "Transfer to Lake Bunyonyi",
          "Evening relaxation or canoe trip",
        ],
        accommodation: "Lodge at Lake Bunyonyi",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Lake Bunyonyi",
        location: "Lake Bunyonyi",
        description:
          "After the challenging and strenuous hike in Bwindi, some relaxing moments on the shores of this peaceful lake are most welcome. The options here are birding, nature walks, swimming or canoeing (not included).",
        activities: [
          "Relaxation at Lake Bunyonyi",
          "Optional activities: birding, nature walks, swimming, canoeing",
        ],
        accommodation: "Lodge at Lake Bunyonyi",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Lake Bunyonyi – Lake Mburo National Park",
        location: "Lake Bunyonyi to Lake Mburo NP",
        description:
          "After breakfast we drive to Lake Mburo National Park which takes us about four hours with lunch en route. As we enter the park and head towards the accommodation it is likely that you will see some wildlife, like impalas, topis, warthogs, zebras and buffaloes. After checking in you will go on a boat ride on the lake and enjoy the rich birdlife and the hippos that are cooling off.",
        activities: [
          "Drive to Lake Mburo National Park",
          "Game viewing en route",
          "Boat ride on Lake Mburo",
        ],
        accommodation: "Lodge in Lake Mburo NP",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Lake Mburo National Park – Kampala",
        location: "Lake Mburo NP to Kampala",
        description:
          "Early start of the day as we will go for a nature walk guided by a ranger. Lake Mburo is the only national park where you can experience a safari on foot. After breakfast we transfer to Kampala with a stop at the equator for photos or shopping. Arrival late in the afternoon in Kampala.",
        activities: [
          "Guided nature walk in Lake Mburo NP",
          "Transfer to Kampala",
          "Stop at the equator",
        ],
        accommodation: "Orchidea Guesthouse",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: false,
        },
      },
      {
        title: "Departure",
        location: "Kampala to Airport",
        description:
          "Enriched with an experience of a lifetime and unforgettable memories you will say goodbye to the Pearl of Africa. Depending on the time of departure you will be transferred to the airport for your flight back home. We are looking forward to seeing you again!",
        activities: ["Transfer to the airport"],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: false,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Airport transfers",
      "Transportation in a 4x4 safari vehicle",
      "English-speaking driver/guide",
      "Accommodation as per itinerary",
      "Meals as specified in the itinerary",
      "Park entrance fees",
      "Game drives",
      "Boat cruises",
      "Gorilla trekking permit",
      "Chimpanzee trekking permit",
      "Guided walks",
      "Bottled water during the safari",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Alcoholic beverages",
      "Optional activities not mentioned in the itinerary",
    ],
    tourType: "Comprehensive Safari",
    groupSize: 6,
    meals: "Full Board (as per itinerary)",
    featured: true,
    category: "comprehensive",
  },
  {
    id: "zanzibar-island-safari",
    title: "4 Days Zanzibar Island Safari Tour",
    slug: "zanzibar-island-safari",
    location: "Zanzibar, Tanzania",
    duration: "4 Days / 3 Nights",
    price: 750,
    rating: 4.8,
    image: "/images/zan.jpg",
    shortDescription:
      "Explore the beautiful island of Zanzibar with its rich culture, spice plantations, and pristine beaches on this 4-day tour.",
    description:
      "This 4-day Zanzibar Island Safari Tour takes you through the cultural and natural highlights of this beautiful island. From the historic Stone Town to the famous spice plantations and relaxing beaches, this tour offers a perfect blend of culture, history, and relaxation.",
    highlights: [
      "Explore historic Stone Town",
      "Visit spice plantations",
      "Relax on pristine beaches",
      "Experience local culture and cuisine",
      "Shop for locally made perfumes and oils",
    ],
    itinerary: [
      {
        title: "Meet and Greet",
        location: "Zanzibar Airport to Stone Town",
        description:
          "The Zanzibar Island Safari Tour starts with clients meeting our representative at Zanzibar Airport. After meet and greet we will take a transfer to Tembo hotel or Sultan sand resort. Its 10 minutes drive from Airport to Tembo Hotel which is based in the Capital Stone Town over-looking the Blue Warm Waters of the Indian Ocean. After check in and have a bit of leisure time we meet our guide for the city tour, we can start this just after lunch. We experience the city & the true culture of Zanzibar; visit the famous house of wonder, the sultan palace, the old museum and the old market where you can shop for various fruits and spices. You will also see the cathedral church and the old dispensary. Walk through the famous alleys of Zanzibar, intermingling with the local people and enjoy the aroma of coffee and spices around you. You can also visit the numerous shops that are available in stone town. This is the best day for shopping.",
        activities: [
          "Airport pickup",
          "Check-in at Tembo Hotel or Sultan Sand Resort",
          "Stone Town city tour",
          "Shopping in local markets",
        ],
        accommodation: "Tembo Hotel or Sultan Sands Resort",
        meals: {
          breakfast: false,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Transfer to Sultan Sands with Spice Tour en Route",
        location: "Stone Town to Sultan Sands",
        description:
          "After breakfast we drive through the countryside of Zanzibar to the plantations where you can sample various types of tropical fruits, root crops, flowering trees and spices i.e. ginger, cardamom, lemon grass and cinnamon. That are grown and which are the no 1 export products of Zanzibar. You therefore get to know why Zanzibar Island is popularly known as 'The spice Island'. You sample the fruits that are in abundance it the farms. This is also the cheapest place to buy locally made perfumes and oils. After taking a very special locally prepared spice lunch right on the plantation we continue to Sultan Sands for leisure.",
        activities: [
          "Spice plantation tour",
          "Sampling tropical fruits and spices",
          "Special locally prepared spice lunch",
          "Transfer to Sultan Sands Resort",
        ],
        accommodation: "Sultan Sands Resort",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Full day dedicated for Leisure",
        location: "Sultan Sands Resort",
        description:
          "Free at leisure. Enjoy the beautiful beaches and resort facilities.",
        activities: [
          "Beach relaxation",
          "Optional water sports or resort activities",
        ],
        accommodation: "Sultan Sands Resort",
        meals: {
          breakfast: true,
          lunch: true,
          dinner: true,
        },
      },
      {
        title: "Departure Day",
        location: "Sultan Sands to Zanzibar Airport",
        description: "Transfer from Sultan Sands Resort to Zanzibar Airport.",
        activities: ["Breakfast at the resort", "Transfer to Zanzibar Airport"],
        accommodation: "N/A (end of tour)",
        meals: {
          breakfast: true,
          lunch: false,
          dinner: false,
        },
      },
    ],
    inclusions: [
      "Airport transfers",
      "Accommodation and meals as per the itinerary",
      "Inland transfers or Transportation",
      "Stone town tour on arrival",
      "Spice tour on the way to Sultan sands with special locally prepared spice lunch",
      "Taste of the tropical fruits while on the plantations",
      "Bottled drinking water while on tours and transfers",
      "Travel permit",
      "Guide service",
      "Entry fees",
      "Government tax and VAT",
    ],
    exclusions: [
      "Local and international flights",
      "Personal Travel insurance",
      "Visa Fees",
      "Drinks, cigarettes, tips, souvenirs and any other items of personal nature",
    ],
    tourType: "Cultural & Beach",
    groupSize: 8,
    meals: "Full Board (as per itinerary)",
    featured: false,
    category: "cultural",
  },
];
