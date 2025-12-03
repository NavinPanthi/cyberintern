import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import InternshipCard from "@/components/explore/internship-card";
import TextInput from "@/components/ui/text-input";

import { internships } from "@/utils/data/internship-data";

type FormValues = {
  search: string;
};

const InternshipHeroSection = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.search.trim()) {
      navigate(`/internship?search=${encodeURIComponent(data.search.trim())}`);
      reset();
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center bg-white px-4 py-12 text-center lg:mt-16 lg:px-28 lg:py-16">
      {/* Hero Title */}
      <div className="max-w-2xl">
        <h2 className="mb-3 text-3xl font-bold text-black md:text-4xl">
          Find Internship Opportunities
        </h2>
        <p className="mb-6 text-gray-600">
          Connecting users to the best internship opportunities
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-row gap-4">
            <TextInput
              placeholder="Search internships..."
              {...register("search")}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-core-primary sm:w-80"
            />
            <button
              type="submit"
              className="hidden rounded-md bg-core-primary px-5 py-2 font-semibold text-white transition hover:bg-core-primary/90 md:block"
            >
              Search
            </button>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-md bg-core-primary px-6 py-2 font-semibold text-white transition hover:bg-core-primary/90"
          >
            Browse
          </button>
        </form>
      </div>

      {/* Featured Internships */}
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="mb-6 text-xl font-bold text-black">
          Featured Internships
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {internships.slice(0, 5).map((internship, idx) => (
            <InternshipCard key={idx} {...internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipHeroSection;
