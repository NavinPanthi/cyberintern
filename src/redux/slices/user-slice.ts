import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  getUserData,
  isUserLogin,
  resetLoginData,
  setUserData,
} from "../../utils/auth-storage";

export interface IInternship {
  company: string;
  title: string;
  dateApplied: string | Date;
  status: string;
}

// Define structure for user data
export interface IUser {
  fullName: string;
  email: string;
  address?: string;
  phone?: string;
  role?: string;
  internships?: IInternship[];
}

export interface IUserState {
  user: IUser | null;
  loginStatus: boolean;
}

const initialState: IUserState = {
  user: getUserData() || null,
  loginStatus: isUserLogin() || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const updatedUser = { ...state.user, ...action.payload } as IUser;
      setUserData(updatedUser);
      state.user = updatedUser;
      state.loginStatus = true;
    },

    addInternship: (state, action) => {
      if (state.user) {
        const updatedUser = {
          ...state.user,
          internships: [...(state.user.internships || []), action.payload],
        };
        setUserData(updatedUser);
        state.user = updatedUser;
      }
    },

    resetLogin: (state) => {
      resetLoginData();
      state.user = null;
      state.loginStatus = false;
    },
  },
});

export const { setUser, addInternship, resetLogin } = userSlice.actions;
export default userSlice.reducer;
