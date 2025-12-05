import { useParams } from "react-router-dom";

import {
  Calendar01Icon,
  Dollar01Icon,
  LaptopIcon,
  Layers01Icon,
} from "hugeicons-react";

import UploadFileForm from "@/features/student/file-upload-form";

import cn from "@/lib/classnames";

import useGetSingleInternshipQuery from "@/services/internships/use-get-single-internship";

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

  const { data: internship, isPending } = useGetSingleInternshipQuery(
    resolvedInternshipId ?? ""
  );

  if (isPending) return <div className="py-10 text-center">Loading...</div>;

  if (!internship)
    return <div className="py-10 text-center">Internship not found.</div>;

  const firstImage = internship.images[0];

  return (
    <div className={cn(className, "mx-auto max-w-6xl px-4 py-10")}>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Internship Image */}
        <div className="flex items-center justify-center">
          <img
            src={`data:${firstImage.imageType};base64,${firstImage.imageData}`}
            alt={internship.title}
            className="max-h-[80vh] w-full rounded-2xl object-cover shadow"
          />
        </div>

        {/* Internship Details */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold">{internship.title}</h1>
            <p className="flex items-center gap-2 text-2xl text-core-primary-mid-light">
              {internship.employerFullName}
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Calendar01Icon className="h-4 w-4 text-gray-500" />
            <span>Date posted: {internship.listingDate}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <LaptopIcon className="h-4 w-4 text-gray-500" />
            <span>Type: {internship.type}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Layers01Icon className="h-4 w-4 text-gray-500" />
            <span>Skill level: {internship.level}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <Dollar01Icon className="h-4 w-4 text-gray-500" />
            <span>Payment: {internship.payment}</span>
          </div>

          <div className="mt-4 text-gray-600">
            <p>
              Gain hands-on experience in {internship.title.toLowerCase()} with{" "}
              {internship.employerFullName}. Work with professionals to enhance
              your cybersecurity skills and practical knowledge.
            </p>
          </div>

          {applySection && (
            <>
              <UploadFileForm
                company={internship.employerFullName}
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
