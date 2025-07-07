export interface ProductGrade {
  grade: string;
  weight: string;
  averageFruits: string;
  description?: string;
}

export interface ProductSize {
  size: string;
  length: string;
  averageFruits: string;
}

export interface HealthBenefit {
  icon: string;
  title: string;
  description: string;
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
  healthBenefits: HealthBenefit[];
  grades?: ProductGrade[];
  sizes?: ProductSize[];
  markets: string[];
  growingInfo?: {
    temperature: string;
    regions: string[];
    harvesting: string;
  };
  nutritionalInfo?: {
    calories: string;
    protein: string;
    fiber: string;
    vitamins: string[];
  };
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
    grades: [
      { grade: "300+", weight: "Below 3.3g", averageFruits: ">330" },
      { grade: "300/450", weight: "2.2 to 3.3g", averageFruits: "375-425" },
      { grade: "150/300", weight: "3.4 to 6.6g", averageFruits: "195-240" },
      { grade: "120/150", weight: "6.7 to 8.3g", averageFruits: "130-145" },
      { grade: "80/150", weight: "6.7 to 12.5g", averageFruits: "90-130" },
      { grade: "60/160", weight: "Below 20.6mm", averageFruits: "100-120" },
      { grade: "30/60", weight: "16.6 to 33.3g", averageFruits: "40-50" },
      { grade: "20/30", weight: "33.4 to 50g", averageFruits: "23-27" },
      { grade: "10/20", weight: "50.1 to 100g", averageFruits: "13-17" },
      { grade: "5/10", weight: "100.1 to 200g", averageFruits: "8-12" },
    ],
    sizes: [
      { size: "3-6", length: "3cm to 6cm", averageFruits: "80 to 130" },
      { size: "6-9", length: "6cm to 9cm", averageFruits: "35 to 50" },
      { size: "9-12", length: "9cm to 12cm", averageFruits: "13 to 20" },
      { size: "8-10", length: "8cm to 10cm", averageFruits: "23 to 27" },
      { size: "5-8", length: "5cm to 8cm", averageFruits: "60-80" },
    ],
    markets: ["Europe", "America", "Australia", "Asia", "Middle East"],
    growingInfo: {
      temperature: "15 to 35 degrees Celsius",
      regions: ["Tamil Nadu", "Andhra Pradesh", "Karnataka"],
      harvesting: "Up to three crops annually",
    },
    nutritionalInfo: {
      calories: "16 per 100g",
      protein: "0.8g",
      fiber: "1.2g",
      vitamins: ["Vitamin K", "Vitamin C", "Potassium", "Antioxidants"],
    },
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
    grades: [
      { grade: "Extra Large", weight: "15-20g", averageFruits: "50-60" },
      { grade: "Large", weight: "10-15g", averageFruits: "65-85" },
      { grade: "Medium", weight: "7-10g", averageFruits: "90-120" },
      { grade: "Small", weight: "5-7g", averageFruits: "125-165" },
    ],
    markets: ["North America", "Europe", "Middle East", "Asia", "Australia"],
    growingInfo: {
      temperature: "20 to 30 degrees Celsius",
      regions: ["Karnataka", "Andhra Pradesh", "Tamil Nadu"],
      harvesting: "Multiple harvests per season",
    },
    nutritionalInfo: {
      calories: "29 per 100g",
      protein: "0.9g",
      fiber: "2.8g",
      vitamins: ["Vitamin C", "Vitamin A", "Folate", "Potassium"],
    },
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
    grades: [
      { grade: "Premium", weight: "8-12cm", averageFruits: "80-100" },
      { grade: "Standard", weight: "6-8cm", averageFruits: "100-120" },
      { grade: "Small", weight: "4-6cm", averageFruits: "120-150" },
    ],
    markets: ["Asia", "Europe", "America", "Australia", "Middle East"],
    growingInfo: {
      temperature: "25 to 35 degrees Celsius",
      regions: ["Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      harvesting: "Harvested before full maturity",
    },
    nutritionalInfo: {
      calories: "23 per 100g",
      protein: "2.9g",
      fiber: "2.4g",
      vitamins: ["Vitamin A", "Vitamin C", "Folate", "Thiamine"],
    },
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
    grades: [
      { grade: "Extra Large", weight: "25-30g", averageFruits: "35-40" },
      { grade: "Large", weight: "20-25g", averageFruits: "40-50" },
      { grade: "Medium", weight: "15-20g", averageFruits: "50-65" },
      { grade: "Small", weight: "10-15g", averageFruits: "65-85" },
    ],
    markets: [
      "Global markets",
      "Premium restaurants",
      "Retail chains",
      "Food service",
    ],
    growingInfo: {
      temperature: "18 to 28 degrees Celsius",
      regions: ["Karnataka", "Tamil Nadu", "Maharashtra"],
      harvesting: "Continuous harvest throughout season",
    },
    nutritionalInfo: {
      calories: "18 per 100g",
      protein: "0.9g",
      fiber: "1.2g",
      vitamins: ["Vitamin C", "Vitamin K", "Potassium", "Lycopene"],
    },
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
        title: "Immune Boost",
        description: "Rich in vitamin C for immune system support",
      },
      {
        icon: "🔥",
        title: "Anti-inflammatory",
        description: "Contains compounds that reduce inflammation",
      },
      {
        icon: "🧠",
        title: "Brain Health",
        description: "Antioxidants support cognitive function",
      },
    ],
    grades: [
      { grade: "Premium", weight: "80-120g", averageFruits: "15-20" },
      { grade: "Standard", weight: "60-80g", averageFruits: "20-25" },
      { grade: "Commercial", weight: "40-60g", averageFruits: "25-35" },
    ],
    markets: ["Europe", "America", "Asia", "Middle East", "Africa"],
    growingInfo: {
      temperature: "20 to 30 degrees Celsius",
      regions: ["Karnataka", "Andhra Pradesh", "Tamil Nadu"],
      harvesting: "Harvested when fully mature and red",
    },
    nutritionalInfo: {
      calories: "31 per 100g",
      protein: "1.9g",
      fiber: "3.9g",
      vitamins: ["Vitamin A", "Vitamin C", "Vitamin E", "Potassium"],
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getAllProductSlugs = (): string[] => {
  return products.map((product) => product.slug);
};
