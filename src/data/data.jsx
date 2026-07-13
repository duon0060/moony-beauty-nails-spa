import Manicure from "../images/manicure.png";
import Pedicure from "../images/pedicure.png";

import BioGel from "../images/biogel.png";
import Acrylic from "../images/acrylic.png";
import Dip from "../images/dippowder.png";
import Solar from "../images/solar.png";
import Art from "../images/artnail.png";
import Waxing from "../images/waxing.png";
import Packages from "../images/packages.png";

import Kid from "../images/kid.png";

const serviceCategories = [
  {
    id: "manicure",
    name: "Manicure",
    icon: <img src={Manicure} alt="Manicure" style={{ width: 30 }} />,
  },

  {
    id: "pedicure",
    name: "Pedicure",
    icon: <img src={Pedicure} alt="Pedicure" style={{ width: 30 }} />,
  },
  {
    id: "bionail",
    name: "Bio Nails",
    icon: <img src={BioGel} alt="bion ail" style={{ width: 30 }} />,
  },
  {
    id: "acrylic",
    name: "Acrylic Nails",
    icon: <img src={Acrylic} alt="Acrylic" style={{ width: 100 }} />,
  },
  {
    id: "dippowder",
    name: "Dip Powder",
    icon: <img src={Dip} alt="Dip Powder" style={{ width: 90 }} />,
  },
  {
    id: "nailarts",
    name: "Nail Arts",
    icon: <img src={Art} alt="Art Nail" style={{ width: 40 }} />,
  },
  {
    id: "waxing",
    name: "Waxing",
    icon: <img src={Waxing} alt="Waxing" style={{ width: 60 }} />,
  },
  {
    id: "packages",
    name: "Packages",
    icon: <img src={Packages} alt="Packages" style={{ width: 50 }} />,
  },
  {
    id: "solargel",
    name: "Solar Gel",
    icon: <img src={Solar} alt="Solar gel" style={{ width: 70 }} />,
  },
  {
    id: "kidservices",
    name: "Kid Services",
    icon: <img src={Kid} alt="Kid services" style={{ width: 80 }} />,
  },
];
const servicePrices = [
  // MANICURE
  {
    id: 1,
    category: "manicure",
    name: "Classic Manicure",
    price: "$22",
    desc: "",
  },
  {
    id: 2,
    category: "manicure",
    name: "Shellac Manicure",
    price: "$38",
    desc: "",
  },
  {
    id: 5,
    category: "manicure",
    name: "Regular Manicure with Shellac Removal",
    price: "$27",
    desc: "",
  },
  {
    id: 6,
    category: "manicure",
    name: "Manicure Shellac with French Tips",
    price: "$43",
    desc: "",
  },
  {
    id: 7,
    category: "manicure",
    name: "Shellac Polish Change with Removal",
    price: "$30",
    desc: "",
  },

  // PEDICURE
  {
    id: 8,
    category: "pedicure",
    name: "Classic Pedicure",
    price: "$38",
    desc: "",
  },
  {
    id: 9,
    category: "pedicure",
    name: "Pedicure with Shellac Colour",
    price: "$50",
    desc: "",
  },
  {
    id: 10,
    category: "pedicure",
    name: "Regular Pedicure with Shellac Removal",
    price: "$43",
    desc: "",
  },
  {
    id: 13,
    category: "pedicure",
    name: "Regular Pedicure Add Deluxe",
    price: "$58",
    desc: "",
  },
  {
    id: 14,
    category: "pedicure",
    name: "Pedicure with Shellac Colour Add Deluxe",
    price: "$70",
    desc: "",
  },

  // BIOGEL NAILS
  {
    id: 15,
    category: "bionail",
    name: "BioGel Overlay",
    price: "$70",
    desc: "",
  },
  {
    id: 16,
    category: "bionail",
    name: "BioGel Extensions",
    price: "$80",
    desc: "",
  },
  {
    id: 17,
    category: "bionail",
    name: "BioGel Fill",
    price: "$65",
    desc: "",
  },
  {
    id: 18,
    category: "bionail",
    name: "Polish Change on Artificial Nails",
    price: "$35",
    desc: "",
  },

  // ACRYLIC NAILS
  {
    id: 19,
    category: "acrylic",
    name: "Acrylic Full Set",
    price: "$62",
    desc: "",
  },
  {
    id: 20,
    category: "acrylic",
    name: "Acrylic Refill",
    price: "$50",
    desc: "",
  },
  {
    id: 21,
    category: "acrylic",
    name: "Acrylic Overlay",
    price: "$55",
    desc: "",
  },
  {
    id: 22,
    category: "acrylic",
    name: "Ombre Acrylic",
    price: "$70",
    desc: "",
  },
  {
    id: 23,
    category: "acrylic",
    name: "Pink & White",
    price: "$65",
    desc: "",
  },

  // DIP POWDER
  {
    id: 24,
    category: "dippowder",
    name: "Color Dip",
    price: "$55",
    desc: "",
  },
  {
    id: 25,
    category: "dippowder",
    name: "Dipping on Natural Nails",
    price: "$55",
    desc: "",
  },
  {
    id: 26,
    category: "dippowder",
    name: "Dipping with Extension",
    price: "$65",
    desc: "",
  },
  {
    id: 27,
    category: "dippowder",
    name: "Dipping Nails Removal",
    price: "$15",
    desc: "",
  },
  {
    id: 28,
    category: "dippowder",
    name: "Dipping Ombre on Natural Nails",
    price: "$65",
    desc: "",
  },
  {
    id: 29,
    category: "dippowder",
    name: "Dipping Ombre Add Extension",
    price: "$70",
    desc: "",
  },

  // KIDS SERVICES
  {
    id: 30,
    category: "kidservices",
    name: "Kids Regular Manicure (10Y and Under)",
    price: "$15",
    desc: "A polished kids manicure with nail shaping, cuticle care, and a clean finish for well-groomed hands.",
  },
  {
    id: 31,
    category: "kidservices",
    name: "Kids Shellac Manicure (10Y and Under)",
    price: "$25",
    desc: "",
  },
  {
    id: 61,
    category: "kidservices",
    name: "Kids Regular Pedicure (10Y and Under)",
    price: "$25",
    desc: "A polished kids pedicure with nail shaping, cuticle care, and a clean finish for well-groomed hands.",
  },

  {
    id: 62,
    category: "kidservices",
    name: "Kids with Shellac Colour (10Y and Under)",
    price: "$40",
    desc: "",
  },

  // NAIL ART
  {
    id: 32,
    category: "nailarts",
    name: "French Design",
    price: "$15",
    desc: "Creative French design add-on to personalize your nails.",
  },
  {
    id: 33,
    category: "nailarts",
    name: "Chrome Nails",
    price: "$15",
    desc: "Creative chrome nails add-on to personalize your nails.",
  },
  {
    id: 34,
    category: "nailarts",
    name: "Cat Eye",
    price: "$15",
    desc: "Creative cat eye add-on to personalize your nails.",
  },

  // WAXING
  {
    id: 35,
    category: "waxing",
    name: "Eyebrows",
    price: "$12",
    desc: "",
  },
  {
    id: 36,
    category: "waxing",
    name: "Eyebrows Tinting",
    price: "$15",
    desc: "",
  },
  {
    id: 37,
    category: "waxing",
    name: "Sideburn",
    price: "$12",
    desc: "",
  },
  {
    id: 38,
    category: "waxing",
    name: "Forehead",
    price: "$10",
    desc: "",
  },
  {
    id: 39,
    category: "waxing",
    name: "Neck",
    price: "$15",
    desc: "",
  },
  {
    id: 40,
    category: "waxing",
    name: "Full Face (Include Eyebrows)",
    price: "$45",
    desc: "",
  },
  {
    id: 41,
    category: "waxing",
    name: "Shoulder",
    price: "$20",
    desc: "",
  },
  {
    id: 42,
    category: "waxing",
    name: "Back",
    price: "$35",
    desc: "",
  },
  {
    id: 43,
    category: "waxing",
    name: "Chest",
    price: "$25",
    desc: "",
  },
  {
    id: 44,
    category: "waxing",
    name: "Belly",
    price: "$25",
    desc: "",
  },
  {
    id: 45,
    category: "waxing",
    name: "Under Arms",
    price: "$15",
    desc: "",
  },
  {
    id: 46,
    category: "waxing",
    name: "Full Arms",
    price: "$35",
    desc: "",
  },
  {
    id: 47,
    category: "waxing",
    name: "Half Arms",
    price: "$25",
    desc: "",
  },
  {
    id: 48,
    category: "waxing",
    name: "Full Legs",
    price: "$65",
    desc: "",
  },
  {
    id: 49,
    category: "waxing",
    name: "Half Legs",
    price: "$40",
    desc: "",
  },
  {
    id: 50,
    category: "waxing",
    name: "Bikini",
    price: "$25",
    desc: "",
  },
  {
    id: 51,
    category: "waxing",
    name: "Brazilian",
    price: "$50",
    desc: "",
  },

  // PACKAGES
  {
    id: 52,
    category: "packages",
    name: "Combo Pedicure & Manicure (Regular Polish)",
    price: "$55",
    desc: "",
  },
  {
    id: 53,
    category: "packages",
    name: "Combo Pedicure & Manicure (Shellac Colour)",
    price: "$80",
    desc: "",
  },

  // SOLAR GEL
  {
    id: 54,
    category: "solargel",
    name: "Solar Gel Full Set",
    price: "$62",
    desc: "A durable solar gel full set service with careful prep, shaping, and a glossy long-lasting finish.",
  },
  {
    id: 55,
    category: "solargel",
    name: "Solar Gel Fill",
    price: "$50",
    desc: "A durable solar gel fill service with careful prep, shaping, and a glossy long-lasting finish.",
  },
  {
    id: 56,
    category: "solargel",
    name: "Solar Gel Overlay",
    price: "$55",
    desc: "A durable solar gel overlay service with careful prep, shaping, and a glossy long-lasting finish.",
  },
  {
    id: 57,
    category: "solargel",
    name: "Solar Gel Ombre",
    price: "$70",
    desc: "A durable solar gel ombre service with careful prep, shaping, and a glossy long-lasting finish.",
  },
  {
    id: 58,
    category: "solargel",
    name: "Solar Gel Color Change",
    price: "$35",
    desc: "A durable solar gel color change service with careful prep, shaping, and a glossy long-lasting finish.",
  },
  {
    id: 59,
    category: "solargel",
    name: "Solar Gel Repair (Per Nail)",
    price: "$7",
    desc: "Targeted solar gel repair for a broken or damaged nail.",
  },
  {
    id: 60,
    category: "solargel",
    name: "Solar Gel Removal",
    price: "Ask us",
    desc: "Careful solar gel removal to protect the natural nail and leave nails clean and ready for the next service.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80",
    title: "Manicure Display",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80",
    title: "Pedicure Display",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    title: "Salon Spa Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80",
    title: "Nail Extension Art",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80",
    title: "Cosmetic Waxing Products",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    title: "Spa Relaxation Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    title: "Spa Relaxation Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    title: "Spa Relaxation Treatment",
  },
];

const socialMedia = [
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100083436212767",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/explore/locations/101095759299980/moony-beauty-nails-spa/?hl=en",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@moonybeautynailsandspa",
  },
];

const reviews = [
  {
    customer: " — Rihab znazen",
    desc: "This is my second visit to the nail salon, and I honestly couldn’t be happier. My first gel set lasted a month and a half with no broken nails at all, which already says a lot about the quality. This salon is truly worth every penny — they use high-quality materials that actually last.\n\nThe staff are incredibly friendly and welcoming, and the hospitality is 10/10. The business owner is also super cool, kind, and clearly passionate about her work. I absolutely loved what she did on my last set.\n\n I definitely recommend this salon to anyone looking for long-lasting nails and amazing service. 💅✨",
  },
  {
    customer: " — Kendra Hawkins",
    desc: "Was previously going to a different salon and continued to be disappointed. Needed to find a new salon, and I have! I love Moonys Beauty. She did an absolutely wonderful job and her engagement/ service was so welcoming. I am excited for all the future nail sets and designs. Would recommend to anyone ❤️🎁\nServices\nNail extensions, Nail designs, Manicure, French manicures",
  },
  {
    customer: " — Lioudmila Theriault",
    desc: "I had an amazing experience at Moony Beauty Nails & Spa for the last couple years!!The service here is truly excellent. I got both a manicure and a pedicure, and the results are absolutely perfect. Lilian and the entire staff are incredibly professional, welcoming, and friendly. They really take their time to make sure everything is flawless. I highly recommend this salon and will definitely be coming back!",
  },

  {
    customer: "- Natoulie Hamze",
    desc: "I had such a great experience at Moony Beauty Nails and Spa! Lilliane did my nails and she was absolutely amazing. She was so friendly, professional, and really paid attention to every little detail. My nails turned out beautiful — exactly what I wanted! The salon was clean, relaxing, and welcoming from the moment I walked in. You can tell Lilliane truly cares about her work and her clients. I’ve gotten so many compliments on my nails already. Highly recommend booking with her if you want gorgeous nails and great service!\nServices: Nail extensions",
  },

  {
    customer: "- Gaby",
    desc: "If I could give more stars to this team, I would! I always walk out of here feeling pampered and the nails are of very high quality. The team is kind, professional and they keep the place very clean. They have many options to choose from and their price list is clear and exactly as listed. I highly recommend this nail salon as your next choice ….and no this is not sponsored lol. I just really appreciate the service and talent the team offers to our little Orleans!",
  },

  {
    customer: "- Kris Carisse",
    desc: "I have been going to Mooneys for approximately three years now. Chloe is my favorite however the owner Lilkian is also very good and quick. I laugh and joje with them which makes my appointments very enjoyable. They are clean, professional and listen to you. Im sure the other staff are great too, however I prefer to stock with Chloe or Lillian. I always look forward to my monthly appointments.",
  },

  {
    customer: "- Shrouk Abdelgafar",
    desc: "Super talented artists! Excellent prices and great customer service. Took my family for a fun girls day and we all got manicures and pedicures. We all left super pampered and really happy with our nails. Definitely recommended!\n\nServices: Pedicure, Manicure, Foot massages, Sculpted nails, Nail extensions",
  },
];

export {
  serviceCategories,
  servicePrices,
  galleryImages,
  socialMedia,
  reviews,
};
