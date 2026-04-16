import type { Metadata } from "next";

import PageHero from "@/components/pages/PageHero";
import HomeClosingCta from "@/components/sections/home/HomeClosingCta";
import HomeMetricsAwards from "@/components/sections/home/HomeMetricsAwards";
import HomeProcess from "@/components/sections/home/HomeProcess";
import { homeFooterCta, processIntro, processSteps } from "@/lib/homepage-data";

export const metadata: Metadata = {
  title: "Our Process | Maven Projects | Design to Execution in Jaipur",
  description:
    "See how Maven Projects guides clients from the first conversation through design development and site coordination to project completion in Jaipur.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <PageHero
        eyebrow="Our Process"
        title="A clear studio workflow that turns your vision into a buildable reality."
        description="We guide you from the first conversation through to move-in, turning complex planning into a clear, collaborative journey for your Jaipur home."
        image="/assets/Image/project-image1.png"
      />
      <HomeProcess intro={processIntro} steps={processSteps} />
      {/* <HomeMetricsAwards stats={projectMetrics} awards={awards} /> */}
      <HomeClosingCta content={homeFooterCta} />
    </main>
  );
}
