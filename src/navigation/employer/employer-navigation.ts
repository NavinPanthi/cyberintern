import { BarCode01Icon, ClipboardIcon, HugeiconsProps } from "hugeicons-react";

export interface INavigation {
  id: string;
  name: string;
  path: string;
  icon: React.FC<HugeiconsProps> | string;
}

export const employerLinks: INavigation[] = [
  {
    id: "Internships",
    name: "Internships",
    path: "/employer/internships",
    icon: BarCode01Icon,
  },
];
