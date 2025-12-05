import { useNavigate } from "react-router-dom";

import dayjs from "dayjs";
import {
  Calendar01Icon,
  Dollar01Icon,
  LaptopIcon,
  Layers01Icon,
} from "hugeicons-react";

import { InternshipItem } from "@/@types/internships-list-response";

const InternshipCard = ({ internship }: { internship: InternshipItem }) => {
  const firstImage = internship.images[0];
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:shadow-lg"
      onClick={() => navigate(`/internship/${internship.id}`)}
    >
      {/* Image with title overlay */}
      <div className="relative">
        <img
          src={`data:${firstImage.imageType};base64,${firstImage.imageData}`}
          alt={internship.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center bg-black/70">
          <div className="px-4 py-3 text-white">
            <h3 className="text-lg font-semibold">{internship.title}</h3>
            {/* <p className="">{internship.company}</p> */}
          </div>
        </div>
      </div>

      {/* Internship details */}
      <div className="flex flex-col gap-2 p-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar01Icon className="h-4 w-4 text-neutral-500" />
          <span>
            Posted on {dayjs(internship.listingDate).format("YYYY-MM-DD")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LaptopIcon className="h-4 w-4 text-gray-500" />
          <span>{internship.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <Layers01Icon className="h-4 w-4 text-gray-500" />
          <span>{internship.level} level</span>
        </div>

        <div className="flex items-center gap-2">
          <Dollar01Icon className="h-4 w-4 text-gray-500" />
          <span> {internship.payment}</span>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
