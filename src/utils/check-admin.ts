import { IUser } from "@/redux/slices/user-slice";

export const checkAdmin = (userData: IUser) => {
  return userData?.role === "admin" ? true : false;
};
