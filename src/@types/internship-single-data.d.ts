export interface InternshipSingleResponse {
  success: boolean;
  message: string;
  data: InternshipSingleData;
}

export interface InternshipSingleData {
  id: number;
  title: string;
  description: string;
  type: string;
  level: string;
  payment: string;
  listingDate: string;
  images: InternshipImage[];
  employerFullName: string;
}
