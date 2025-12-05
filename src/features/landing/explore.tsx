import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import InternshipCard from "@/components/explore/internship-card";
import InternshipShimmer from "@/components/explore/internship-shimmer";

import InternSearchInput from "../student/internship-search-input";

import useGetUserInternshipsQuery from "@/services/user/use-get-user-internships-query";

const Explore = () => {
  const [searchParams] = useSearchParams({
    page: "1",
    size: "20",
  });

  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") || "";
  const [search, setSearch] = useState<string | undefined>(initialSearch);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState<string[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<string[]>([]);
  const { data: internsData, isPending } = useGetUserInternshipsQuery({
    selectedSkillLevel,
    selectedPayment,
    selectedType,
    search,
    searchParams,
  });

  if (isPending) {
    return <InternshipShimmer />;
  }

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
        {internsData && internsData.items.length > 0 ? (
          internsData.items.map((internship) => (
            <InternshipCard internship={internship} />
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
