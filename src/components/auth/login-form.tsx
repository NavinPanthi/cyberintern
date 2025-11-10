import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { setUser } from "@/redux/slices/user-slice";

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

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(schema),
  });

  const handleLogin: SubmitHandler<LoginSchemaType> = (data) => {
    const email = data.email.toLowerCase();

    if (email.includes("admin")) {
      navigate("/admin/internships");
      dispatch(
        setUser({
          fullName: "Admin",
          email: data.email,
          phone: "7453439034",
          address: "Burnley",
          role: "admin",
        })
      );
    } else {
      navigate("/");
    }
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(handleLogin)}>
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

      <div className="mt-4 text-center">
        <p>
          Not a member?{" "}
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
