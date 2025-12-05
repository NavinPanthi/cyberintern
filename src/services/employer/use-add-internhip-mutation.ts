import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";

import { ApiError } from "@/@types/apiError";

interface AddInternshipApiParams {
  data: FormData;
}

interface AddInternshipsMutationProps {
  reset: () => void;
  toggleDrawer?: () => void;
  setImage: Dispatch<SetStateAction<File[]>>;
}

const addInternshipApi = async ({ data }: AddInternshipApiParams) => {
  for (const [key, value] of data.entries()) {
    console.log(`${key}:`, value);
  }

  const response = await http.post("/employer/internships", data);
  return response.data;
};

const useAddInternshipMutation = ({
  reset,
  toggleDrawer,
  setImage,
}: AddInternshipsMutationProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addInternshipApi,

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["internships"] });
      queryClient.invalidateQueries({ queryKey: ["employer-internships"] });
      reset();
      setImage([]);

      if (toggleDrawer) toggleDrawer();
      toast.success(data?.message || "Internship successfully added");
    },

    onError: (error) => {
      const e = error as ApiError;
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useAddInternshipMutation;
