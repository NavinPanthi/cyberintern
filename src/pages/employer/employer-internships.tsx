import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import RegisterInternshipDrawer from "@/features/employer/internships/register-internship-modal";
import InternSearchInput from "@/features/student/internship-search-input";
import ShimmerTable from "@/components/explore/internship-table-shinmer";
import Header from "@/components/header";
import InternshipTable from "@/components/internships/internships-table";

import { RootState } from "@/redux/store";
import cn from "@/lib/classnames";

import useGetEmployerInternshipsQuery from "@/services/employer/use-get-employer-internships-query";

const EmployerInternships = () => {
  const location = useLocation();
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
  const collapsed = useSelector(
    (state: RootState) => state.sidebar.isCollapsed
  );
  const { data: internsData, isPending } = useGetEmployerInternshipsQuery({
    selectedSkillLevel,
    selectedPayment,
    selectedType,
    search,
    searchParams,
  });

  if (isPending) {
    <ShimmerTable />;
  }
  const [isRegisterDrawerOpen, setIsRegisterDrawerOpen] = useState(false);

  return (
    <>
      <Header
        title="Your Internships"
        description="Manage your internships"
        ActionComponent=<p>Add an internship</p>
        actionCallback={() => {
          setIsRegisterDrawerOpen(true);
        }}
      />
      <div className="relative gap-2 md:px-4">
        <h2 className="mb-4 text-nowrap text-3xl font-bold text-gray-800 md:pt-12 md:text-4xl">
          Posted Internships
        </h2>
        <InternSearchInput
          className="flex flex-col items-center justify-between gap-3 rounded-xl bg-shade-light p-3 text-sm md:flex-row md:gap-1 md:p-6 xl:text-base"
          selectedType={selectedType}
          selectedSkillLevel={selectedSkillLevel}
          selectedPayment={selectedPayment}
          search={search}
          setSelectedType={setSelectedType}
          setSelectedSkillLevel={setSelectedSkillLevel}
          setSelectedPayment={setSelectedPayment}
          setSearch={setSearch}
        />

        <div
          className={cn("py-6 md:py-12", {
            "h-[calc(100vh-210px)]": collapsed,
          })}
        >
          {internsData && <InternshipTable internships={internsData.items} />}
        </div>
      </div>
      <RegisterInternshipDrawer
        isOpen={isRegisterDrawerOpen}
        toggleDrawer={() => setIsRegisterDrawerOpen(!isRegisterDrawerOpen)}
      />
    </>
  );
};

export default EmployerInternships;
