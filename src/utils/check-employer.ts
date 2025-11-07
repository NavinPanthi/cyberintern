import { IUser } from "@/redux/slices/user-slice";

export const checkEmployer = (userData: IUser) => {
  return userData?.role === "employer" ? true : false;
};
