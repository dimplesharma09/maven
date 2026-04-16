import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";

export const metadata: Metadata = {
  title: "Blog | Maven Projects",
  description: "Read our latest insights, design stories, and studio updates.",
};

export default function Page() {
  return (
    <main className="bg-white text-[#111111]">
      <PageHero
        eyebrow="Blog"
        title="Stories from the studio and beyond."
        description="We are preparing new articles about architecture, interior design, and our project journeys in Jaipur. Stay tuned."
        image="/assets/Image/project-image1.png"
      />
      <section className="py-24 text-center">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-editorial text-lg text-[#555555]">
            Our blog is coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
