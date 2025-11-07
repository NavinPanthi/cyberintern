import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

import Button from "@/components/ui/button";
import Label from "@/components/ui/label";
import TextInput from "@/components/ui/text-input";

import { setUser } from "@/redux/slices/user-slice";
import { RootState } from "@/redux/store";
import { getInitialsTitle } from "@/utils/get-initials-title";

export interface IHandleEditProfile {
  fullName?: string;
  phone?: string;
  address?: string;
}

const schema = yup
  .object({
    fullName: yup.string().required("Full name is required."),
    phone: yup.string().optional(),
    address: yup.string().optional(),
  })
  .required();
type EditProfileSchema = yup.InferType<typeof schema>;

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProfileSchema>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.user);

  const handleEditProfile: SubmitHandler<IHandleEditProfile> = (data) => {
    const { fullName, phone, address } = data;
    const formData = new FormData();
    if (fullName) formData.set("fullName", fullName);

    if (phone) formData.set("phone", phone);
    if (address) formData.set("address", address);

    dispatch(setUser({ fullName, phone, address }));
    toast.success("Profile edited successfully.");
  };

  useEffect(() => {
    if (!userData) return;

    reset({
      fullName: userData?.fullName,
      phone: userData?.phone,
      address: userData?.address,
    });
  }, [userData]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-4 flex w-full flex-col items-center justify-center gap-4">
        <div className="flex size-40 items-center justify-center rounded-full border border-core-primary-light text-4xl tracking-widest">
          {userData && getInitialsTitle(userData?.fullName)}
        </div>
        <span className="text-2xl font-semibold">{userData?.fullName}</span>
      </div>
      <form className="mt-6 w-full" onSubmit={handleSubmit(handleEditProfile)}>
        <fieldset>
          <Label htmlFor="fullName">Full name</Label>

          <TextInput
            {...register("fullName")}
            id="fullName"
            placeholder="Enter your full name"
            errorMsg={errors.fullName?.message}
          />
        </fieldset>

        <fieldset className="mt-4">
          <Label htmlFor="email">Email</Label>

          <TextInput value={userData?.email} readOnly />
        </fieldset>

        <fieldset className="mt-4">
          <Label htmlFor="address" required={false}>
            Address
          </Label>
          <TextInput
            {...register("address")}
            id="address"
            placeholder="Enter your address"
            errorMsg={errors.address?.message}
          />
        </fieldset>
        <fieldset className="mt-4">
          <Label htmlFor="phone" required={false}>
            Phone
          </Label>
          <TextInput
            {...register("phone")}
            id="phone"
            placeholder="Enter your phone"
            errorMsg={errors.phone?.message}
          />
        </fieldset>

        <Button type="submit" className="mt-4 w-full" size="lg">
          Edit profile
        </Button>
      </form>
    </div>
  );
};

export default EditProfileForm;
