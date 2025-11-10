import { useState } from "react";

import { SubmitHandler } from "react-hook-form";

import AuthSignUpLayout from "@/components/auth/auth-signup-layout";
import SignUpForm from "@/components/auth/signup-form";

const roles = ["admin", "user", "employer"] as const;

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

  const handleSignUpAsEmployer = () => {
    setIsSignUpAsEmployer(!isSignUpAsEmployer);
  };
  return (
    <AuthSignUpLayout isSignUpAsEmployer={isSignUpAsEmployer}>
      <SignUpForm
        isSignUpAsEmployer={isSignUpAsEmployer}
        setIsSignUpAsEmployer={handleSignUpAsEmployer}
      />
    </AuthSignUpLayout>
  );
};

export default SignUp;
