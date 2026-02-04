"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/tetimonialsData";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold"
        >
          What Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-xl mx-auto"
        >
          Real feedback from men who trust PrimeCut.
        </motion.p>

        <div className="mt-14 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <p className="text-gray-700 italic">“{item.text}”</p>

              <p className="mt-6 font-medium">— {item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
