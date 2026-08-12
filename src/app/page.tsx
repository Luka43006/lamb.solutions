import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { TrustStrip } from "@/components/TrustStrip";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";
import { CaseStudy } from "@/components/CaseStudy";
import { Testimonial } from "@/components/Testimonial";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <TrustStrip />
        <Capabilities />
        <Process />
        <CaseStudy />
        <Testimonial />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
