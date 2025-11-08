import { useSelector } from "react-redux";

import dayjs from "dayjs";

import { RootState } from "@/redux/store";

const Application = () => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user || !user.internships || user.internships.length === 0) {
    return (
      <p className="my-28 p-6 text-center text-xl text-gray-500 lg:text-3xl">
        No internship activities found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto px-4 py-8 lg:px-28 lg:py-12">
      <h2 className="my-4 text-3xl font-bold text-gray-800 md:text-4xl lg:my-8">
        Your Internship Activities
      </h2>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Company</th>
            <th className="border border-gray-300 px-4 py-2">Date Applied</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {user.internships.map((internship, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                {internship.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {internship.company}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {dayjs(internship.dateApplied).format("DD MMM YYYY")}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {internship.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Application;
