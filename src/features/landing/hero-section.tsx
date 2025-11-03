import React from "react";

import TextInput from "@/components/ui/text-input";
import TextAreaInput from "@/components/ui/textarea";

import { internships } from "@/utils/data/internship-data";

import InternshipCard from "./internship-card";

const InternshipHeroSection = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-white px-4 py-12 text-center lg:mt-16 lg:px-28 lg:py-16">
      <div className="max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl">
          Find internship opportunities
        </h2>
        <p className="mb-6 text-gray-600">
          Connecting users to internship opportunities
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <TextInput
            placeholder="Search internships"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-core-primary sm:w-80"
          />
          <button className="hidden rounded-md bg-core-primary px-5 py-2 font-semibold text-white transition md:block">
            Search
          </button>
        </div>

        <button className="mt-6 rounded-md bg-core-primary px-6 py-2 font-semibold text-white transition">
          Browse
        </button>
      </div>

      <div className="mt-16 w-full max-w-6xl">
        <h3 className="mb-6 text-xl font-bold text-black">
          Featured internships
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {internships.slice(0, 5).map((internship, idx) => (
            <InternshipCard key={idx} {...internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipHeroSection;
