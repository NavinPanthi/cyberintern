import { useParams } from "react-router-dom";

import {
  Building01Icon,
  Calendar01Icon,
  Dollar01Icon,
  LaptopIcon,
  Layers01Icon,
} from "hugeicons-react";

import FileUploadForm from "@/features/student/file-upload-form";
import UploadFileForm from "@/features/student/file-upload-form";

import { internships } from "@/utils/data/internship-data";
import cn from "@/lib/classnames";

import Button from "../ui/button";

const InternshipDetail = ({
  className,
  applySection = false,
  internshipId,
}: {
  className?: string;
  applySection?: boolean;
  internshipId?: string | number;
}) => {
  const { id } = useParams<{ id: string }>();
  const resolvedInternshipId = internshipId || id;

  const internship = internships.find(
    (item) => item.id === Number(resolvedInternshipId)
  );

  if (!internship) {
    return <div className="py-10 text-center">Internship not found.</div>;
  }

  return (
    <div className={cn(className, "mx-auto max-w-6xl px-4 py-10")}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Internship Image */}
        <div className="flex items-center justify-center">
          <img
            src={internship.image}
            alt={internship.title}
            className="max-h-[80vh] w-full rounded-2xl object-cover shadow"
          />
        </div>

        {/* Internship Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold">{internship.title}</h1>
            <p className="flex items-center gap-2 text-2xl text-core-primary-mid-light">
              {internship.company}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Calendar01Icon className="h-4 w-4 text-gray-500" />
            <span>Date posted: {internship.datePosted}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <LaptopIcon className="h-4 w-4 text-gray-500" />
            <span>Type: {internship.type}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Layers01Icon className="h-4 w-4 text-gray-500" />
            <span>Skill level: {internship.skillLevel}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Dollar01Icon className="h-4 w-4 text-gray-500" />
            <span>Payment: {internship.payment}</span>
          </div>

          <div className="mt-4 text-gray-600">
            <p>
              Gain hands-on experience in {internship.title.toLowerCase()} with{" "}
              {internship.company}. Work with professionals to enhance your
              cybersecurity skills and practical knowledge.
            </p>
          </div>

          {applySection && (
            <>
              <UploadFileForm
                company={internship.company}
                status="Pending"
                title={internship.title}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipDetail;
