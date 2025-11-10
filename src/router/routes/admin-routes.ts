// import AdminChatPage from "@/pages/admin/admin-chat-page";
// import AdminProductsPage from "@/pages/admin/products/admin-products-page";
// import ProductDetailAdminPage from "@/pages/admin/products/product-detail-page";
// import UsersPage from "@/pages/admin/users/users-page";
// import EmployerProfilePage from "@/pages/admin/profile";
// import EmployerChangePassword from "@/pages/employer/profile/employer-change-password";

import EmployerInternships from "@/pages/employer/employer-internships";
import EmployerProfilePage from "@/pages/employer/employer-profile";
import InternshipDetailEmployerPage from "@/pages/employer/internship-detail-employer";

interface IAdminRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta?: {
    adminLayout?: boolean;
    privateRoute?: boolean;
  };
}
const adminRoutes: IAdminRoutes[] = [
  {
    id: "admin-profile",
    path: "/admin/profile",
    component: EmployerProfilePage,
    meta: {
      privateRoute: true,
      adminLayout: true,
    },
  },
  {
    id: "admin-internships",
    path: "/admin/internships",
    component: EmployerInternships,
    meta: {
      privateRoute: true,
    },
  },
  {
    id: "internship-page",
    path: "/internship/:id",
    component: InternshipDetailEmployerPage,
    meta: {
      privateRoute: false,
    },
  },
];

export default adminRoutes;
