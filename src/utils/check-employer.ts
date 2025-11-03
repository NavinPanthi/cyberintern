import { IUser } from "@/redux/slices/user-slice";

export const checkEmployer = (userData: IUser) => {
  return userData?.roles.includes("employer") ? true : false;
};
