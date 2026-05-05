"use client";

import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FiveDSystem } from "@/components/FiveDSystem";
import { ServicesList } from "@/components/ServicesList";
import { SpecialPrograms } from "@/components/SpecialPrograms";
import { NarrativeMedicine } from "@/components/NarrativeMedicine";
import { CommitteesAndPartners } from "@/components/CommitteesAndPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FiveDSystem />
      <ServicesList />
      <SpecialPrograms />
      <NarrativeMedicine />
      <CommitteesAndPartners />
    </>
  );
}
