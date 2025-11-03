import React from "react";

import {
  Calendar01Icon,
  Dollar01Icon,
  LaptopIcon,
  Layers01Icon,
} from "hugeicons-react";

interface InternshipCardProps {
  title: string;
  company: string;
  image: string;
  datePosted: string;
  type: "Remote" | "On-site" | "Hybrid";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  payment: "Paid" | "Unpaid";
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  company,
  image,
  datePosted,
  type,
  skillLevel,
  payment,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-lg">
      {/* Image with title overlay */}
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center bg-black/70">
          <div className="px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="">{company}</p>
          </div>
        </div>
      </div>

      {/* Internship details */}
      <div className="flex flex-col gap-2 p-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar01Icon className="h-4 w-4 text-neutral-500" />
          <span>Posted on {datePosted}</span>
        </div>

        <div className="flex items-center gap-2">
          <LaptopIcon className="h-4 w-4 text-gray-500" />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2">
          <Layers01Icon className="h-4 w-4 text-gray-500" />
          <span>{skillLevel} level</span>
        </div>

        <div className="flex items-center gap-2">
          <Dollar01Icon className="h-4 w-4 text-gray-500" />
          <span> {payment}</span>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
