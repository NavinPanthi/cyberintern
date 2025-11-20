import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthLogInLayout from "@/components/auth/auth-login-layout";
import LoginForm from "@/components/auth/login-form";

import { RootState } from "@/redux/store";

function Login() {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);

  if (loginStatus) {
    return <Navigate replace={true} to="/" />;
  }

  return (
    <AuthLogInLayout>
      <LoginForm />
    </AuthLogInLayout>
  );
}

export default Login;
