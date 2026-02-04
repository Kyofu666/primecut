"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/data/images";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <section id="gallery" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center">Our Work</h2>
        <p className="mt-4 text-gray-600 text-center max-w-xl mx-auto">
          Precision cuts. Clean fades. Premium results.
        </p>

        <div className="relative mt-14 overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // className="relative h-[420px] sm:h-[520px]"
              className="relative h-105 sm:h-130"
            >
              <Image
                src={images[index]}
                alt="PrimeCut gallery"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur-md p-3 rounded-full
            shadow hover:bg-white transition"
          >
            ←
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2
            bg-white/80 backdrop-blur-md p-3 rounded-full
            shadow hover:bg-white transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
