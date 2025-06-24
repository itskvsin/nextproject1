"use client";

import React from "react";
import { motion } from "motion/react";
import Divider from "@/components/Divider";

const packages: PackageType[] = [
  {
    title: "5 UGC Videos",
    price: "₹125,000",
    features: [
      "3 hooks per video",
      "2 on-screen models included",
      "5 concepts/scripts",
      "Creative strategy & research",
      "Full pre- and post-production support",
    ],
  },
  {
    title: "10 UGC Videos",
    price: "₹250,000",
    features: [
      "3 hooks per video",
      "4 on-screen models included",
      "5 concepts/scripts",
      "Creative strategy & research",
      "Full pre- and post-production support",
    ],
  },
  {
    title: "15 UGC Videos",
    price: "₹375,000",
    features: [
      "3 hooks per video",
      "5 on-screen models included",
      "5 concepts/scripts",
      "Creative strategy & research",
      "Full pre- and post-production support",
    ],
  },
];

type PackageType = {
  title: string;
  price: string;
  features: string[];
};

export default function Packages() {
  return (
    <section className="py-20 text-center bg-[radial-gradient(circle_at_85%_20%,rgba(246,165,17,0.1),#000000)] h-screen">
      <div className="text-4xl font-bold mb-12 text-black">
        <div className="flex gap-2 text-center justify-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 12,
            }}
            className="text-4xl text-gray-200 font-bold mb-12"
          >
            Our
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 12,
            }}
            className="text-4xl font-bold mb-8 text-[#F6A511]"
          >
            Packages
          </motion.h1>
        </div>
        <div>
          <Divider />
        </div>
        <div className="md:grid grid h-110 justify-center md:justify-between items-start overflow-auto md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {packages.map((pkg, i) => {
            const { title, price, features } = pkg;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 12,
                  delay: i * 0.2,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 20px rgba(246,165,17,0.3)",
                }}
                className="border border-[#F6A511] rounded-2xl p-6 shadow-lg bg-[#343434] text-white  hover:shadow-xl transition-all duration-300 text-left"
              >
                <h2 className="text-2xl font-bold mb-2 bg-[#F6A511] bg-clip-text text-transparent">
                  {title}
                </h2>
                <h2 className="text-xl font-semibold bg-transparent mb-4">
                  {price}
                </h2>
                <ul className="list-disc text-sm list-inside text-gray-300 space-y-1">
                  {features.map((features, i) => {
                    return <li key={i}>{features}</li>;
                  })}
                </ul>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-12 px-10 text-sm text-neutral-600 max-w-2xl mx-auto">
          All prices exclude travel and extra graphics or thumbnails. <br />
          <span className="font-medium text-neutral-400">
            Custom packages are available upon request.
          </span>
        </p>
      </div>
    </section>
  );
}
