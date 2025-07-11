import Image from "next/image";

const features = [
  {
    title: "Cutting Edge Technology",
    description:
      "We use advanced processing technology for the highest quality and efficiency in every product.",
   
  },
  {
    title: "100% Natural",
    description:
      "All our products are naturally processed, free from pesticides, artificial colors, and flavors.",
 
  },
  {
    title: "Finest Quality",
    description:
      "We offer the finest, export-quality agricultural products to our customers.",
   
  },
  {
    title: "Direct from Farm",
    description:
      "We partner with contract farmers to source fresh products directly from the farm.",
    
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left Features */}
          <div className="flex flex-col gap-16">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.title} className="flex items-center gap-6">
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-8 border-white bg-white">
              <Image
                src="/image-3.jpg"
                alt="Farm to Fork Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-16">
            {features.slice(2).map((feature) => (
              <div key={feature.title} className="flex items-center gap-6">
                
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 