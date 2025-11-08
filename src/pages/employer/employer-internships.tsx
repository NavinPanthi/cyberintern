import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import InternSearchInput from "@/features/student/internship-search-input";
import InternshipShimmer from "@/components/explore/internship-shimmer";
import ShimmerTable from "@/components/explore/internship-table-shinmer";
import InternshipTable from "@/components/internships/internships-table";

import { internships } from "@/utils/data/internship-data";

const EmployerInternships = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search, setSearch] = useState<string | undefined>(initialSearch);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    <div className="relative gap-2 px-4">
      <h2 className="mb-4 pt-12 text-3xl font-bold text-gray-800 md:text-4xl">
        Posted Internships
      </h2>
      <InternSearchInput
        className="flex flex-col items-center justify-between gap-3 rounded-xl bg-shade-light p-6 text-sm md:flex-row md:gap-1 xl:text-base"
        selectedType={selectedType}
        selectedSkillLevel={selectedSkillLevel}
        selectedPayment={selectedPayment}
        search={search}
        setSelectedType={setSelectedType}
        setSelectedSkillLevel={setSelectedSkillLevel}
        setSelectedPayment={setSelectedPayment}
        setSearch={setSearch}
      />
      {isLoading ? (
        <ShimmerTable />
      ) : (
        <div className="py-12">
          <InternshipTable internships={filteredInternships} />
        </div>
      )}
    </div>
  );
};

export default EmployerInternships;
