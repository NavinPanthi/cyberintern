import { BarCode01Icon, ClipboardIcon, HugeiconsProps } from "hugeicons-react";

export interface INavigation {
  id: string;
  name: string;
  path: string;
  icon: React.FC<HugeiconsProps> | string;
}

export const employerLinks: INavigation[] = [
  {
    id: "Products",
    name: "Products",
    path: "/employer/products",
    icon: BarCode01Icon,
  },

  {
    id: "Orders",
    name: "Orders",
    path: "/employer/orders",
    icon: ClipboardIcon,
  },
];
