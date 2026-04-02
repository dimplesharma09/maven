"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { fadeInUp, stagger } from "@/components/sections/anim";
import type { StudioIntro } from "@/lib/homepage-data";

type HomeStudioIntroProps = {
  content: StudioIntro;
};

export default function HomeStudioIntro({ content }: HomeStudioIntroProps) {
  return (
    <section
      id="studio"
      className="home-section-line scroll-mt-24 bg-white py-16 md:py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        variants={stagger}
        className="mx-auto grid max-w-[1500px] gap-10 px-5 md:px-8 lg:grid-cols-[160px_minmax(0,1fr)_160px] lg:items-start lg:px-10"
      >
        <motion.p
          variants={fadeInUp}
          className="font-editorial text-[10px] uppercase tracking-[0.26em] text-[#767676] md:text-xs"
        >
          {content.eyebrow}
        </motion.p>

        <div>
          <motion.h2
            variants={fadeInUp}
            className="font-display max-w-4xl text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] font-normal leading-[1.4] tracking-[-0.01em] text-[#141414]"
          >
            {content.title}
          </motion.h2>
        </div>

        <motion.div variants={fadeInUp} className="lg:justify-self-end mt-4 lg:mt-0 lg:pt-2">
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-3 border-b border-[#111111] pb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111] transition duration-300 hover:text-[#6b6b6b]"
          >
            {content.cta.label}
            <span aria-hidden="true" className="text-[14px] leading-none mb-0.5">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
