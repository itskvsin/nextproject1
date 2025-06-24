"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Types
interface Project {
  brand: string;
  thumbnail: string;
  instagramUrl: string;
}

interface VideoProject extends Project {
  videoUrl: string;
}

const ugcProjects: Project[] = [
  { brand: "SETU", thumbnail: "/thumbs/setu.jpg", instagramUrl: "https://www.instagram.com/p/DKMoKIwsjqz/" },
  { brand: "Frido", thumbnail: "/thumbs/frido.jpg", instagramUrl: "https://www.instagram.com/reel/C4VXLRCo88i/" },
  { brand: "Wellbeing Nutrition", thumbnail: "/thumbs/wellbeing.jpg", instagramUrl: "https://drive.google.com/file/d/1IPgaXzX8JeLD8uysBeQM_pT-vUX89jj0/view?usp=sharing" },
  { brand: "Wow Skin Science", thumbnail: "/thumbs/wow.jpg", instagramUrl: "https://www.instagram.com/reel/C7BFKhzvN1l/" },
  { brand: "Emma Mattress", thumbnail: "/thumbs/emma.jpg", instagramUrl: "https://www.youtube.com/shorts/jQ_D-tEQOFA" },
];

const dvcProjects: VideoProject[] = [
  {
    brand: "Muscleblaze",
    thumbnail: "/thumbs/muscleblaze.jpg",
    instagramUrl: "https://www.instagram.com/p/DEzjowAvx4g/",
    videoUrl: "/reels/muscleblaze.mp4",
  },
  {
    brand: "Sova",
    thumbnail: "/thumbs/sova.jpg",
    instagramUrl: "https://drive.google.com/file/d/1WYW1UK_0h_OQHspf8pTP6InmHiogpN4Z/view",
    videoUrl: "/reels/sova.mp4",
  },
  {
    brand: "Supply6",
    thumbnail: "/thumbs/supply6.jpg",
    instagramUrl: "https://drive.google.com/file/d/1rEVS5216KXfvZNTtJbgIk1bTV7XSqipv/view",
    videoUrl: "/reels/supply6.mp4",
  },
  {
    brand: "Guppy Moms",
    thumbnail: "/thumbs/guppymoms.jpg",
    instagramUrl: "https://www.youtube.com/shorts/6xzYH1F_vCw",
    videoUrl: "/reels/guppymoms.mp4",
  },
];

const PreviousWork = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our <span className="text-[#F6A511]">Past Work</span></h2>
      </div>

      {/* UGC Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">UGC (Organic, Review Centric)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ugcProjects.map((project, i) => (
            <motion.a
              key={i}
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg border border-[#F6A511]"
            >
              <Image
                src={project.thumbnail}
                alt={project.brand}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="text-center py-2 text-lg font-medium">{project.brand}</div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* DVC Carousel */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">DVC (Authentic, Aesthetic, Storytelling)</h3>
        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F6A511] text-black px-3 py-1 rounded z-10">‹</button>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F6A511] text-black px-3 py-1 rounded z-10">›</button>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 no-scrollbar px-8">
            {dvcProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-[48%] md:w-[45%] lg:w-[42%] flex-shrink-0 rounded-lg overflow-hidden border border-[#F6A511] shadow-xl"
              >
                <video
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  className="w-full h-60 object-cover"
                />
                <div className="text-center py-2 text-lg font-medium">{project.brand}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
