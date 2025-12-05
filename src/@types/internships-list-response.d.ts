export interface InternshipResponse {
  success: boolean;
  message: string;
  data: InternshipData;
}

export interface InternshipData {
  items: InternshipItem[];
  totalItems: number;
  totalPages: number;
  currPage: number;
  limit: number;
  hasNextPage: boolean;
}

export interface InternshipItem {
  id: number;
  title: string;
  description: string;
  type: string;
  level: string;
  payment: string;
  listingDate: string;
  images: InternshipImage[];
}

export interface InternshipImage {
  id: number;
  imageData: string;
  imageName: string;
  imageType: string;
}
