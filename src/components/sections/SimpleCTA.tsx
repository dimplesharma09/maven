"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/sections/anim";

type SimpleCTAProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function SimpleCTA({ title, description, ctaLabel, ctaHref }: SimpleCTAProps) {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-[#d7d7d7]">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#141414] mb-6">
            {title}
          </h2>
          <p className="font-editorial max-w-2xl mx-auto text-sm md:text-base leading-7 text-[#555555] mb-10">
            {description}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[#111111] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#000000]"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
