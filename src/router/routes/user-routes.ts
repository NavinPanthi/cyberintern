import { lazy } from "react";

import Login from "@/pages/auth/login";
import AboutPage from "@/pages/landing/about";
import ContactPage from "@/pages/landing/contact";
import ExplorePage from "@/pages/landing/explore";
import InternshipDetailStudentPage from "@/pages/student/intern-detail-page";
import MyApplication from "@/pages/student/my-application";
import StudentProfilePage from "@/pages/student/student-profile";

const Landing = lazy(() => import("@/pages/landing/landing"));
interface IUserRoutes {
  id: string;
  path: string;
  component: React.FC;
  meta: {
    EmployerLayout?: boolean;
    adminLayout?: boolean;
    userLayout?: boolean;
    privateRoute: boolean;
  };
}

const userRoutes: IUserRoutes[] = [
  {
    id: "landing",
    path: "/",
    component: Landing,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "log-in",
    path: "/log-in",
    component: Login,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "about",
    path: "/about",
    component: AboutPage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "contact-us",
    path: "/contact",
    component: ContactPage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "explore",
    path: "/internship",
    component: ExplorePage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "internship-page",
    path: "/internship/:id",
    component: InternshipDetailStudentPage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "application-page",
    path: "/my-applications",
    component: MyApplication,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
  {
    id: "student-profile",
    path: "/student-profile",
    component: StudentProfilePage,
    meta: {
      userLayout: true,
      privateRoute: false,
    },
  },
];

export default userRoutes;
