import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import Button from "../ui/button";
import Label from "../ui/label";
import TextInput from "../ui/text-input";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email must be valid.")
      .required("Email is required."),
    password: yup.string().required("Password is required."),
  })
  .required();

type LoginSchemaType = yup.InferType<typeof schema>;

const LoginForm = ({}: { handleLogin?: SubmitHandler<LoginSchemaType> }) => {
  const {
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  return (
    <form
      className="mt-6"
      onSubmit={() => {
        navigate("/");
      }}
    >
      <fieldset>
        <Label htmlFor="email">Email</Label>

        <TextInput
          {...register("email")}
          id="email"
          placeholder="Enter your email"
          errorMsg={errors.email?.message}
        />
      </fieldset>

      <fieldset className="mt-4">
        <Label htmlFor="password">Password</Label>
        <TextInput
          {...register("password")}
          id="password"
          isPasswordInput
          placeholder="Enter your password"
          errorMsg={errors.password?.message}
        />
      </fieldset>

      <div className="f mt-4 text-center">
        <p>
          Not a member ?{" "}
          <b
            className="cursor-pointer font-semibold"
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </b>
        </p>
      </div>

      <Button type="submit" className="mt-8 w-full" size="lg">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
