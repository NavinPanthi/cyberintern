import { BarCode01Icon, HugeiconsProps } from "hugeicons-react";

export interface INavigation {
  id: string;
  name: string;
  path: string;
  icon: React.FC<HugeiconsProps> | string;
}

export const adminLinks: INavigation[] = [
  {
    id: "internships",
    name: "Internships",
    path: "/admin/internships",
    icon: BarCode01Icon,
  },
];
