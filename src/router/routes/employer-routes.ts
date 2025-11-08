import EmployerInternships from "@/pages/employer/employer-internships";
import EmployerProfilePage from "@/pages/employer/employer-profile";
import InternshipDetailStudentPage from "@/pages/student/intern-detail-page";

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
    component: InternshipDetailStudentPage,
    meta: {
      privateRoute: false,
    },
  },
];

export default EmployerRoutes;
