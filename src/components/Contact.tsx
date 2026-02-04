"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold"
        >
          Book Your Appointment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600 max-w-xl mx-auto"
        >
          Ready for a clean cut? Leave your details and we’ll get back to you
          quickly.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-black/10"
            />

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <textarea
            placeholder="Preferred service or message"
            rows={4}
            className="w-full rounded-xl border border-gray-300 px-4 py-3
            focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <button
            type="submit"
            className="mt-4 inline-flex justify-center items-center
            rounded-xl bg-black px-8 py-4 text-white text-sm font-medium
            hover:opacity-90 transition"
          >
            Request Appointment
          </button>

          {/* <button
            type="submit"
            className="mt-4 inline-flex justify-center items-center
            rounded-xl bg-black px-8 py-4 text-white text-sm font-medium
            hover:opacity-90 transition"
          >
            Whatsapp Directly
          </button> */}
        </motion.form>
      </div>
    </section>
  );
}
