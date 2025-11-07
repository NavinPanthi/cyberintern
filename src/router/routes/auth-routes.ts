import { lazy } from "react";

import SignUp from "@/pages/auth/sign-up";
import AboutPage from "@/pages/landing/about";
import ContactPage from "@/pages/landing/contact";
import ExplorePage from "@/pages/landing/explore";
// import SignUp from "@/pages/auth/sign-up";
// import AboutPage from "@/pages/landing/about";
// import ContactPage from "@/pages/landing/contact";
import Landing from "@/pages/landing/landing";
import InternshipDetailStudentPage from "@/pages/student/intern-detail-page";

// import ShopPage from "@/pages/landing/shop";
// import ProductDetailUserPage from "@/pages/user/product-detail-page";

const Login = lazy(() => import("@/pages/auth/login"));

interface IAuthRoutes {
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

const authRoutes: IAuthRoutes[] = [
  {
    id: "auth",
    path: "/",
    component: Landing,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "login",
    path: "/log-in",
    component: Login,
    meta: {
      privateRoute: false,
    },
  },
  {
    id: "signup",
    path: "/sign-up",
    component: SignUp,
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
];

export default authRoutes;
