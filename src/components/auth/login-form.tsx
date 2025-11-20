import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

import { setUser } from "@/redux/slices/user-slice";
import { RootState } from "@/redux/store";
import { getSignUpData } from "@/utils/auth-storage";

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
  const signUpData = useSelector((state: RootState) => state.user.signUp);
  const handleLogin: SubmitHandler<LoginSchemaType> = (data) => {
    const email = data.email.toLowerCase();
    const password = data.password;

    if (email === "admin123@gmail.com") {
      if (password === "12345678") {
        dispatch(
          setUser({
            fullName: "Admin",
            email: data.email,
            phone: "7453439034",
            address: "Burnley",
            role: "admin",
            password: data.password,
          })
        );
        toast.success("Admin login successful!");
        navigate("/admin/internships");
      } else {
        toast.error("Invalid admin password.");
      }
      return;
    }
    const storedUser = signUpData || getSignUpData();

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      data.email !== storedUser.email ||
      data.password !== storedUser.password
    ) {
      toast.error("Incorrect email or password.");
      return;
    }

    dispatch(setUser(storedUser));

    if (storedUser.role === "admin") navigate("/admin/internships");
    else if (storedUser.role === "employer") navigate("/employer/internships");
    else navigate("/");
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
