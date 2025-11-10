import React from "react";
import { useNavigate } from "react-router-dom";

import { getUserData } from "@/utils/auth-storage";
import { checkAdmin } from "@/utils/check-admin";

interface InternshipTableProps {
  internships: {
    id: number | string;
    title: string;
    image: string;
    datePosted: string;
    type: string;
    skillLevel: string;
    payment: string;
    company: string;
  }[];
}

const InternshipTable: React.FC<InternshipTableProps> = ({ internships }) => {
  const navigate = useNavigate();

  if (internships.length === 0) {
    return (
      <p className="col-span-full flex min-h-[50vh] items-center justify-center text-gray-500">
        No internships found.
      </p>
    );
  }

  return (
    <div className="overflow-auto rounded-2xl bg-white shadow-md">
      <table className="w-full border-collapse overflow-auto text-left text-sm text-gray-700">
        <thead className="bg-gray-100 uppercase text-gray-600">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Date Posted</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Skill Level</th>
            <th className="px-6 py-3">Payment</th>
          </tr>
        </thead>

        <tbody>
          {internships
            .filter((internship) =>
              checkAdmin(getUserData())
                ? true
                : internship.company === "Panthi company"
            )
            .map((internship) => (
              <tr
                key={internship.id}
                onClick={() => navigate(`/internship/${internship.id}`)}
                className="cursor-pointer border-b transition duration-150 hover:bg-gray-50"
              >
                {/* Internship Image */}
                <td className="px-6 py-4">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  {internship.title}
                </td>

                <td className="px-6 py-4">{internship.datePosted}</td>

                {/* Type */}
                <td className="px-6 py-4">{internship.type}</td>

                <td className="px-6 py-4">{internship.skillLevel}</td>

                <td className="px-6 py-4">{internship.payment}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InternshipTable;
