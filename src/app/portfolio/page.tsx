import type { Metadata } from "next";

import PageHero from "@/components/pages/PageHero";
import HomeFeatureBanner from "@/components/sections/home/HomeFeatureBanner";
import HomeProjects from "@/components/sections/home/HomeProjects";
import SimpleCTA from "@/components/sections/SimpleCTA";
import { featureBanner, featuredProjects } from "@/lib/homepage-data";

export const metadata: Metadata = {
  title: "Portfolio | Architecture & Interior Projects Jaipur | Maven Projects",
  description:
    "Browse Maven Projects' portfolio of modern architecture and luxury interiors in Jaipur, featuring our signature work in Malviya Nagar and Jagatpura.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <PageHero
        eyebrow="Our Portfolio"
        title="Transforming ideas into beautiful, lived-in spaces across Jaipur."
        description="A curated look at our recent architecture and interior projects that blend modern aesthetics with functional living."
        image="/assets/Image/project-image2.png"
      />
      <HomeProjects items={featuredProjects} />
      <HomeFeatureBanner content={featureBanner} />
      <SimpleCTA 
        title="Ready to Start Your Project?"
        description="Seeing our work is just the beginning. Let’s collaborate to create something special for you and your family."
        ctaLabel="Start Your Project Here"
        ctaHref="/contact"
      />
    </main>
  );
}
