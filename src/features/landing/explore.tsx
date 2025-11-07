import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import InternshipCard from "@/components/explore/internship-card";

import { internships } from "@/utils/data/internship-data";

import InternSearchInput from "../student/product-search-input";

const Explore = () => {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search, setSearch] = useState<string | undefined>(initialSearch);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string[]>([]);

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      const matchesSearch =
        !search ||
        internship.title.toLowerCase().includes(search.toLowerCase()) ||
        internship.company.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        selectedType.length === 0 ||
        selectedType.some(
          (type) => type.toLowerCase() === internship.type.toLowerCase()
        );

      const matchesSkill =
        selectedSkillLevel.length === 0 ||
        selectedSkillLevel.some(
          (level) => level.toLowerCase() === internship.skillLevel.toLowerCase()
        );

      const matchesPayment =
        selectedPayment.length === 0 ||
        selectedPayment.some(
          (pay) => pay.toLowerCase() === internship.payment.toLowerCase()
        );

      return matchesSearch && matchesType && matchesSkill && matchesPayment;
    });
  }, [search, selectedType, selectedSkillLevel, selectedPayment]);

  return (
    <div className="relative gap-2 px-4 lg:px-28">
      <InternSearchInput
        className="sticky top-20 z-20 flex flex-col items-center justify-between gap-3 bg-shade-light py-2 text-sm md:flex-row md:gap-1 lg:py-6 xl:text-base"
        selectedType={selectedType}
        selectedSkillLevel={selectedSkillLevel}
        selectedPayment={selectedPayment}
        search={search}
        setSelectedType={setSelectedType}
        setSelectedSkillLevel={setSelectedSkillLevel}
        setSelectedPayment={setSelectedPayment}
        setSearch={setSearch}
      />

      <div className="z-10 grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship, idx) => (
            <InternshipCard key={idx} {...internship} />
          ))
        ) : (
          <p className="col-span-full flex min-h-[50vh] items-center justify-center text-gray-500">
            No internships found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Explore;
