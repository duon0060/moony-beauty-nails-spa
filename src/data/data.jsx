const servicePrices = [
  {
    id: "mani",
    category: "Nails",
    name: "Manicure",
    price: "$35+",
    desc: "Precision nail shaping, detail cuticle care, light hand massage, and high-shine polish finish.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d1d4d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Finger outline */}
        <path d="M10 22V8a3 3 0 0 1 6 0v14" />
        {/* Thumbnail */}
        <path d="M11.5 8.5a1.5 1.5 0 0 1 3 0V12h-3V8.5z" />
        {/* Artistic accent swirl */}
        <path d="M6 16a3 3 0 0 1 3-3c1.5 0 2.5 1 2.5 2.5S10.5 18 9 18c-2 0-3-1.5-3-3.5A5.5 5.5 0 0 1 14.5 9" />
      </svg>
    ),
  },
  {
    id: "pedi",
    name: "Pedicure",
    category: "Nails",
    price: "$50+",
    desc: "Relaxing hot herbal foot soak, exfoliating scrub therapy, nail grooming, and deep tissue massage.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d1d4d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Toe silhouette line */}
        <path d="M12 22V7a2.5 2.5 0 0 1 5 0v15" />
        {/* Toenail */}
        <path d="M13.5 7.5a1 1 0 0 1 2 0V10h-2V7.5z" />
        {/* Foot contour lines & minor toe indicator */}
        <path d="M7 18c0-2.5 1.5-3.5 3-3.5M6 14.5A2.5 2.5 0 0 1 8.5 12c1 0 2 .5 2 2" />
      </svg>
    ),
  },
  {
    id: "art",
    name: "Nail Enhancements",
    price: "$65+",
    desc: "Full custom acrylics sets, UV gel extension systems, refills, and bespoke modern freehand nail artistry.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d1d4d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Polish bottle body */}
        <rect x="8" y="10" width="8" height="11" rx="2" />
        {/* Bottle neck & cap */}
        <path d="M10 10V4h4v6" />
        {/* Fluid level accent line */}
        <path d="M8 15h8" strokeDasharray="1 1" />
        {/* Droplet/accent line right side */}
        <path d="M19 13v4M19 20h.01" />
      </svg>
    ),
  },
  {
    id: "wax",
    name: "Waxing",
    category: "Nails",
    price: "$20+",
    desc: "Quick, ultra-clean hair removal treatments specifically structured for brows, lip care, and legs.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d1d4d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Wax/oil drops structure */}
        <circle cx="9" cy="15" r="3" />
        <circle cx="15" cy="15" r="3" />
        {/* Lotus/vessel handle line above drops */}
        <path d="M6 9c3-2 5-2 8 0s5 2 8 0" />
        <path d="M12 4v3" />
      </svg>
    ),
  },
  {
    id: "pkg",
    name: "Artificial Nails",
    category: "Nails",

    price: "$110+",
    desc: "Combined custom relaxation therapies designed for deep mental unplugging and skin rehydration.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3d1d4d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Center bud */}
        <path d="M12 21a5 5 0 0 0 5-5c0-4-5-9-5-9s-5 5-5 9a5 5 0 0 0 5 5z" />
        {/* Left petal */}
        <path d="M12 12c-2-1-4.5-1-5.5.5S6.2 17 8.5 17c1.5 0 2.5-.5 3.5-1.5" />
        {/* Right petal */}
        <path d="M12 12c2-1 4.5-1 5.5.5s.3 4.5-2 4.5c-1.5 0-2.5-.5-3.5-1.5" />
      </svg>
    ),
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80",
    alt: "Manicure Display 1",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=500&q=80",
    alt: "Pedicure Display 1",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    alt: "Salon Spa Environment",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80",
    alt: "Nail Extension Art",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=500&q=80",
    alt: "Cosmetic Waxing Products",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    alt: "Spa Relaxation Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    alt: "Spa Relaxation Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80",
    alt: "Spa Relaxation Treatment",
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
];

export { servicePrices, galleryImages, socialMedia, reviews };
