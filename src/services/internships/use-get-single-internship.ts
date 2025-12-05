import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";

import { ApiError } from "@/@types/apiError";
import { InternshipSingleData } from "@/@types/internship-single-data";

const getSingleInternshipApi = async (
  internshipId: string | number
): Promise<InternshipSingleData | undefined> => {
  try {
    const response = await http(`/internships/${internshipId}`);
    return response.data.data;
  } catch (error) {
    const e = error as ApiError;
    toast.error(e?.response?.data?.message || "Failed to fetch product");
  }
};

const useGetSingleInternshipQuery = (internshipId: string | number) => {
  return useQuery({
    queryKey: ["internship", internshipId],
    queryFn: () => getSingleInternshipApi(internshipId),
    enabled: !!internshipId,
  });
};

export default useGetSingleInternshipQuery;
