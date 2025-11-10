import EmployerInternships from "@/pages/employer/employer-internships";
import EmployerProfilePage from "@/pages/employer/employer-profile";
import InternshipDetailEmployerPage from "@/pages/employer/internship-detail-employer";

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
  {
    id: "employer-profile",
    path: "/employer-profile",
    component: EmployerProfilePage,
    meta: {
      privateRoute: true,
      employerLayout: true,
    },
  },
  {
    id: "employer-internships",
    path: "/employer/internships",
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

export default EmployerRoutes;
