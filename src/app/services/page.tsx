import type { Metadata } from "next";

import PageHero from "@/components/pages/PageHero";
import HomeClosingCta from "@/components/sections/home/HomeClosingCta";
import HomeProcess from "@/components/sections/home/HomeProcess";
import HomeServices from "@/components/sections/home/HomeServices";
import SimpleCTA from "@/components/sections/SimpleCTA";
import { homeFooterCta, processIntro, processSteps, services } from "@/lib/homepage-data";

export const metadata: Metadata = {
  title: "Architecture & Interior Design Services Jaipur | Maven Projects",
  description:
    "Explore our services including architectural planning, luxury interior design, and home renovations in Jaipur. Expert solutions for modern living and workspaces.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive solutions for your ideal living space."
        description="From the first sketch to the final brick, we provide integrated architectural and interior services to bring your project to life across Jaipur."
        image="/assets/Image/about-image.jpg"
      />
      <HomeServices items={services} />
      <HomeProcess intro={processIntro} steps={processSteps} />
      <SimpleCTA 
        title="Let’s Talk About Your New Project"
        description="Every great home starts with a simple conversation. We’re here to help you navigate the complexities of design and construction with ease."
        ctaLabel="Book Your Free Consultation"
        ctaHref="/contact"
      />
    </main>
  );
}
