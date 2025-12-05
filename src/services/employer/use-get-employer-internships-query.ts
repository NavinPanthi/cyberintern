import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";

import http from "@/lib/http";

import { ApiError } from "@/@types/apiError";
import { InternshipData } from "@/@types/internships-list-response";

const getInternshipsApi = async ({
  searchParams,
  selectedSkillLevel,
  selectedPayment,
  selectedType,
  debounceSearch,
}: {
  searchParams: URLSearchParams;
  debounceSearch?: string;
  selectedSkillLevel?: string[];
  selectedPayment?: string[];
  selectedType?: string[];
}): Promise<InternshipData | undefined> => {
  const searchQueryParams = new URLSearchParams(searchParams);
  if (debounceSearch) {
    searchQueryParams.set("search", debounceSearch);
  }

  if (selectedSkillLevel && selectedSkillLevel.length > 0) {
    selectedSkillLevel.forEach((element) => {
      searchQueryParams.append("levels", element);
    });
  }
  if (selectedType && selectedType.length > 0) {
    selectedType.forEach((element) => {
      searchQueryParams.append("types", element);
    });
  }
  if (selectedPayment && selectedPayment.length > 0) {
    selectedPayment.forEach((element) => {
      searchQueryParams.append("payments", element);
    });
  }
  ["page", "size"].forEach((param) => {
    const value = searchParams.get(param);
    if (value) searchQueryParams.set(param, value);
  });

  try {
    const response = await http(`/internships`, {
      params: searchQueryParams,
    });
    return response.data.data;
  } catch (error) {
    const e = error as ApiError;
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

const useGetEmployerInternshipsQuery = ({
  searchParams,
  selectedSkillLevel,
  selectedPayment,
  selectedType,
  search,
}: {
  selectedSkillLevel?: string[];
  selectedPayment?: string[];
  selectedType?: string[];
  search?: string;
  searchParams: URLSearchParams;
}) => {
  const page = searchParams.get("page") || "1";
  const size = searchParams.get("size") || "20";
  const [debounceSearch] = useDebounce(search, 500);

  return useQuery({
    queryKey: [
      "employer-internships",
      size,
      page,
      selectedSkillLevel,
      selectedPayment,
      selectedType,
      debounceSearch,
      debounceSearch,
    ],
    queryFn: () =>
      getInternshipsApi({
        searchParams,
        selectedSkillLevel,
        selectedPayment,
        selectedType,
        debounceSearch,
      }),
  });
};

export default useGetEmployerInternshipsQuery;
