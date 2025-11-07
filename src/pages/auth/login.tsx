import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { SubmitHandler } from "react-hook-form";

import AuthLogInLayout from "@/components/auth/auth-login-layout";
import LoginForm from "@/components/auth/login-form";

import { RootState } from "@/redux/store";

interface IHandleLogin {
  email: string;
  password: string;
  isRememberMe?: boolean;
}

function Login() {
  const loginStatus = useSelector<RootState>((state) => state.user.loginStatus);
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<IHandleLogin> = () => {
    navigate("/");
  };

  if (loginStatus) {
    return <Navigate replace={true} to="/" />;
  }

  return (
    <AuthLogInLayout>
      <LoginForm handleLogin={handleLogin} />
    </AuthLogInLayout>
  );
}

export default Login;
