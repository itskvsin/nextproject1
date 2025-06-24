  "use client";

  import React from "react";
  import { motion } from "framer-motion";
  // import Image from "next/image"; , { useState }
  import GSAPHoverRevealSection from "../../components/GSAPHoverRevealSection";

  // Types
  type Feature = {
  titleStart: string;
  titleEnd: string;
  description: string;
  image: string;
};

  // Feature Data
  const features: Feature[] = [
  {
    "titleStart": "Conversion-Centric",
    "titleEnd": "Ad Creatives",
    "description": "Every video is designed to boost engagement and drive sales.",
    "image": "/images/wyg1.jpg"
  },
  {
    "titleStart": "Multiple Hooks",
    "titleEnd": "for A/B Testing",
    "description": "We develop several opening angles to discover what resonates best with your audience.",
    "image": "/images/wyg2.jpg"
  },
  {
    "titleStart": "Diverse Actor",
    "titleEnd": "Selection",
    "description": "Choose from our in-house database of on-screen talent to find the perfect match for your brand.",
    "image": "/images/wyg3.jpg"
  },
  {
    "titleStart": "Parallel Integration",
    "titleEnd": "for Faster Turnaround",
    "description": "Scripting, casting, and location scouting happen simultaneously to save time.",
    "image": "/images/wyg4.jpg"
  },
  {
    "titleStart": "Professional",
    "titleEnd": "Equipment",
    "description": "All shoots use a Sony Alpha a7 III — never just a smartphone camera.",
    "image": "/images/wyg5.jpg"
  }
]

  const WYG = () => {
    // const [activeImage, setActiveImage] = useState<string | null>(features[0].image);

    return (
      <section className="py-10 bg-[radial-gradient(circle_at_85%_20%,rgba(246,165,17,0.1),#000000)] bg-black text-white relative">
        <div className="text-center mb-14">
          <div className="flex justify-center items-center gap-3">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl font-bold"
            >
              Our
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#F6A511]"
            >
              Services
            </motion.h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-6 relative">
          {features.map((feature, i) => (
            // <motion.div
            //   key={i}
            //   initial={{ opacity: 0, y: 50 }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6, delay: i * 0.2 }}
            //   viewport={{ once: true, amount: 0.3 }}
            //   onMouseEnter={() => setActiveImage(feature.image)}
            //   onMouseLeave={() => setActiveImage(null)}
            //   onViewportEnter={() => setActiveImage(feature.image)}
            //   className="relative flex flex-col md:flex-row gap-10 items-center z-10"
            // >
            //   <div className="md:w-1/2 relative group">
            //     <div className="bg-[#343434]/40 border border-transparent rounded-xl p-4 shadow-xl cursor-pointer overflow-hidden relative">
            //       <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F6A511] group-hover:w-full transition-all duration-500 ease-in-out -translate-x-1/2 origin-center" />
            //       <div className="text-2xl mb-3 relative z-10 flex items-center gap-2">
            //           <h2>{feature.icon}</h2>
            //       <h3 className="text-xl font-semibold text-[#F6A511] mb-2 relative z-10">
            //         {feature.title}
            //       </h3>
            //       </div>
            //       <p className="text-white/80 text-md relative z-10 px-6">{feature.description}</p>
            //     </div>
            //   </div>

            //   {activeImage === feature.image && (
            //     <motion.div
            //       key={feature.image}
            //       initial={{ opacity: 0 }}
            //       animate={{ opacity: 1 }}
            //       transition={{ duration: 0.5 }}
            //       className="md:w-1/2 absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"
            //     >
            //       <Image
            //         src={feature.image}
            //         alt={feature.title}
            //         width={300}
            //         height={200}
            //         className="rounded-xl object-cover ml-10 shadow-2xl"
            //       />
            //     </motion.div>
            //   )}
            // </motion.div>
            <GSAPHoverRevealSection key={i} feature={feature} />
          ))}
        </div>
      </section>
    );
  };

  export default WYG;
