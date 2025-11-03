// import EmployerOrdersPage from "@/pages/employer/orders/employer-orders-page";
// import ProductDetailEmployerPage from "@/pages/employer/products/product-detail-page";
// import EmployerProductsPage from "@/pages/employer/products/employer-products-page";
// import EmployerProfilePage from "@/pages/employer/profile";
// import EmployerChangePassword from "@/pages/employer/profile/employer-change-password";

interface IEmployerRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta?: {
    employerLayout?: boolean;
    privateRoute?: boolean;
  };
}
const EmployerRoutes: IEmployerRoutes[] = [
  // {
  //   id: "employer-products",
  //   path: "/employer/products",
  //   component: EmployerProductsPage,
  //   meta: {
  //     employerLayout: true,
  //     privateRoute: true,
  //   },
  // },
  // {
  //   id: "employer-orders",
  //   path: "/employer/orders",
  //   component: EmployerOrdersPage,
  //   meta: {
  //     employerLayout: true,
  //     privateRoute: true,
  //   },
  // },
  // {
  //   id: "employer-profile",
  //   path: "/employer/profile",
  //   component: EmployerProfilePage,
  //   meta: {
  //     privateRoute: true,
  //     employerLayout: true,
  //   },
  // },
  // {
  //   id: "product-detail",
  //   path: "/product/:id",
  //   component: ProductDetailEmployerPage,
  //   meta: {
  //     privateRoute: true,
  //   },
  // },
  // {
  //   id: "change-password",
  //   path: "/employer/change-password",
  //   component: EmployerChangePassword,
  //   meta: {
  //     privateRoute: true,
  //   },
  // },
];

export default EmployerRoutes;
