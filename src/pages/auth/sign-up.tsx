import { useState } from "react";

import { SubmitHandler } from "react-hook-form";

import AuthSignUpLayout from "@/components/auth/auth-signup-layout";
import SignUpForm from "@/components/auth/signup-form";

import useSignUpMutation from "@/services/auth/use-signup-mutation";

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
  const { mutate: signUp, isPending } = useSignUpMutation();
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
      roles.push("employer");
    }
    roles.forEach((role) => formData.append("roles", role));

    signUp(formData);
  };

  const handleSignUpAsEmployer = () => {
    setIsSignUpAsEmployer(!isSignUpAsEmployer);
  };
  return (
    <AuthSignUpLayout isSignUpAsEmployer={isSignUpAsEmployer}>
      <SignUpForm
        handleSignUp={handleSignUp}
        isPending={isPending}
        isSignUpAsEmployer={isSignUpAsEmployer}
        setIsSignUpAsEmployer={handleSignUpAsEmployer}
      />
    </AuthSignUpLayout>
  );
};

export default SignUp;
