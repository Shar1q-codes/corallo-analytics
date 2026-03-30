import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import AnalyticsTypes from "@/components/AnalyticsTypes";
import Architecture from "@/components/Architecture";
import Capabilities from "@/components/Capabilities";
import LivePreview from "@/components/LivePreview";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <AnalyticsTypes />
        <Architecture />
        <Capabilities />
        <LivePreview />
        <Industries />
        <Comparison />
        <Process />
        <BeforeAfter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
