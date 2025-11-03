import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLayout from "@/layout/admin-layout";
import EmployerLayout from "@/layout/employer-layout";

import { RootState } from "@/redux/store";
import { getUserData } from "@/utils/auth-storage";
import { checkAdmin } from "@/utils/check-admin";
import { checkEmployer } from "@/utils/check-employer";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  const userData = getUserData();
  const isEmployer = checkEmployer(userData);
  const isAdmin = checkAdmin(userData);

  if (!loginStatus) {
    return <Fragment>{children}</Fragment>;
  }

  if (isEmployer) {
    return <EmployerLayout>{children}</EmployerLayout>;
  }
  if (isAdmin && !isEmployer) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <Fragment>{children}</Fragment>;
}

export default LayoutWrapper;
