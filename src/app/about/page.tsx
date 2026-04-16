import type { Metadata } from "next";

import HomeClosingCta from "@/components/sections/home/HomeClosingCta";
import HomeFounderFeature from "@/components/sections/home/HomeFounderFeature";
import HomeMetricsAwards from "@/components/sections/home/HomeMetricsAwards";
import PageHero from "@/components/pages/PageHero";
import { founderFeature, homeFooterCta } from "@/lib/homepage-data";

export const metadata: Metadata = {
  title: "About Maven Projects | Leading Design Studio in Jaipur",
  description:
    "Learn about Maven Projects, a dedicated architecture and interior design firm in Jaipur. We focus on modern, human-centered design and disciplined project delivery.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <PageHero
        eyebrow="About Us"
        title="Modern design built on trust, clarity, and the way you live."
        description="Maven Projects works across residences, renovations, and contemporary interiors with a strong emphasis on detail, material warmth, and design continuity for our clients in Jaipur."
        image="/assets/Image/about-us-img.jpeg"
      />
      <HomeFounderFeature content={founderFeature} />
      {/* <HomeMetricsAwards stats={projectMetrics} awards={awards} /> */}
      <HomeClosingCta content={homeFooterCta} />
    </main>
  );
}
