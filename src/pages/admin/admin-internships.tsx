import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import InternSearchInput from "@/features/student/internship-search-input";
import ShimmerTable from "@/components/explore/internship-table-shinmer";
import InternshipTable from "@/components/internships/internships-table";

import useGetUserInternshipsQuery from "@/services/user/use-get-user-internships-query";

const AdminInternships = () => {
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
    return <ShimmerTable />;
  }
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

      <div className="py-12">
        {internsData && internsData.items.length > 0 ? (
          <InternshipTable internships={internsData.items} />
        ) : (
          <p className="col-span-full flex min-h-[50vh] items-center justify-center text-gray-500">
            No internships found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminInternships;
