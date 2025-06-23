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
    <section className="py-20 text-center">
      <div className="text-4xl font-bold mb-12 text-black">
        <div className="flex gap-2 text-center justify-center">
          {" "}
          <h1 className="text-4xl text-gray-200 font-bold mb-12">Our</h1>
          <h1 className="text-4xl font-bold mb-8 text-[#F6A511]">Packages</h1>
        </div>
        <div>
          <Divider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {packages.map((pkg, i) => {
            const { title, price, features } = pkg;
            return (
              <motion.div
                whileHover={{ scale: 1.01, backgroundColor: "#393939" }}
                className="border border-[#F6A511] rounded-2xl p-6 shadow-lg bg-[#343434] text-white  hover:shadow-xl transition-all duration-300 text-left"
                key={i}
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
        <p className="mt-12 text-sm text-neutral-600 max-w-2xl mx-auto">
          All prices exclude travel and extra graphics or thumbnails. <br />
          <span className="font-medium text-neutral-400">
            Custom packages are available upon request.
          </span>
        </p>
      </div>
    </section>
  );
}
