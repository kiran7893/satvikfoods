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
}

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-gherkins",
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
  },
  {
    id: "4",
    slug: "cherry-tomatoes",
    name: "Cherry Tomatoes",
    image: "/cherry-tomato.jpg",
    shortDescription:
      "Juicy cherry tomatoes bursting with natural sweetness and vibrant color",
    fullDescription:
      "Our premium cherry tomatoes are carefully cultivated to deliver exceptional flavor and nutritional value. These bite-sized tomatoes are packed with natural sweetness and vibrant color, making them perfect for both fresh consumption and preservation. Grown using sustainable farming practices, our cherry tomatoes maintain their firm texture and rich taste throughout processing.",
    features: [
      "Natural sweetness",
      "Vibrant red color",
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
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getAllProductSlugs = (): string[] => {
  return products.map((product) => product.slug);
};
