export interface SubProduct {
  id: string;
  name: string;
  image: string;
  rawImage?: string;
  shortDescription: string;
  specifications: {
    size?: string;
    weight?: string;
    packaging?: string;
    grade?: string;
    processing?: string;
    grades?: string[];
    recipe?: string;
    packagingOptions?: {
      jar?: string[];
      can?: string[];
      pouch?: string[];
      barrel?: string[];
      icon?: {
        jar?: string;
        can?: string;
        pouch?: string;
        barrel?: string;
      };
    };
  };
  pricing?: {
    minOrder?: string;
    bulkPricing?: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  uses: string[];
  healthBenefits: { icon: string; title: string; description: string }[];
  subProducts?: SubProduct[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "gherkins",
    name: "Premium Gherkins",
    image: "/gherkin.jpg",
    shortDescription:
      "Fresh, crisp gherkins preserved to international standards with perfect texture and taste",
    fullDescription:
      "We are a leading and reliable exporter of premium gherkins that are of high quality and come with exceptional nutritional value. Gherkins are a variety of cucumbers that are used to make pickles, retaining their crunchiness when pickled. They have a delightful sweet and sour flavor that makes an exciting crunchy addition to your dish or meal. The gherkin plants have their native roots in Southern Africa and require warm climates for optimal growth.",
    features: [
      "Multiple sizes available",
      "Crisp texture retention",
      "International quality standards",
      "Year-round availability",
      "Natural vinegar preservation",
      "Salt brine processing",
      "Acetic acid treatment",
    ],
    uses: [
      "Burger fillings and toppings",
      "Salad ingredients",
      "Sandwich accompaniments",
      "Continental cuisine",
      "Oriental dishes",
      "Italian cuisine",
      "Snacking and appetizers",
    ],
    healthBenefits: [
      {
        icon: "💧",
        title: "Excellent Hydration",
        description: "They serve as an exceptional source of hydration",
      },
      {
        icon: "🦠",
        title: "Rich in Probiotics",
        description:
          "Gherkins are loaded with probiotics as they are fermented",
      },
      {
        icon: "🩸",
        title: "Blood Sugar Control",
        description: "They help in regulating blood sugar levels",
      },
      {
        icon: "💊",
        title: "Vitamins & Antioxidants",
        description: "Excellent source of antioxidants and vitamins",
      },
      {
        icon: "🧂",
        title: "Salt Balance",
        description: "The salt content helps satisfy your salt cravings",
      },
    ],
    subProducts: [
      {
        id: "gherkin-whole",
        name: "Whole",
        image: "/gherkin-whole.jpg",
        rawImage: "/gherkin-whole-raw.jpg",
        shortDescription: "Premium whole gherkins preserved in natural brine",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          weight: "500g, 1kg, 5kg",
          packaging: "Glass jars, Plastic containers",
          grade: "A",
          processing: "Natural vinegar preservation",
          grades: ["1-4 cm", "2-5 cm", "3-6 cm", "6-9 cm", "9-12 cm"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "gherkin-plain-cut",
        name: "Plain Cut Sliced",
        image: "/gherkin-plaincut.jpg",
        rawImage: "/gherkin-plaincut-raw.jpg",
        shortDescription: "Uniformly sliced gherkins for consistent cooking",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          grades: ["3-5 mm", "5-7 mm", "8-10 mm", "20-25 mm"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "gherkin-crinkle-cut",
        name: "Crinkle Cut Sliced",
        image: "/gherkin-crinklecut.jpg",
        rawImage: "/gherkin-crinklecut-raw.jpg",
        shortDescription: "Crinkle-cut gherkins for enhanced texture and presentation",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          grades: ["3-5 mm", "5-7 mm", "8-10 mm", "20-25 mm"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "gherkin-stacker",
        name: "Stacker",
        image: "/gherkin-stacker.jpg",
        rawImage: "/gherkin-stacker-raw.jpg",
        shortDescription: "Long gherkin spears perfect for stacking and garnishing",
        specifications: {
          size: "Jar, Can",
          weight: "500g, 1kg, 5kg",
          packaging: "Glass jars, Plastic containers",
          grade: "A",
          processing: "Spear cut, natural preservation",
          grades: ["Angular & vertical cuts & slices of 3-5 mm vertical cuts"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["500 ml", "720 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "gherkin-spear",
        name: "Spear",
        image: "/gherkin-spear.jpg",
        rawImage: "/gherkin-spear-raw.jpg",
        shortDescription: "Classic gherkin spears for traditional pickling",
        specifications: {
          size: "Jar, Can",
          weight: "500g, 1kg, 5kg",
          packaging: "Glass jars, Plastic containers",
          grade: "A",
          processing: "Quarter cut, natural preservation",
          grades: ["Angular & vertical cuts & slices of 3-5 mm vertical cuts"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["500 ml", "720 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "gherkin-cube",
        name: "Cube/Dice",
        image: "/gherkin-cube.jpg",
        rawImage: "/gherkin-cube-raw.jpg",
        shortDescription: "Perfectly diced gherkins for easy incorporation in dishes",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          weight: "500g, 1kg, 5kg",
          packaging: "Glass jars, Plastic containers",
          grade: "A",
          processing: "Diced, natural preservation",
          grades: ["3x3X5 mm", "6X6X6 mm", "9X9X9 mm"],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
  {
    id: "2",
    slug: "spicy-jalapenos",
    name: "Spicy Jalapenos",
    image: "/jalapeno.jpg",
    shortDescription:
      "Authentic jalapenos with perfect heat level and flavor, ideal for various culinary applications",
    fullDescription:
      "Our premium jalapenos are carefully selected and processed to deliver the perfect balance of heat and flavor. These vibrant green peppers are known for their distinctive taste and moderate spiciness, making them ideal for a wide range of culinary applications. Grown in optimal conditions and processed using traditional methods, our jalapenos retain their natural crunch and authentic flavor.",
    features: [
      "Optimal heat level (2,500-8,000 Scoville units)",
      "Rich, authentic flavor",
      "Premium quality selection",
      "Consistent supply chain",
      "Natural preservation methods",
      "Crisp texture retention",
    ],
    uses: [
      "Mexican and Tex-Mex cuisine",
      "Pizza toppings",
      "Nacho accompaniments",
      "Spicy salsas and dips",
      "Hot sauce production",
      "Stuffed pepper preparations",
      "Gourmet burger toppings",
    ],
    healthBenefits: [
      {
        icon: "🔥",
        title: "Metabolism Boost",
        description: "Capsaicin helps boost metabolism and burn calories",
      },
      {
        icon: "💊",
        title: "Vitamin C Rich",
        description: "High in vitamin C for immune system support",
      },
      {
        icon: "❤️",
        title: "Heart Health",
        description: "May help reduce blood pressure and cholesterol",
      },
      {
        icon: "🧠",
        title: "Pain Relief",
        description: "Natural compounds may help with pain management",
      },
    ],
    subProducts: [
      {
        id: "jalapeno-whole",
        name: "Whole",
        image: "/jalapenos-whole.jpg",
        rawImage: "/jalapenos-whole-raw.jpg",
        shortDescription: "Whole jalapenos preserved with authentic heat and flavor",
        specifications: {
          grades: [],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "jalapeno-sliced",
        name: "Sliced",
        image: "/jalapenos-sliced.jpg",
        rawImage: "/jalapenos-sliced-raw.jpg",
        shortDescription: "Uniformly sliced jalapenos for consistent heat distribution",
        specifications: {
          grades: [],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
  {
    id: "3",
    slug: "tender-baby-corn",
    name: "Tender Baby Corn",
    image: "/baby-corn.jpg",
    shortDescription:
      "Sweet, tender baby corn harvested at optimal freshness for maximum nutritional value",
    fullDescription:
      "Our tender baby corn is harvested at the perfect stage of development to ensure maximum sweetness and tenderness. These miniature corn cobs are a delicacy in Asian cuisine and are prized for their delicate flavor and crunchy texture. Carefully processed to retain their natural sweetness and nutritional benefits, our baby corn is perfect for stir-fries, salads, and gourmet preparations.",
    features: [
      "Peak freshness harvest",
      "Natural sweetness",
      "Tender, crisp texture",
      "Rich nutritional profile",
      "Uniform size grading",
      "Extended shelf life",
    ],
    uses: [
      "Asian stir-fry dishes",
      "Salad ingredients",
      "Vegetable medleys",
      "Soup preparations",
      "Pickle manufacturing",
      "Gourmet garnishes",
      "Snacking and appetizers",
    ],
    healthBenefits: [
      {
        icon: "🌾",
        title: "Dietary Fiber",
        description: "High fiber content aids digestion and gut health",
      },
      {
        icon: "💊",
        title: "Essential Vitamins",
        description: "Rich in vitamins A, C, and folate",
      },
      {
        icon: "⚡",
        title: "Energy Source",
        description: "Natural carbohydrates provide sustained energy",
      },
      {
        icon: "🦴",
        title: "Bone Health",
        description: "Contains phosphorus and magnesium for bone strength",
      },
    ],
    subProducts: [
      {
        id: "baby-corn-whole",
        name: "Whole",
        image: "/babycorn-whole.jpg",
        rawImage: "/babycorn-whole-raw.jpg",
        shortDescription: "Whole baby corn cobs preserved at peak freshness",
        specifications: {
          grades: [],
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
      {
      id: "4",
      slug: "tomatoes",
      name: "Tomatoes",
      image: "/tomato.jpg",
      shortDescription:
        "Premium tomatoes in various varieties, from sweet cherry tomatoes to plump plum tomatoes",
      fullDescription:
        "Our premium tomato collection features carefully selected varieties including sweet cherry tomatoes and flavorful plum tomatoes in both red and green varieties. Each type is cultivated to deliver exceptional flavor and nutritional value. Grown using sustainable farming practices and preserved using traditional methods, our tomatoes maintain their firm texture and rich taste throughout processing.",
      features: [
        "Multiple varieties available",
        "Natural sweetness",
        "Vibrant colors",
        "Firm, juicy texture",
        "Rich in vitamins",
        "Perfect size consistency",
        "Extended freshness",
      ],
      uses: [
        "Fresh salads and garnishes",
        "Pasta and pizza toppings",
        "Preserved preparations",
        "Snacking and appetizers",
        "Sauce and paste production",
        "Gourmet cooking",
        "Mediterranean cuisine",
      ],
      healthBenefits: [
        {
          icon: "❤️",
          title: "Heart Health",
          description: "Lycopene supports cardiovascular health",
        },
        {
          icon: "👀",
          title: "Eye Health",
          description: "Rich in lutein and zeaxanthin for vision",
        },
        {
          icon: "🛡️",
          title: "Antioxidant Power",
          description: "High in antioxidants that fight free radicals",
        },
        {
          icon: "🧬",
          title: "Cellular Health",
          description: "Folate supports healthy cell division",
        },
      ],
      subProducts: [
        {
          id: "cherry-tomatoes",
          name: "Cherry Tomatoes",
          image: "/cherry-tomatoes.jpg",
          rawImage: "/cherry-tomatoes-raw.jpg",
          shortDescription: "Sweet and juicy cherry tomatoes with perfect bite-sized portions",
          specifications: {
            size: "Jar, Can",
            recipe: "Vinegar / Acetic Acid / Customise",
            packagingOptions: {
              jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
              can: ["850 ml", "3100 ml", "4250 ml"],
              icon: {
                jar: "/svg/jar.png",
                can: "/svg/can.png"
              }
            }
          },
          pricing: {
            minOrder: "1000 kg",
            bulkPricing: "Contact for bulk pricing"
          }
        },
        {
          id: "plum-green",
          name: "Plum Green",
          image: "/plum-green.jpg",
          rawImage: "/plum-green-raw.jpg",
          shortDescription: "Fresh green plum tomatoes preserved at peak ripeness",
          specifications: {
            size: "Jar, Can",
            recipe: "Vinegar / Acetic Acid / Customise",
            packagingOptions: {
              jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
              can: ["850 ml", "3100 ml", "4250 ml"],
              icon: {
                jar: "/svg/jar.png",
                can: "/svg/can.png"
              }
            }
          },
          pricing: {
            minOrder: "1000 kg",
            bulkPricing: "Contact for bulk pricing"
          }
        },
        {
          id: "plum-red",
          name: "Plum Red",
          image: "/plum-red.jpg",
          rawImage: "/plum-red-raw.jpg",
          shortDescription: "Ripe red plum tomatoes with rich flavor and meaty texture",
          specifications: {
            size: "Jar, Can",
            recipe: "Vinegar / Acetic Acid / Customise",
            packagingOptions: {
              jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
              can: ["850 ml", "3100 ml", "4250 ml"],
              icon: {
                jar: "/svg/jar.png",
                can: "/svg/can.png"
              }
            }
          },
          pricing: {
            minOrder: "1000 kg",
            bulkPricing: "Contact for bulk pricing"
          }
        }
      ],
  },
  {
    id: "5",
    slug: "red-paprika",
    name: "Red Paprika",
    image: "/red-paprika.jpg",
    shortDescription:
      "Vibrant red paprika with rich color and authentic flavor from Karnataka's finest farms",
    fullDescription:
      "Our premium red paprika is sourced from the finest farms in Karnataka, known for producing peppers with exceptional color and flavor. These vibrant red peppers are carefully selected and processed to retain their natural sweetness and mild heat. Perfect for adding color and flavor to various cuisines, our red paprika meets international quality standards.",
    features: [
      "Vibrant red color",
      "Authentic sweet flavor",
      "Premium grade selection",
      "Consistent quality",
      "Natural processing",
      "International standards",
    ],
    uses: [
      "Spice and seasoning blends",
      "Color enhancement in foods",
      "Traditional European cuisine",
      "Sauce and paste production",
      "Garnishing and decoration",
      "Preserved preparations",
      "Gourmet cooking",
    ],
    healthBenefits: [
      {
        icon: "👀",
        title: "Vision Support",
        description: "High in vitamin A for healthy eyesight",
      },
      {
        icon: "💊",
        title: "Vitamin C Rich",
        description: "Excellent source of vitamin C for immune support",
      },
      {
        icon: "🛡️",
        title: "Antioxidant Properties",
        description: "Contains powerful antioxidants for cellular health",
      },
      {
        icon: "🔥",
        title: "Metabolism Boost",
        description: "Natural compounds support healthy metabolism",
      },
    ],
  },
  {
    id: "6",
    slug: "banderilla",
    name: "Banderilla",
    image: "/banderilla.jpg",
    shortDescription:
      "Traditional Spanish tapas-style pickled appetizer with a perfect blend of savory ingredients",
    fullDescription:
      "Banderilla is a traditional Spanish appetizer (tapa) made by skewering a variety of pickled and savory ingredients onto a toothpick or small wooden stick. Named after the small spears used in bullfighting due to its similar appearance, our Banderilla combines the finest pickled gherkins, green olives, pearl onions, red and green peppers, and pickled chili peppers to create a perfect bite-sized snack. This colorful, flavorful combination delivers a salty, tangy, slightly spicy, and savory taste profile that's meant to be enjoyed in one delicious bite.",
    features: [
      "Traditional Spanish recipe",
      "Perfect bite-sized portions",
      "Colorful ingredient variety",
      "Authentic tapas experience",
      "Premium pickled ingredients",
      "Convenient skewered format",
      "International quality standards",
    ],
    uses: [
      "Spanish tapas and appetizers",
      "Bar and restaurant menus",
      "Social gatherings and parties",
      "Mediterranean cuisine",
      "Gourmet snack platters",
      "Wine and beer pairings",
      "Traditional Spanish dining",
    ],
    healthBenefits: [
      {
        icon: "🫒",
        title: "Heart Health",
        description: "Olives provide healthy monounsaturated fats",
      },
      {
        icon: "🦠",
        title: "Probiotic Benefits",
        description: "Pickled ingredients offer natural probiotics",
      },
      {
        icon: "💊",
        title: "Antioxidant Rich",
        description: "Peppers and vegetables provide essential antioxidants",
      },
      {
        icon: "🧂",
        title: "Mineral Content",
        description: "Natural minerals from pickled vegetables",
      },
    ],
    subProducts: [
      {
        id: "banderilla-whole-gherkin",
        name: "Whole Gherkin Banderilla",
        image: "/banderilla-whole-gherkin.png",
        rawImage: "/banderilla-whole-gherkin-raw.jpg",
        shortDescription: "Traditional banderilla with whole gherkins for authentic Spanish tapas experience",
        specifications: {
          size: "Jar, Can",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "banderilla-sliced-gherkin",
        name: "Sliced Gherkin Banderilla",
        image: "/banderilla-sliced-gherkin.png",
        rawImage: "/banderilla-sliced-gherkin-raw.png",
        shortDescription: "Banderilla with sliced gherkins for enhanced texture and flavor distribution",
        specifications: {
          size: "Jar, Can",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
  {
    id: "7",
    slug: "assorty",
    name: "Premium Assorty",
    image: "/assorty.jpg",
    shortDescription:
      "Delightful combinations of our premium products, perfectly paired for enhanced culinary experiences",
    fullDescription:
      "Our Premium Assorty collection features carefully curated combinations of our finest products. Each assortment is thoughtfully paired to create perfect flavor harmonies and provide versatile culinary applications. These combinations offer convenience and variety, making them ideal for both professional kitchens and home cooking.",
    features: [
      "Carefully curated combinations",
      "Premium quality ingredients",
      "Perfect flavor pairings",
      "Convenient packaging",
      "Versatile applications",
      "Extended shelf life",
      "International quality standards",
    ],
    uses: [
      "Gourmet appetizers",
      "Restaurant service",
      "Catering and events",
      "Retail food service",
      "Home entertaining",
      "Professional kitchens",
      "Specialty food stores",
    ],
    healthBenefits: [
      {
        icon: "🥗",
        title: "Balanced Nutrition",
        description: "Combined nutrients from multiple premium ingredients",
      },
      {
        icon: "🌿",
        title: "Natural Preservation",
        description: "Preserved using traditional methods for best quality",
      },
      {
        icon: "💪",
        title: "Diverse Benefits",
        description: "Multiple health benefits from varied ingredients",
      },
      {
        icon: "🍅",
        title: "Antioxidant Rich",
        description: "Rich in various antioxidants from combined sources",
      },
    ],
    subProducts: [
      {
        id: "assorty-cherry-gherkin",
        name: "Cherry Tomato With Whole Gherkin",
        image: "/assorty-cherrygherkin.jpg",
        rawImage: "/assorty-cherrygherkin-raw.jpg",
        shortDescription: "Perfect combination of sweet cherry tomatoes and crisp whole gherkins",
        specifications: {
          size: "Jar, Can",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "assorty-plum-gherkin",
        name: "Plum Tomato With Whole Gherkin",
        image: "/assorty-plumgherkin.jpg",
        rawImage: "/assorty-plumgherkin-raw.jpg",
        shortDescription: "Classic combination of plum tomatoes and whole gherkins",
        specifications: {
          size: "Jar, Can",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
  {
    id: "8",
    slug: "onions",
    name: "Onions",
    image: "/onion.jpg",
    shortDescription:
      "Premium Indian white onions with exceptional flavor and texture, perfect for various culinary applications",
    fullDescription:
      "Our premium Indian white onions are carefully selected and processed to deliver exceptional flavor and texture. These versatile onions are known for their mild, sweet taste and firm texture, making them ideal for a wide range of culinary applications. Grown using sustainable farming practices and preserved using traditional methods, our white onions maintain their natural flavor and nutritional benefits throughout processing.",
    features: [
      "Mild, sweet flavor profile",
      "Firm, crisp texture",
      "Premium quality selection",
      "Natural preservation methods",
      "Extended shelf life",
      "International quality standards",
      "Versatile culinary applications",
    ],
    uses: [
      "Fresh salads and garnishes",
      "Cooking and sautéing",
      "Pickle manufacturing",
      "Restaurant and food service",
      "Retail food products",
      "International cuisine",
      "Preserved preparations",
    ],
    healthBenefits: [
      {
        icon: "🫀",
        title: "Heart Health",
        description: "Contains compounds that support cardiovascular health",
      },
      {
        icon: "🦠",
        title: "Immune Support",
        description: "Rich in antioxidants that boost immune system",
      },
      {
        icon: "🩸",
        title: "Blood Sugar Control",
        description: "May help regulate blood sugar levels",
      },
      {
        icon: "💊",
        title: "Anti-inflammatory",
        description: "Natural anti-inflammatory properties",
      },
    ],
    subProducts: [
      {
        id: "indian-white-onion",
        name: "Indian White Onion",
        image: "/indian-white-onion.jpg",
        rawImage: "/indian-white-onion-raw.jpg",
        shortDescription: "Premium Indian white onions preserved with natural flavor",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      },
      {
        id: "imported-silver-skin-onion",
        name: "Imported Silver Skin Onion",
        image: "/indian-silver-onion.jpg",
        rawImage: "/indian-silver-onion-raw.jpg",
        shortDescription: "Premium imported silver skin onions with delicate flavor",
        specifications: {
          size: "Jar, Can, Pouch, Barrel",
          recipe: "Vinegar / Acetic Acid / Customise",
          packagingOptions: {
            jar: ["370 ml", "375 ml", "500 ml", "720 ml", "1000 ml", "1415 ml", "2000 ml"],
            can: ["850 ml", "3100 ml", "4250 ml"],
            pouch: ["3100 ml", "5000 ml"],
            barrel: ["240 ltrs", "260 ltrs"],
            icon: {
              jar: "/svg/jar.png",
              can: "/svg/can.png",
              pouch: "/svg/pouch.png",
              barrel: "/svg/barell.png"
            }
          }
        },
        pricing: {
          minOrder: "1000 kg",
          bulkPricing: "Contact for bulk pricing"
        }
      }
    ]
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getAllProductSlugs = (): string[] => {
  return products.map((product) => product.slug);
};
