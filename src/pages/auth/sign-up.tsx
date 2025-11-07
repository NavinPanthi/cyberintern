import { useState } from "react";

import { SubmitHandler } from "react-hook-form";

import AuthSignUpLayout from "@/components/auth/auth-signup-layout";
import SignUpForm from "@/components/auth/signup-form";

const roles = ["admin", "user", "seller"] as const;

// export type roleType = (typeof roles)[number];

export interface IHandleSignUp {
  fullName: string;
  email: string;
  password: string;
  profilePicture?: string;
  phone: string;
  address: string;
  roles?: string[];
}

const SignUp = () => {
  const [isSignUpAsEmployer, setIsSignUpAsEmployer] = useState(false);
  const handleSignUp: SubmitHandler<IHandleSignUp> = (data) => {
    const { fullName, email, password, phone, address } = data;
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("address", address);

    const roles: string[] = [];
    if (isSignUpAsEmployer) {
      roles.push("seller");
    }
    roles.forEach((role) => formData.append("roles", role));
  };
  const handleSignUpAsSeller = () => {
    setIsSignUpAsEmployer(!isSignUpAsEmployer);
  };
  return (
    <AuthSignUpLayout isSignUpAsEmployer={isSignUpAsEmployer}>
      <SignUpForm
        isSignUpAsEmployer={isSignUpAsEmployer}
        setIsSignUpAsEmployer={handleSignUpAsSeller}
      />
    </AuthSignUpLayout>
  );
};

export default SignUp;
