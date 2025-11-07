import { IUser } from "@/redux/slices/user-slice";

export const checkUser = (userData: IUser) => {
  return userData?.role === "student" ? true : false;
};
