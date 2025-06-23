"use client";

import React from "react";
import { motion } from "framer-motion";

type ProcessStep = {
  title: string;
  description: string;
};

const steps: ProcessStep[] = [
  {
    title: "Days 1–3: Scripting",
    description:
      "We draft five concise, conversion-focused scripts aligned with your brand voice.",
  },
  {
    title: "Days 4–6: Casting & Location Scouting",
    description:
      "We finalise on-screen talent and confirm ideal shooting locations.",
  },
  {
    title: "Day 7: Shot Planning & Pre-Production Meeting (PPM)",
    description:
      "We review shot lists, storyboards, and logistics to ensure a smooth shoot.",
  },
  {
    title: "Day 8: Shoot Day",
    description:
      "Our crew captures all required footage efficiently, maintaining high production quality.",
  },
  {
    title: "Days 9–14: Post-Production & Revisions",
    description:
      "We edit, color-grade, and deliver first cuts. You review and request up to two rounds of revisions.",
  },
];

const ProcessRoadmap = () => {
  return (
    <section className="py-20 bg-black text-white">
        <div className="flex justify-center items-center gap-4">
        <motion.h2 initial={{opacity:0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 1, delay: 0.5}} viewport={{once: false}} className="text-4xl font-bold text-center mb-16">Our </motion.h2>
      <motion.h2 
      initial={{opacity: 0, y:20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 0.50}}
      viewport={{once: false}}
      className="text-4xl font-bold text-center mb-16 text-[#F6A511]">
        Process
      </motion.h2>
        </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white/20 -translate-x-1/2 z-0" />
        <div className="flex flex-col gap-16 relative z-10 px-4">
          {steps.map((step, i) => {
            const { title, description } = step;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 p-4 ">
                  <div className="bg-[#343434] text-gray-400 rounded-xl p-6 shadow-xl border-1 border-[#F6A511]">
                    <h3 className="text-xl font-bold text-[#F6A511] mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-200 font-semibold">{description}</p>
                  </div>
                </div>

                <div className="hidden md:block w-1 h-1 bg-[#F6A511] rounded-full" />

                <div className="w-full md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmap;
